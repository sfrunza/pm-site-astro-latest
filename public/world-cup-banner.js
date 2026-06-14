(() => {
  const GAMES_URL = 'https://worldcup26.ir/get/games';
  const TEAMS_URL = 'https://worldcup26.ir/get/teams';
  const REFRESH_MS = 60_000;
  const DISPLAY_TZ = 'America/New_York';
  const SEASON_START = '2026-06-11';
  const SEASON_END = '2026-07-19';

  const STADIUM_TZ = {
    1: 'America/Mexico_City',
    2: 'America/Mexico_City',
    3: 'America/Monterrey',
    4: 'America/Chicago',
    5: 'America/Chicago',
    6: 'America/Chicago',
    7: 'America/New_York',
    8: 'America/New_York',
    9: 'America/New_York',
    10: 'America/New_York',
    11: 'America/New_York',
    12: 'America/Toronto',
    13: 'America/Vancouver',
    14: 'America/Los_Angeles',
    15: 'America/Los_Angeles',
    16: 'America/Los_Angeles',
  };

  function todayEdt() {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: DISPLAY_TZ,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
  }

  function inSeason() {
    const today = todayEdt();
    return today >= SEASON_START && today <= SEASON_END;
  }

  function parseStatus(finished, elapsed) {
    if (finished === 'TRUE') return 'finished';
    if (elapsed && elapsed !== 'notstarted') return 'live';
    return 'upcoming';
  }

  function utcFromZoned(localIso, timeZone) {
    const [datePart, timePart] = localIso.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute, second = 0] = timePart.split(':').map(Number);
    let utc = Date.UTC(year, month - 1, day, hour, minute, second);

    for (let i = 0; i < 3; i += 1) {
      const parts = Object.fromEntries(
        new Intl.DateTimeFormat('en-US', {
          timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
          .formatToParts(new Date(utc))
          .map((part) => [part.type, part.value]),
      );

      const actual = Date.UTC(
        Number(parts.year),
        Number(parts.month) - 1,
        Number(parts.day),
        Number(parts.hour),
        Number(parts.minute),
        Number(parts.second),
      );

      utc -= actual - Date.UTC(year, month - 1, day, hour, minute, second);
    }

    return utc;
  }

  function toEdt(utcMs) {
    const edtDate = new Intl.DateTimeFormat('en-CA', {
      timeZone: DISPLAY_TZ,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(utcMs));

    const kickoffEdt = new Intl.DateTimeFormat('en-US', {
      timeZone: DISPLAY_TZ,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    }).format(new Date(utcMs));

    const sortTime = new Intl.DateTimeFormat('en-GB', {
      timeZone: DISPLAY_TZ,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date(utcMs));

    return { edtDate, kickoffEdt, sortTime };
  }

  function parseKickoff(localDate, stadiumId) {
    const [datePart, timePart = '00:00'] = localDate.split(' ');
    const [month, day, year] = datePart.split('/');
    const pad = (value) => String(value).padStart(2, '0');
    const localIso = `${year}-${pad(Number(month))}-${pad(Number(day))}T${timePart}:00`;
    const tz = STADIUM_TZ[stadiumId] || DISPLAY_TZ;
    return toEdt(utcFromZoned(localIso, tz));
  }

  function buildTeamLookup(teams) {
    const byId = new Map();
    for (const team of teams) byId.set(team.id, team);
    return byId;
  }

  function toMatch(game, teams) {
    const status = parseStatus(game.finished, game.time_elapsed);
    const schedule = parseKickoff(game.local_date, game.stadium_id);
    const home = teams.get(game.home_team_id);
    const away = teams.get(game.away_team_id);

    return {
      id: game.id,
      homeTeam: game.home_team_name_en,
      awayTeam: game.away_team_name_en,
      homeFlag: home?.flag || '',
      awayFlag: away?.flag || '',
      homeScore: status === 'upcoming' ? null : Number(game.home_score || 0),
      awayScore: status === 'upcoming' ? null : Number(game.away_score || 0),
      edtDate: schedule.edtDate,
      kickoffEdt: schedule.kickoffEdt,
      sortTime: schedule.sortTime,
      group: `Group ${game.group}`,
      status,
    };
  }

  function pickToday(matches) {
    const today = todayEdt();
    const order = { live: 0, finished: 1, upcoming: 2 };

    return matches
      .filter((match) => match.edtDate === today)
      .sort((a, b) => {
        const diff = order[a.status] - order[b.status];
        return diff !== 0 ? diff : a.sortTime.localeCompare(b.sortTime);
      });
  }

  function statusLabel(match) {
    if (match.status === 'live') return 'LIVE';
    if (match.status === 'finished') return 'FT';
    return match.kickoffEdt;
  }

  function renderFlag(flag) {
    if (!flag) return '';
    return `<img src="${flag}" alt="" width="20" height="15" class="h-3.5 w-5 rounded-sm object-cover" loading="lazy" decoding="async" />`;
  }

  function renderMatch(match) {
    const score = match.status === 'upcoming' ? 'vs' : `${match.homeScore}–${match.awayScore}`;
    const statusClass =
      match.status === 'live'
        ? 'bg-red-500 text-white'
        : match.status === 'upcoming'
          ? 'bg-amber-400 text-amber-950'
          : 'bg-white/15 text-white/80';

    return `<div class="world-cup-banner__item flex shrink-0 items-center gap-2 text-xs sm:text-sm" data-match-id="${match.id}">
      <span class="text-white/60">${match.group}</span>
      <div class="flex items-center gap-1.5">${renderFlag(match.homeFlag)}<span class="font-medium">${match.homeTeam}</span></div>
      <span class="rounded bg-white/10 px-1.5 py-0.5 font-semibold tabular-nums">${score}</span>
      <div class="flex items-center gap-1.5"><span class="font-medium">${match.awayTeam}</span>${renderFlag(match.awayFlag)}</div>
      <span class="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${statusClass}">${statusLabel(match)}</span>
    </div>`;
  }

  function setBannerHeight(active) {
    document.documentElement.style.setProperty('--site-banner-height', active ? '2.5rem' : '0px');
  }

  function hideBanner() {
    const banner = document.getElementById('world-cup-banner');
    if (!banner) return;
    banner.className = 'hidden';
    banner.setAttribute('aria-hidden', 'true');
    banner.innerHTML = '';
    setBannerHeight(false);
  }

  function showBanner(matches) {
    const banner = document.getElementById('world-cup-banner');
    if (!banner) return;

    banner.className =
      'world-cup-banner pointer-events-auto fixed top-0 right-0 left-0 z-70 overflow-hidden border-b border-white/10 bg-[#0b3d2e] text-white';
    banner.setAttribute('aria-label', 'FIFA World Cup 2026 live scores');
    banner.setAttribute('aria-live', 'polite');
    banner.removeAttribute('aria-hidden');
    banner.dataset.today = todayEdt();
    banner.innerHTML = `<div class="flex h-10 items-center">
      <div class="flex shrink-0 items-center gap-2 border-r border-white/15 px-3 sm:px-4">
        <span class="text-base leading-none" aria-hidden="true">⚽</span>
        <span class="text-[11px] font-semibold tracking-wide uppercase sm:text-xs">World Cup Today</span>
      </div>
      <div class="world-cup-banner__track relative min-w-0 flex-1 overflow-hidden">
        <div id="world-cup-banner-track" class="world-cup-banner__content flex w-max items-center gap-6 px-4"></div>
      </div>
    </div>`;

    const track = document.getElementById('world-cup-banner-track');
    if (!track) return;

    const markup = matches.map(renderMatch).join('');
    track.innerHTML = markup + markup;
    setBannerHeight(true);
  }

  async function refresh() {
    if (!inSeason()) {
      hideBanner();
      return;
    }

    try {
      const [gamesRes, teamsRes] = await Promise.all([
        fetch(GAMES_URL, { headers: { Accept: 'application/json' } }),
        fetch(TEAMS_URL, { headers: { Accept: 'application/json' } }),
      ]);

      if (!gamesRes.ok || !teamsRes.ok) return;

      const { games } = await gamesRes.json();
      const { teams } = await teamsRes.json();
      const matches = pickToday(games.map((game) => toMatch(game, buildTeamLookup(teams))));

      if (matches.length === 0) {
        hideBanner();
        return;
      }

      showBanner(matches);
    } catch {
      // Ignore network errors and keep the last rendered state.
    }
  }

  if (!inSeason()) return;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refresh, { once: true });
  } else {
    refresh();
  }

  window.setInterval(refresh, REFRESH_MS);
})();
