import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import OurDogs from './components/OurDogs';
import Puppies from './components/Puppies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <Hero />
        <About />
        <OurDogs />
        <Puppies />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;