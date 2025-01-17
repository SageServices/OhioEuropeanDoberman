import React from 'react';
import SectionTitle from './SectionTitle';
import ServiceCard from './cards/ServiceCard';
import { Shield, Award, Heart, Dog, Dumbbell, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dog className="w-12 h-12 text-primary" />,
      title: "Breeding Program",
      description: "Champion European bloodlines with comprehensive health testing and genetic screening."
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-primary" />,
      title: "Training Programs",
      description: "Professional training services for puppies and adult Dobermans."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Health Support",
      description: "Lifetime health guidance and support for all our Dobermans."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Health Guarantees",
      description: "Comprehensive health guaranteed backed by years of experience."
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Show Preparation",
      description: "Professional handling and show preparation services."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Lifetime Support",
      description: "Ongoing support and guidance for the lifetime of your Doberman."
    }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive care and support for your Doberman companion"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;