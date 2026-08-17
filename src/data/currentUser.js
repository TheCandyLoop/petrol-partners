// Mock data for the logged-in demo user. Reuses Rahul Patil (already established as
// a driver in rides.js and reviews.js for the Pune <-> Mumbai route) so the Dashboard,
// Profile, Trip History and Reviews pages all tell one consistent story instead of
// introducing a brand-new fictional person with no history behind them.

export const currentUser = {
  id: 'rahul-patil',
  name: 'Rahul Patil',
  initials: 'RP',
  verified: true,
  rating: 4.8,
  completedRides: 126,
  memberSince: '2023',
  vehicle: 'Hyundai Creta',
  fuelType: 'Petrol',
  homeCity: 'Pune',
  bio: 'Commutes between Pune and Mumbai for work most weeks. Prefers a quiet, comfortable ride and is happy to share music or podcast picks.',
  profileCompletion: 85,
  profileChecklist: [
    { label: 'Phone number verified', done: true },
    { label: 'Driving licence uploaded', done: true },
    { label: 'RC book uploaded', done: true },
    { label: 'Vehicle photos added', done: true },
    { label: 'Selfie verification', done: false },
  ],
};
