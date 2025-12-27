import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProductCards from "./components/ProductCards";
import FeatureCarousel from "./components/FeatureCarousel";
import Testimonials from "./components/Testimonials";
import PressSection from "./components/PressSection";
import Footer from "./components/Footer";
import EZTrack from "./components/EZTrack";
import Episcalp from "./components/EpiScalp";

function Home() {
  return (
    <>
      <Hero />
      <ProductCards />
      <FeatureCarousel />
      <Testimonials />
      <PressSection />
      <Footer />
    </>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-black">{title}</h1>
        <p className="mt-3 text-black/70">Page coming soon.</p>
        <div className="mt-6">
          <Link to="/" className="underline text-black/70 hover:text-black">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation scrolled={scrolled} />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/products" element={<Placeholder title="Products" />} />
          <Route path="/episcalp" element={<Episcalp />} />
          <Route path="/eztrack" element={<EZTrack />} />

          {/* Clinical */}
          <Route path="/clinical" element={<Placeholder title="Clinical" />} />
          <Route
            path="/clinical-evidence"
            element={<Placeholder title="Clinical evidence" />}
          />
          <Route
            path="/publications"
            element={<Placeholder title="Publications" />}
          />
          <Route path="/use-cases" element={<Placeholder title="Use cases" />} />

          {/* Company */}
          <Route path="/company" element={<Placeholder title="Company" />} />
          <Route path="/about-us" element={<Placeholder title="About us" />} />
          <Route path="/team" element={<Placeholder title="Team" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />

          {/* Resources */}
          <Route path="/resources" element={<Placeholder title="Resources" />} />
          <Route path="/blog-news" element={<Placeholder title="Blog / News" />} />
          <Route
            path="/for-investors"
            element={<Placeholder title="For Investors" />}
          />
          <Route path="/support" element={<Placeholder title="Support" />} />

          {/* Contact Us */}
          <Route
            path="/Contact-Us"
            element={<Placeholder title="Contact Us" />}
          />

          {/* Catch-all */}
          <Route path="*" element={<Placeholder title="Not Found" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}