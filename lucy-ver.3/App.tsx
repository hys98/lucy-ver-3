import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Benchmarks from './components/Benchmarks';
import TechDeepDive from './components/TechDeepDive';
import Features from './components/Features';
import Pricing from './components/Pricing';
import DatasetPreview from './components/DatasetPreview';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-deep-900 text-slate-100 font-sans selection:bg-neon-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Benchmarks />
        <TechDeepDive />
        <Features />
        <Pricing />
        <DatasetPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;