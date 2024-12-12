import React from 'react';
import SectionTitle from './SectionTitle';
import PuppyLitter from './cards/PuppyLitter';
import { Calendar } from 'lucide-react';

const Puppies = () => {
  const litters = [
    {
      parents: {
        sire: "Kaiser vom Königshaus",
        dam: "Luna von der Schwarzwald"
      },
      image: "https://images.unsplash.com/photo-1636578191869-595d3536cc30?auto=format&fit=crop&w=800",
      birthDate: "March 15, 2024",
      available: 4,
      description: "Exceptional European bloodlines with proven health clearances.",
      status: "Available"
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Available Puppies"
          subtitle="Current and upcoming litters from our champion bloodlines"
        />
        
        <div className="space-y-12">
          {litters.map((litter, index) => (
            <PuppyLitter key={index} {...litter} />
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-dark-700 border border-primary/20">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-accent">Upcoming Litters</h3>
          </div>
          <p className="text-accent/80">
            Contact us to learn about our upcoming litters and reservation process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Puppies;