import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import FeatureCarousel from './components/FeatureCarousel';
import Testimonials from './components/Testimonials';
import PressSection from './components/PressSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <ProductCards />
      <FeatureCarousel />
      <Testimonials />
      <PressSection />
      <Footer />
    </div>
  );
}

export default App;
