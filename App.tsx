import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Steps from './components/Steps';
import Urgency from './components/Urgency';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Destinations />
      <Features />
      <Testimonials />
      <Steps />
      <Urgency />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;