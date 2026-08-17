import Hero from '../components/Hero';
import FuelPhilosophy from '../components/FuelPhilosophy';
import TrustSafety from '../components/TrustSafety';
import CostTransparency from '../components/CostTransparency';
import HowItWorks from '../components/HowItWorks';
import PopularRoutes from '../components/PopularRoutes';
import Testimonials from '../components/Testimonials';
import FaqTeaser from '../components/FaqTeaser';
import FinalCta from '../components/FinalCta';

function Home() {
  return (
    <>
      <Hero />
      <FuelPhilosophy />
      <TrustSafety />
      <CostTransparency />
      <HowItWorks />
      <PopularRoutes />
      <Testimonials />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}

export default Home;
