// Frontend-only mock conversation data for the Messages page. No real-time backend —
// sending a message only appends it to local component state for the demo.

export const conversations = [
  {
    id: 'c1',
    participant: { name: 'Sneha Kulkarni', initials: 'SK' },
    route: 'Nashik → Mumbai · Aug 24',
    lastMessageAt: '10 minutes ago',
    unread: true,
    messages: [
      { id: 'm1', from: 'them', text: 'Hi! I accepted your request for the Nashik-Mumbai ride.', time: '9:02 AM' },
      { id: 'm2', from: 'them', text: 'Pickup will be near the ST stand around 6:45 AM, is that okay?', time: '9:03 AM' },
      { id: 'm3', from: 'me', text: "That works great, I'll be there by 6:40.", time: '9:10 AM' },
      { id: 'm4', from: 'them', text: 'Perfect, see you then!', time: '9:12 AM' },
    ],
  },
  {
    id: 'c2',
    participant: { name: 'Amit Joshi', initials: 'AJ' },
    route: 'Mumbai → Pune · Jul 15',
    lastMessageAt: '1 day ago',
    unread: false,
    messages: [
      { id: 'm1', from: 'them', text: 'Thanks for riding with me today, hope you reached home okay.', time: 'Yesterday' },
      { id: 'm2', from: 'me', text: 'Yes, all good! Left a review for you.', time: 'Yesterday' },
    ],
  },
  {
    id: 'c3',
    participant: { name: 'Ananya Deshmukh', initials: 'AD' },
    route: 'Pune → Mumbai · Aug 21',
    lastMessageAt: '2 days ago',
    unread: false,
    messages: [
      { id: 'm1', from: 'them', text: 'Saw your Pune-Mumbai ride, is there still a seat available?', time: 'Mon' },
      { id: 'm2', from: 'me', text: 'Yes, one seat left. Feel free to request it.', time: 'Mon' },
    ],
  },
];
