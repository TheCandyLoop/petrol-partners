# Petrol Partners — Project Handoff / Continuation Prompt

If you are picking this project up in a NEW Claude chat (because credits ran out, or a
different account), copy this ENTIRE file and paste it as your first message, along with
the attached zip of the current project. Then say: "Continue from where this left off,
starting with the next stage."

---

## ORIGINAL PROJECT BRIEF (full spec, do not skip)

PETROL PARTNERS — FRONTEND BETA / V1

Build the frontend Beta/V1 of a startup product called Petrol Partners — a
Maharashtra-focused community carpooling and bikepooling platform.

ROLE: The user is a frontend developer. Project must be FRONTEND-ONLY.

Use: React, Vite, JavaScript, CSS, React Router (if needed).

Do NOT build or require: backend, Node/Express server, database, Firebase, Supabase,
API server, payment gateway, authentication backend, real-time backend, WebSocket
server, production notification/messaging service, real map API, production GPS
tracking, production Aadhaar/driving licence/document verification.

Everything works using local mock data, React state, and frontend logic only. Any
feature that would normally need a backend gets a polished frontend demonstration
using mock data instead.

STAGE-BY-STAGE RULE (critical): Build in small independent stages. Each stage must
leave the app in a working, buildable state. Do NOT build everything in one response.
Do NOT create a giant monolithic App.jsx. Stop at a clean checkpoint after each stage
and wait for the user to say "continue" before starting the next stage.

CODING STYLE: Normal, professional, maintainable code a junior dev could read. No AI/
Claude-related comments, no unnecessary abstractions, no giant components. Reusable
components with sensible names (Navbar, Hero, SearchForm, RideCard, RouteTimeline,
FuelBreakdown, DriverProfile, Footer, etc). Don't over-componentize tiny JSX bits.

PRODUCT: Petrol Partners — "Share the Journey, Share the Fuel." / "Travel Together,
Save Together." / "100% Fuel Sharing. Zero Profit." NOT a commercial ride-hailing
platform like Uber/Ola/Rapido. The driver is already travelling to the destination
and has empty seats; passengers contribute toward the REAL shared travel cost, never
profit. This message must be repeated throughout the UI.

TARGET AREA (V1): Maharashtra only. Cities to reference: Mumbai, Pune, Nashik,
Nagpur, Kolhapur, Solapur, Chhatrapati Sambhajinagar, Satara, Sangli, Jalgaon, Latur,
Amravati, Nanded. Message: "Currently available across Maharashtra. India coming
soon."

DESIGN DIRECTION: Original premium startup interface. UX inspiration (not branding)
from Airbnb, Uber, Google Maps, Booking.com, Stripe, Linear, Notion. Feel: premium,
modern, trustworthy, clean, community-driven, eco-conscious, affordable, simple,
polished, investor-ready. Palette: white, deep green, fresh green, blue, dark
charcoal, soft gray. Rounded cards, subtle shadows, soft gradients, glass-like
surfaces, premium typography, excellent whitespace, subtle hover/transitions,
accessible contrast. Not flashy.

BRAND: Name "Petrol Partners". Tagline "Share the Journey, Share the Fuel."
Supporting: "Travel Together, Save Together." Core principle: "100% Fuel Sharing.
Zero Profit." Logo concept: location pin + fuel drop + two people sharing a journey,
green and blue, built with CSS/SVG (no external image needed).

PRIMARY USER FLOWS (must be excellent, this is the core demo):
1. FIND A RIDE: Pickup/Destination/Date/Vehicle/Passengers -> Search -> multiple ride
   options -> compare -> Ride Details -> Request Ride -> success state.
2. OFFER A RIDE: Pickup/Destination/Date/Time/Vehicle/Seats/Fuel type/Mileage/Fuel
   cost/Toll -> calculated shared contribution -> preview -> Publish -> "Your ride has
   been published."
3. NEED A RIDE: passenger posts a request (From/To/Date/Time/etc) -> request shown as
   posted -> mock nearby providers shown.

BETA PAGES (priority order — first 7 are the client-demo priority, don't over-invest
in the rest):
1. Home  2. Find a Ride  3. Search Results  4. Ride Details  5. Offer a Ride
6. Need a Ride  7. Dashboard
Then lighter secondary pages: 8. Profile 9. Safety Center 10. Verification
11. Notifications 12. Messages 13. Trip History 14. Reviews 15. FAQ 16. About
17. Contact

HOME PAGE: Navbar (logo, Find a Ride, Offer a Ride, Need a Ride, How It Works,
Safety, Login/Profile). Hero headline "Share the Journey. Share the Fuel." with
supporting copy and hero search card (Pickup/Destination/Date/Vehicle/Passengers,
buttons Find a Ride / Offer a Ride). Sections: Share Fuel Not Profit, Verified
Community, Safe Travel, Eco-Friendly Transportation, Cost Transparency (Fuel Cost,
Toll Cost, Platform Fee = Rs 0, Driver Profit = Rs 0, Passenger Contribution), How It
Works (3-4 steps), Popular Maharashtra Routes, Testimonials (fictional, clearly demo
content), FAQ, Final CTA ("Ready to share your journey?" with Find a Ride / Offer a
Ride buttons).

FIND A RIDE / SEARCH RESULTS: multiple ride cards, each showing driver photo, name,
verified badge, rating, completed rides, vehicle, fuel type, seats, pickup,
destination, departure time, estimated arrival, intermediate stops, fuel
contribution, View Details, Request Ride. Example demo drivers: Rahul Patil (4.8 star,
126 rides, Hyundai Creta, Petrol, 2 seats, Rs 340), Sneha Kulkarni (4.9 star, 84 rides,
Honda City, Petrol, 2 seats, Rs 315), Amit Joshi (4.7 star, 210 rides, Tata Nexon, CNG,
2 seats, Rs 290). Fictional demo users only.

INTERMEDIATE STOP MATCHING (key differentiator): visually show a route timeline
(vertical) with times and stops, e.g. Mumbai -> Panvel -> Karjat -> Lonavala ->
Talegaon -> Pune, so passengers can see they can join/leave from any stop, not just
endpoints. No real map API — UI only.

RIDE DETAILS: driver profile, verification, rating, completed rides, reviews,
vehicle, fuel type, seats, route with intermediate stops, pickup/drop,
departure/arrival, fuel transparency card (Fuel Cost Rs 280, Toll Cost Rs 60, Platform
Fee Rs 0, Driver Profit Rs 0, Passenger Contribution Rs 340), highlighted message
"Only fuel-sharing allowed. Profit-making is not permitted.", CTA "Request Ride". Also
Last-Mile Guidance UI (e.g. "The ride ends near Mumbai. Your final destination is
1.8 km away." with Walk/Auto/Metro/Bus options) — UI only, no real map integration.

OFFER A RIDE: fields Pickup, Destination, Date, Time, Vehicle, Available Seats, Fuel
Type, Estimated Mileage, Estimated Fuel Cost, Toll Charges. Cost transparency card
same style as above, calculated from form inputs where practical. Message "Only
fuel-sharing allowed. Profit-making is not permitted." Preview then Publish -> "Your
ride has been published."

NEED A RIDE: form (From, To, Date, Preferred Time, Passengers, Vehicle Preference,
Message), CTA "Post Ride Request", after submit show "Your ride request is live." and
a demo list of existing ride requests.

DASHBOARD: upcoming rides, booked rides, ride requests, notifications, profile
completion, reviews, trip analytics, quick actions (Find a Ride / Offer a Ride /
Need a Ride). Mock data.

PROFILE: profile image, name, verified status, rating, completed trips, member
since, vehicle, reviews.

SAFETY CENTER: Verified Drivers, Verified Passengers, Emergency Contact, Live Trip
Sharing, SOS, Report User, Block User, Community Ratings.

VERIFICATION UI: frontend-only multi-step wizard — Identity, Driving Licence, RC
Book, Insurance, Vehicle Photos, Selfie Verification. No real verification, no
document upload backend — just demonstrate the frontend state/flow.

NOTIFICATIONS: mock cards, e.g. "Your ride request was accepted.", "Your Pune ->
Mumbai trip is tomorrow.", "Rahul left you a review."

MESSAGES: frontend-only mock conversation UI, no real-time backend.

REVIEWS: star rating, written review, reviewer, trip, date — fictional demo data.

FAQ: What is Petrol Partners? / Can drivers make a profit? / How is the contribution
calculated? / Are drivers verified? / Can I join from an intermediate stop? / Can I
offer a ride? / Can I request a ride? / Is Petrol Partners available outside
Maharashtra?

MOCK DATA: organized under src/data/ (rides.js, users.js, routes.js, reviews.js,
etc). Realistic Maharashtra examples, no real personal info, not repeated inline
across components.

ROUTING (React Router): / , /find-ride , /rides/:id , /offer-ride , /need-ride ,
/dashboard , /profile , /safety , /verification , /notifications , /messages ,
/reviews , /faq , /about , /contact

RESPONSIVE: must work well on desktop, tablet, mobile. Mobile forms stack, cards
stay readable, buttons touch-friendly, no horizontal overflow, spacing/hierarchy
preserved — not just a shrunk desktop layout.

INTERACTIONS: all via React state (search -> filtered mock results, View Details ->
Ride Details, Request Ride -> success state, Offer Ride -> preview -> published,
Need Ride -> posted state, filters, vehicle toggle Car/Bike, passenger selector,
basic form validation). No backend.

PROJECT STRUCTURE (keep simple):
src/
  components/
  pages/
  data/
  assets/
  App.jsx
  App.css (if used)
  index.css
  main.jsx

DEPENDENCIES: keep minimal. Before adding any package ask "can this be done with
plain React and CSS?" — if yes, don't add a dependency.

STAGE PLAN (follow in order, one stage per response, stop after each and wait for
"continue"):
- STAGE 1: global styling, brand, navbar, footer, Home page (hero, search form, core
  sections). DONE
- STAGE 2: Find a Ride, Search Results, Ride Cards, filters, sorting, mock ride data.
  DONE
- STAGE 3: Ride Details, driver profile, vehicle details, route timeline,
  intermediate stops, fuel transparency, last-mile guidance, Request Ride
  interaction. DONE
- STAGE 4: Offer a Ride, fuel cost calculation, toll, contribution calculation,
  route preview, publish interaction. DONE (see status below)
- STAGE 5: Need a Ride, ride request form, posted request state, mock available
  requests. DONE (see status below)
- STAGE 6: Dashboard, Profile, Notifications, Trip History, Reviews. DONE (see status below)
- STAGE 7: Safety, Verification UI, FAQ, About, Contact, Messages. DONE (see status below)
- STAGE 8: final polish — responsive fixes, spacing, typography, hover/focus states,
  loading/success/empty states, consistency, remove unused code, fix console errors,
  fix broken routes, fix mobile overflow. DONE (see status below)

At the end of each stage report: files created, files modified, what was
implemented, what to test, exact run command. Then STOP and wait for the user.

GOAL: a credible, premium, investor-ready frontend prototype a client can click
through. Most important flows to nail: Home -> Find a Ride -> Search -> Compare rides
-> Ride Details -> intermediate stops -> fuel transparency -> Request Ride. Home ->
Offer a Ride -> cost breakdown -> Publish. Home -> Need a Ride -> Post request.

---

## CURRENT STATUS — what's already done

**All 8 stages are COMPLETE.** The project is finished per the original stage plan
(built with `npm run build`, linted with `npm run lint` / oxlint with 0 warnings/
errors, all routes verified against `App.jsx`, no console errors).

Project scaffolded with Vite + React (JavaScript) + react-router-dom (only added
dependency).

### Files that exist right now:

```
petrol-partners/
  index.html
  package.json
  vite.config.js
  .oxlintrc.json
  .gitignore
  README.md
  CONTINUE_HERE.md          (this file)
  public/
    favicon.svg
  src/
    main.jsx                 (BrowserRouter wrapper)
    App.jsx                  (all routes wired; unbuilt pages -> ComingSoon placeholder)
    index.css                (design tokens / CSS variables, base styles, .btn/.card/etc)
    components/
      Logo.jsx / Logo.css
      Navbar.jsx / Navbar.css
      Footer.jsx / Footer.css
      Hero.jsx / Hero.css
      SearchForm.jsx / SearchForm.css
      FuelPhilosophy.jsx / FuelPhilosophy.css      (Share Fuel Not Profit + Eco)
      TrustSafety.jsx / TrustSafety.css            (Verified Community + Safe Travel)
      CostTransparency.jsx / CostTransparency.css  (home page version)
      HowItWorks.jsx / HowItWorks.css
      PopularRoutes.jsx / PopularRoutes.css
      Testimonials.jsx / Testimonials.css
      FaqTeaser.jsx / FaqTeaser.css
      FinalCta.jsx / FinalCta.css
      RideCard.jsx / RideCard.css                  (Stage 2 — search results card)
      RideFilters.jsx / RideFilters.css            (Stage 2 — vehicle toggle + sort)
      DriverProfile.jsx / DriverProfile.css        (Stage 3 — ride details driver card)
      RouteTimeline.jsx / RouteTimeline.css        (Stage 3 — vertical stop timeline)
      FuelBreakdown.jsx / FuelBreakdown.css        (Stage 3 — reusable cost transparency
                                                     card, ready for Offer a Ride reuse)
      LastMileGuidance.jsx / LastMileGuidance.css  (Stage 3)
      ReviewCard.jsx / ReviewCard.css              (Stage 3 — reusable, will be reused on
                                                     the dedicated Reviews page later)
      OfferRideForm.jsx / OfferRideForm.css        (Stage 4 — offer-ride input form)
      NeedRideForm.jsx / NeedRideForm.css          (Stage 5 — need-a-ride request form,
                                                     same field/label pattern as
                                                     OfferRideForm, adds a textarea field)
      RideRequestCard.jsx / RideRequestCard.css    (Stage 5 — reusable card for a posted
                                                     ride request, used in the "Nearby
                                                     Ride Requests" list)
      TripCard.jsx / TripCard.css                  (Stage 6 — upcoming/past trip row,
                                                     used on the Dashboard)
      NotificationCard.jsx / NotificationCard.css  (Stage 6 — used on both the
                                                     Notifications page and the
                                                     Dashboard's notifications preview)
      SafetyFeatureCard.jsx / SafetyFeatureCard.css (Stage 7 — icon/title/description
                                                     card used on the Safety Center page)
      ConversationListItem.jsx / ConversationListItem.css  (Stage 7 — conversation
                                                     row used in the Messages sidebar)
    pages/
      Home.jsx                (assembles all Stage 1 sections)
      FindRide.jsx / FindRide.css       (Stage 2 — search results page, reuses SearchForm
                                          as a "modify search" bar; filters by pickup/
                                          destination incl. intermediate stops, falls back
                                          to showing all rides if no exact match)
      RideDetails.jsx / RideDetails.css (Stage 3 — full ride detail view + Request Ride
                                          with local success state)
      OfferRide.jsx / OfferRide.css     (Stage 4 — form -> preview -> publish flow;
                                          reuses FuelBreakdown + RouteTimeline from
                                          Stage 3 rather than rebuilding them)
      NeedRide.jsx / NeedRide.css       (Stage 5 — form -> posted state, plus a
                                          "Nearby Ride Requests" list below; posting a
                                          request that matches an existing mock request's
                                          from/to filters it out of the nearby list so the
                                          demo doesn't show your own request back to you)
      Dashboard.jsx / Dashboard.css     (Stage 6 — stats row, upcoming rides, trip
                                          history, nearby ride requests preview, profile
                                          summary card, notifications preview; quick
                                          actions link to Find/Offer/Need a Ride)
      Profile.jsx / Profile.css         (Stage 6 — profile header, bio, vehicle details,
                                          profile-completion progress bar + checklist
                                          linking to /verification)
      Notifications.jsx / Notifications.css  (Stage 6 — full notifications list, reuses
                                          NotificationCard)
      Reviews.jsx / Reviews.css         (Stage 6 — dedicated reviews page, average
                                          rating summary + reuses ReviewCard from
                                          Stage 3 for the individual review list)
      Safety.jsx / Safety.css           (Stage 7 — Safety Center: feature grid built
                                          from src/data/safety.js, plus three
                                          mock-interactive tools — SOS trigger, report
                                          form, block confirmation — all local state
                                          only, no real backend or dispatch)
      Verification.jsx / Verification.css   (Stage 7 — 6-step wizard: Identity,
                                          Driving Licence, RC Book, Insurance, Vehicle
                                          Photos, Selfie Verification. Steps and their
                                          initial done/pending state come from
                                          src/data/verificationSteps.js, loosely
                                          mirroring currentUser.profileChecklist so it
                                          opens in a state consistent with the Profile
                                          page. No real document upload.)
      Faq.jsx / Faq.css                 (Stage 7 — full accordion FAQ page, reuses
                                          src/data/faq.js rather than duplicating the
                                          Stage 1 FaqTeaser content)
      About.jsx / About.css             (Stage 7 — brand story, values, mission CTA)
      Contact.jsx / Contact.css         (Stage 7 — contact form with local-only
                                          submit state + a static support/safety/
                                          location info panel)
      Messages.jsx / Messages.css       (Stage 7 — frontend-only conversation list +
                                          message thread; reuses ConversationListItem;
                                          sending a message appends to local state only,
                                          no real-time backend, matches the "you" =
                                          Rahul Patil persona used in Stage 6)
      ComingSoon.jsx           (still used only for the * (404) route)
    data/
      routes.js                (maharashtraCities list, popularRoutes)
      testimonials.js
      faq.js
      rides.js                 (Stage 2/3 — 9 mock rides, each with embedded driver info,
                                 per-stop timeline with times, fuelCost/tollCost breakdown,
                                 and lastMile guidance data)
      reviews.js                (Stage 3 — fictional reviews keyed by driver id)
      rideRequests.js           (Stage 5 — 5 mock "Need a Ride" requests from other
                                 fictional users, shown in the nearby requests list)
      currentUser.js            (Stage 6 — the logged-in demo user. Reuses the
                                 "Rahul Patil" driver id already established in rides.js
                                 and reviews.js, so Dashboard/Profile/Reviews all tell
                                 one consistent story instead of a disconnected persona)
      notifications.js          (Stage 6 — 6 mock notifications, used on both the
                                 Notifications page and the Dashboard preview)
      trips.js                  (Stage 6 — upcomingTrips / pastTrips mock arrays for
                                 the Dashboard; separate from rides.js, which powers
                                 Find a Ride search results)
      safety.js                 (Stage 7 — 6 safety feature descriptions for the
                                 Safety Center page)
      verificationSteps.js      (Stage 7 — the 6 verification wizard steps with
                                 initial done/pending state)
      conversations.js          (Stage 7 — 3 mock conversations with message history
                                 for the Messages page)
```

### Design tokens already established (reuse these, don't redefine):
- CSS variables in src/index.css: --color-deep-green (#0b5f3c), --color-fresh-green
  (#2fa66a), --color-fresh-green-light, --color-blue (#1f6fd6), --color-blue-light,
  --color-charcoal, --color-gray-900/700/500/300/100, --color-white
- --gradient-hero (green to blue diagonal), --shadow-sm/md/lg, --radius-sm/md/lg/full
- Utility classes: .container, .section, .section-heading, .section-eyebrow, .btn
  (.btn-primary/.btn-secondary/.btn-blue/.btn-block), .card, .badge
  (.badge-green/.badge-blue)
- Font: Inter (loaded via Google Fonts link in index.html)
- Rupee amounts are written as plain "Rs X" or "\u20B9X" (rupee sign) inline in JSX/data —
  do NOT use the rupee sign inside any generated PDF/reportlab document (default font
  renders it as a black box); this only affects documentation exports, not the app itself.

### Routes already wired in App.jsx:
- / -> Home (Stage 1)
- /find-ride -> FindRide (Stage 2)
- /rides/:id -> RideDetails (Stage 3)
- /offer-ride -> OfferRide (Stage 4)
- /need-ride -> NeedRide (Stage 5)
- /dashboard -> Dashboard (Stage 6)
- /profile -> Profile (Stage 6)
- /notifications -> Notifications (Stage 6)
- /reviews -> Reviews (Stage 6)
- /safety -> Safety (Stage 7)
- /verification -> Verification (Stage 7)
- /messages -> Messages (Stage 7)
- /faq -> Faq (Stage 7)
- /about -> About (Stage 7)
- /contact -> Contact (Stage 7)
- * (404) -> ComingSoon (still the only remaining use of that placeholder component)

Note on Trip History: the original spec listed it as its own secondary page (#13)
but didn't give it a dedicated route in the ROUTING list. It was built as a
"Trip History" section inside the Dashboard (upcomingTrips + pastTrips from
src/data/trips.js) rather than a separate /trip-history route, since that's where a
user would expect to see it alongside their upcoming rides. Flag this to the
client during the demo in case they'd prefer it split out later.

**All 17 pages from the original BETA PAGES list now exist and are wired to real
routes.** Every route in App.jsx renders a built page except the catch-all 404.

### Stage 8 — what was actually done in the polish pass
- Re-ran `npm run lint` (oxlint, 0 warnings/errors on 58 files) and `npm run build`
  (clean production build) before and after the polish changes.
- Audited every internal `<Link to="...">` in `src/` against the routes defined in
  `App.jsx`. Found and fixed one real gap: the `/messages` route existed and was
  fully built (Stage 7) but nothing in the app linked to it, so it was unreachable
  through normal navigation. Fixed by adding a "Messages" preview card to the
  Dashboard sidebar (`src/pages/Dashboard.jsx` + `Dashboard.css`) — shows the two
  most recent conversations (name, route, last-message time, unread dot/badge)
  reusing `src/data/conversations.js`, each row links to `/messages`, plus a
  "View all" link. No new components were added; this follows the same
  `.dashboard-section-header` / `card` pattern already used for the Notifications
  and Profile sidebar sections.
- Reviewed every page-level CSS file for responsive behavior at desktop, ~768px,
  and ~375px (grid breakpoints, flex-wrap, the Navbar mobile menu, the Messages
  two-column-to-stacked layout, the Dashboard stat grid, the search form grid,
  route timeline wrapping). All of it was already handled correctly from Stages
  1–7 — no responsive bugs found or fixed beyond the Messages-card addition above.
- Fixed stale copy: `ComingSoon.jsx` (the component behind the `*` / 404 route)
  still said "This page is being built in an upcoming stage of the Petrol
  Partners Beta," which was true early on but is misleading now that all 17
  pages exist — it's a genuine 404 at this point, not an unbuilt-stage
  placeholder. Copy updated to a real "page not found" message. The component
  itself was left in place/unrenamed since `App.jsx` and this file already
  document it as 404-only.
- No stray `console.*` calls, `TODO`/`FIXME` markers, or placeholder Lorem Ipsum
  text found anywhere in `src/`.
- No raw `<img>` tags exist anywhere in the app (avatars/logo are CSS+SVG per the
  original brief), so there was nothing to audit for missing `alt` text.

### What's next
There is no Stage 9 in the original plan — **the project is feature-complete
per the brief.** If picking this up in a future session, treat it as maintenance/
enhancement work rather than a numbered stage, for example:
- Splitting Trip History out of the Dashboard into its own `/trip-history` route,
  if the client prefers that after seeing the demo (flagged back in the Stage 7
  status note, still an open question — not done, since the original spec was
  ambiguous about whether it needed a dedicated route).
- Any client feedback from the demo review.

The user has a hard deadline and needs the final build handed off as a complete
downloadable zip they can upload to GitHub and run in GitHub Codespaces (not
comfortable with local npm on Windows):
1. Delete the old repo contents first, unzip, upload the contents of the
   extracted `project/` folder to the repo root (not the folder itself), commit.
2. This CONTINUE_HERE.md is included both inside the zip and as a standalone
   download, in case a future session needs to pick the project back up.
