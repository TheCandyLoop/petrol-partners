import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindRide from './pages/FindRide';
import RideDetails from './pages/RideDetails';
import OfferRide from './pages/OfferRide';
import NeedRide from './pages/NeedRide';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Reviews from './pages/Reviews';
import Safety from './pages/Safety';
import Verification from './pages/Verification';
import Messages from './pages/Messages';
import Faq from './pages/Faq';
import About from './pages/About';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-ride" element={<FindRide />} />
          <Route path="/rides/:id" element={<RideDetails />} />
          <Route path="/offer-ride" element={<OfferRide />} />
          <Route path="/need-ride" element={<NeedRide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ComingSoon title="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
