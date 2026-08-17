// Mock notifications for the demo Notifications page and the Dashboard preview list.

export const notifications = [
  {
    id: 'n1',
    type: 'ride',
    message: 'Your ride request was accepted.',
    detail: 'Sneha Kulkarni confirmed your seat on the Nashik → Mumbai ride.',
    time: '10 minutes ago',
    read: false,
  },
  {
    id: 'n2',
    type: 'reminder',
    message: 'Your Pune → Mumbai trip is tomorrow.',
    detail: 'Departure at 07:30 AM from the usual pickup point near Shivajinagar.',
    time: '3 hours ago',
    read: false,
  },
  {
    id: 'n3',
    type: 'review',
    message: 'Rahul left you a review.',
    detail: '"Great company on the trip, would definitely ride together again."',
    time: '1 day ago',
    read: true,
  },
  {
    id: 'n4',
    type: 'ride',
    message: 'A new ride request matches your route.',
    detail: 'Ananya Deshmukh posted a request for Pune → Mumbai on Aug 21.',
    time: '1 day ago',
    read: true,
  },
  {
    id: 'n5',
    type: 'system',
    message: 'Verification reminder.',
    detail: 'Complete selfie verification to unlock full driver status.',
    time: '2 days ago',
    read: true,
  },
  {
    id: 'n6',
    type: 'ride',
    message: 'Your published ride is live.',
    detail: 'Pune → Mumbai on Aug 20 is now visible to passengers searching that route.',
    time: '3 days ago',
    read: true,
  },
];
