// Steps for the frontend-only Verification wizard. `done` gives each step's initial
// state, loosely mapped from currentUser.profileChecklist so the wizard opens in a
// state consistent with the Profile page's completion bar. No real document upload
// or verification happens — this only demonstrates the frontend flow.

export const verificationSteps = [
  {
    id: 'identity',
    title: 'Identity',
    description: 'Confirm your name and phone number match your government ID.',
    done: true,
  },
  {
    id: 'driving-licence',
    title: 'Driving Licence',
    description: 'Upload a clear photo of the front and back of your driving licence.',
    done: true,
  },
  {
    id: 'rc-book',
    title: 'RC Book',
    description: "Upload your vehicle's registration certificate (RC book).",
    done: true,
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Upload your current vehicle insurance policy document.',
    done: false,
  },
  {
    id: 'vehicle-photos',
    title: 'Vehicle Photos',
    description: 'Add clear photos of your vehicle from the front, back, and sides.',
    done: true,
  },
  {
    id: 'selfie-verification',
    title: 'Selfie Verification',
    description: 'Take a live selfie so we can match it against your uploaded ID.',
    done: false,
  },
];
