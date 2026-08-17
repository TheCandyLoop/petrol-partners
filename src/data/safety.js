// Safety Center content — mirrors the safety features already summarized on the
// Home page's TrustSafety section, expanded with a description and demo interaction
// for each. Frontend-only: no real emergency dispatch, GPS, or backend behind any of it.

export const safetyFeatures = [
  {
    id: 'verified-drivers',
    icon: '✅',
    title: 'Verified Drivers',
    description:
      'Every driver completes identity, licence, RC book, insurance, and selfie verification before their profile shows a verified badge.',
  },
  {
    id: 'verified-passengers',
    icon: '🙋',
    title: 'Verified Passengers',
    description:
      'Passengers verify their phone number and identity so drivers know who they are sharing a ride with.',
  },
  {
    id: 'emergency-contact',
    icon: '📞',
    title: 'Emergency Contact',
    description:
      'Add a trusted contact who can be notified automatically if you use the SOS button during a trip.',
  },
  {
    id: 'live-trip-sharing',
    icon: '📍',
    title: 'Live Trip Sharing',
    description:
      'Share your live trip status with a friend or family member so they can follow along until you arrive.',
  },
  {
    id: 'community-ratings',
    icon: '⭐',
    title: 'Community Ratings',
    description:
      'Every driver and passenger is rated after each trip, building a track record the whole community can see.',
  },
  {
    id: 'report-block',
    icon: '🚫',
    title: 'Report & Block',
    description:
      'Report a concerning interaction to our safety team, or block a user so they can no longer contact you or appear in your matches.',
  },
];
