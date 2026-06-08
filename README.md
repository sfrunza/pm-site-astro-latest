# Marketing link tracking (UTM parameters)

Use tagged URLs when linking to the website from Yelp, Google, Facebook, email, ads, QR codes, and anywhere else you control the link. That lets you see where customers came from in analytics—and eventually attach the source to CRM leads.

**Primary booking URL:** `https://www.insightmoving.com/book`

**Homepage (if you prefer):** `https://www.insightmoving.com/`

---

## How the tags work

Append query parameters to the URL:

```
https://www.insightmoving.com/book?utm_source=yelp&utm_medium=referral&utm_campaign=yelp-listing
```

| Parameter | Meaning | Examples |
| --- | --- | --- |
| `utm_source` | Where the click came from | `yelp`, `google`, `facebook`, `instagram`, `nextdoor`, `email` |
| `utm_medium` | Type of link | `referral`, `social`, `cpc`, `organic`, `email`, `print` |
| `utm_campaign` | Campaign or placement name | `yelp-listing`, `summer-2026`, `truck-wrap` |
| `utm_content` | Optional — which ad or button | `hero-cta`, `bio-link` |
| `utm_term` | Optional — paid search keyword | `boston+movers` |

**Simple alternative** (one param instead of full UTMs):

```
https://www.insightmoving.com/book?source=yelp
```

Prefer full UTMs for Google Analytics. Use lowercase and hyphens (`google-ads`, not `Google Ads`).

---

## Example links by platform

Replace campaign names as needed. Keep naming consistent so reports stay clean.

### Yelp

```
https://www.insightmoving.com/book?utm_source=yelp&utm_medium=referral&utm_campaign=yelp-listing
```

**Where to set it:** Yelp business profile → **Website** field.

### Google Business Profile

```
https://www.insightmoving.com/book?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing
```

**Where to set it:** Google Business Profile → **Website** link.

### Google Ads

```
https://www.insightmoving.com/book?utm_source=google&utm_medium=cpc&utm_campaign=moving-services&utm_term=boston+movers
```

Google Ads can auto-append `gclid`. You can still add UTMs in the final URL for clearer reporting in GA4.

### Facebook

```
https://www.insightmoving.com/book?utm_source=facebook&utm_medium=social&utm_campaign=summer-2026
```

**Where to set it:** Page bio, posts, ads, Messenger auto-replies.

### Instagram

```
https://www.insightmoving.com/book?utm_source=instagram&utm_medium=social&utm_campaign=bio-link
```

**Where to set it:** Bio link, story link stickers, ads.

### Nextdoor

```
https://www.insightmoving.com/book?utm_source=nextdoor&utm_medium=referral&utm_campaign=business-page
```

### Email signature / newsletters

```
https://www.insightmoving.com/book?utm_source=email&utm_medium=signature&utm_campaign=team-outreach
```

```
https://www.insightmoving.com/book?utm_source=email&utm_medium=newsletter&utm_campaign=spring-promo
```

### Print — QR code on truck, flyer, or business card

```
https://www.insightmoving.com/book?utm_source=print&utm_medium=qr-code&utm_campaign=truck-wrap-2026
```

Use a separate `utm_campaign` per placement (e.g. `flyer-natick`, `business-card`) so you can tell them apart.

### Referral / partner

```
https://www.insightmoving.com/book?utm_source=partner-name&utm_medium=referral&utm_campaign=realtor-referral
```

---

## Where to paste links on each platform

| Platform | Field or location |
| --- | --- |
| Yelp | Business profile → Website |
| Google Business Profile | Website URL |
| Facebook / Instagram | Page bio, posts, ad destination URL |
| Google Ads | Final URL (or tracking template + final URL) |
| Email | Signature, CTA buttons in campaigns |
| Print / QR | Encode the full tagged URL in the QR generator |

Always use the **full tagged URL**—do not strip the `?utm_...` part.

---

## Things to be aware of

### Google Analytics (GA4)

The site loads GA4 via `src/components/Analytics.astro`. GA4 reads UTM parameters automatically on landing.

Before go-live, replace the placeholder ID in `src/config/site.ts`:

- `googleAnalyticsId: "G-XXXXXXXXXX"` → your real GA4 measurement ID

Then check **Reports → Acquisition → Traffic acquisition** in GA4.

### Session storage (attribution capture)

The site saves UTM and referral params in **`sessionStorage`** on first visit (`src/components/AttributionCapture.astro`). They persist for the tab session even if the user navigates from the homepage to `/book` without UTMs in the URL.

Stored keys: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `source`, `gclid`, `fbclid`, `msclkid`.

On each page load, the data is exposed to the CRM widget as:

```js
window.__BOOKING_WIDGET_CONFIG__.attribution
```

Example:

```json
{
  "utm_source": "yelp",
  "utm_medium": "referral",
  "utm_campaign": "yelp-listing"
}
```

**Why sessionStorage, not localStorage:** it tracks “how they found us this visit,” not an old click from weeks ago.

### CRM booking widget

The website stores attribution in `sessionStorage` and exposes it as `window.__BOOKING_WIDGET_CONFIG__.attribution`.

The CRM widget ([`book-form-widget`](https://github.com/sfrunza/crm-app/tree/main/client/src/book-form-widget)) reads that on submit via `getBookingAttribution()` and sends it with `POST /requests` as `request.attribution`.

**Deploy checklist:**

1. Run the API migration: `rails db:migrate` (`add_attribution_to_requests`)
2. Rebuild and redeploy `book-form-widget.js` to Vercel
3. Tagged marketing links + GA4 ID on the marketing site

Each new lead stores JSON like:

```json
{
  "utm_source": "yelp",
  "utm_medium": "referral",
  "utm_campaign": "yelp-listing"
}
```

### Auto-tracking params from ad platforms

Some platforms add their own params on top of yours:

| Platform | Auto param |
| --- | --- |
| Google Ads | `gclid` |
| Facebook / Meta | `fbclid` |
| Microsoft Ads | `msclkid` |

Keep your UTMs; these extra params do not replace them.

### Naming rules

- Use lowercase: `yelp`, not `Yelp`
- Use hyphens: `summer-2026`, not `summer 2026`
- Reuse the same `utm_source` / `utm_medium` values everywhere—do not invent new spellings per link
- One `utm_campaign` per placement or campaign so you can compare performance

### Link builder tool

Google’s Campaign URL Builder: https://ga-dev-tools.google/campaign-url-builder/

---

## Quick checklist

1. Pick consistent names for `utm_source`, `utm_medium`, and `utm_campaign`.
2. Build a tagged link for each platform (see examples above).
3. Paste tagged links into Yelp, GBP, social bios, ads, email, and QR codes.
4. Set a real GA4 ID in `src/config/site.ts`.
5. After a few days, review GA4 Traffic acquisition.
6. Deploy CRM changes (migration + rebuilt widget) so attribution is saved on each lead.
