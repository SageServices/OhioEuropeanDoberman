import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="hero-gradient absolute inset-0" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1636578191869-595d3536cc30?auto=format&fit=crop&w=2000')" 
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="gradient-text">Ohio European Doberman</span>
        </h1>
        <h2 className="text-3xl md:text-4xl mb-6">Where Companions Are Born and Raised</h2>
        <p className="text-xl md:text-2xl mb-12 text-accent/80 max-w-3xl mx-auto">
          Join the legacy of excellence in European Doberman breeding
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-accent hover:opacity-90 transition-opacity flex items-center space-x-2" onClick={() => window.location.href = 'https://www.ohioeuropeandoberman.com/puppies'}>
            <span>View Available Puppies</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border border-primary/50 rounded-full text-primary hover:bg-primary/10 transition-colors" onClick={() => window.location.href = 'https://www.ohioeuropeandoberman.com/litter-news'}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;