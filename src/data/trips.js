// Mock trip history for the Dashboard's upcoming/past trip lists. Distinct from
// rides.js (which powers Find a Ride search results) — these are trips already
// tied to the logged-in demo user, either as driver or passenger.

export const upcomingTrips = [
  {
    id: 't1',
    role: 'driver',
    from: 'Pune',
    to: 'Mumbai',
    date: '2026-08-20',
    time: '07:30 AM',
    status: 'Published',
    seats: '2 of 2 booked',
    contribution: 340,
  },
  {
    id: 't2',
    role: 'passenger',
    from: 'Nashik',
    to: 'Mumbai',
    date: '2026-08-24',
    time: '06:45 AM',
    status: 'Confirmed',
    withDriver: 'Sneha Kulkarni',
    contribution: 315,
  },
];

export const pastTrips = [
  {
    id: 't3',
    role: 'driver',
    from: 'Pune',
    to: 'Mumbai',
    date: '2026-07-28',
    time: '07:30 AM',
    status: 'Completed',
    seats: '2 of 2 booked',
    contribution: 340,
  },
  {
    id: 't4',
    role: 'passenger',
    from: 'Mumbai',
    to: 'Pune',
    date: '2026-07-15',
    time: '06:00 PM',
    status: 'Completed',
    withDriver: 'Amit Joshi',
    contribution: 290,
  },
  {
    id: 't5',
    role: 'driver',
    from: 'Pune',
    to: 'Mumbai',
    date: '2026-06-30',
    time: '07:45 AM',
    status: 'Completed',
    seats: '1 of 2 booked',
    contribution: 340,
  },
];
