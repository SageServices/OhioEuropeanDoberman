import React from 'react';
import { Shield, Dna, Fingerprint } from 'lucide-react';
import Feature from './Feature';
import SectionTitle from './SectionTitle';

const About = () => {
  const features = [
    {
      icon: <Dna className="w-12 h-12 text-primary" />,
      title: "Verified Lineage",
      description: "Ensuring complete transparency."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Smart Breeders",
      description: "Years of tradition and flawless excellence ensures that our Dobermans are the real deal."
    },
    {
      icon: <Fingerprint className="w-12 h-12 text-primary" />,
      title: "Digital Identity",
      description: "Each Doberman has a unique digital identity with verified health records and certifications."
    }
  ];

  return (
    <section className="relative py-20 bg-dark-800 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1636578191869-595d3536cc30?auto=format&fit=crop&w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Expert Breeding"
          subtitle="Full bred European Doberman Companions"
        />
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;