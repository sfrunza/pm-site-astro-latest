import { SITE } from '@/config/site';

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'Are you licensed and insured?',
    answer: `
      <p>
        Yes, we are fully licensed with the Massachusetts Department of Public
        Utilities and we carry Cargo, Motor Vehicle, and General Liability
        Insurance.
      </p>`,
  },
  {
    question: 'Is the price base on the hours?',
    answer: `
      <p>
        That is correct. If you're having a local move with us, your final price
        is based on the actual <b>labor time + travel time</b> to your origin
        and back from your destination. labor and travel time are being prorated
        based on 15 minute increments.
      </p>`,
  },
  {
    question: 'Do I have to pay for the travel time?',
    answer: `
      <p>
        You will be billed for the travel time from our warehouse to your
        origin, and for the travel time from the destination back to our
        parking. Those charges are prorated based on <b>15 minute increments</b>
        and are calculated by the reading of Google Maps. In case if our truck
        is being delayed by traffic, the additional time incurred will not be
        added to the bill. Any travel time between the origin and the
        destination is considered to be part of the "labor time".
      </p>`,
  },
  {
    question: 'What forms of payment do you accept?',
    answer: `
      <p>
        Payments for <a href="/local-moving">local services</a> can be made in
        form of cash, credit card or a certified bankers check. Payments for
        <a href="/interstate-moving">long distance services</a> can be made in
        form of cash, certified bankers check or debit/credit cards. Any
        payments with a personal check have to be granted by your moving
        coordinator.
      </p>`,
  },
  {
    question: 'When should I pay for the move?',
    answer: `
      <p>
        There is a deposit of <b>$100.00</b> required on all local moves and a
        10% deposit from final price on any long distance move. All service
        charges on a local move can be paid upon the completion of the job.
        Payments for long distance move has to be performed prior to the actual
        unload of your shipment at your destination.
      </p>`,
  },
  {
    question: 'Can I leave stuff inside the dresser?',
    answer: `
      <p>
        The answer to this question is yes and no. You can definitely leave your
        light linens inside the drawers, but please make sure to take out any
        heavier items (i.e. jeans, files, books). Please keep in mind that our
        movers might be changing the position of the dresser by standing it up
        vertically, therefore any small articles left inside might fall behind
        the drawers and get lost. Bottom line is, empty dresser is easier to be
        carried takes less time to be wrapped and the chances of something being
        lost or damaged are minimal.
      </p>`,
  },
  {
    question:
      'Will you provide with moving pads for the furniture? Are those free of charge?',
    answer: `
      <p>
        We provide free moving blankets for all moving jobs. However, we do not
        provide free packing tape to secure our pads around the furniture. It is
        up to you to decide if you want to use our tape or to purchase your own.
      </p>`,
  },
  {
    question: 'Am I able to change my move date and/or time?',
    answer: `
      <p>
        If you need to change your move, date and/or time, log in to your
        profile to request a date and/or time change. If you can't log in, email
        <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a> or give
        us a call at
        <a href="tel:${SITE.contactPhone}">${SITE.contactPhone}</a> and we will
        assist you with the change. Keep in mind that price may change when
        rescheduling online.
      </p>
    `,
  },
];
