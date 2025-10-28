
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ForRestaurants from '../components/ForRestaurants';
import ForDelivery from '../components/ForDelivery';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BetaBanner from '@/components/BetaBanner.tsx';

const Index = () => {
  return (
    <div className="min-h-screen">
      <BetaBanner />
      <Header />
      <Hero />
      <ForRestaurants />
      <ForDelivery />
      <HowItWorks />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
