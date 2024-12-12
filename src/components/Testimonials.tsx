import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './cards/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Anderson",
      location: "Ohio, USA",
      image: "https://images.unsplash.com/photo-1636578191869-595d3536cc30?auto=format&fit=crop&w=800",
      text: "Our Doberman from Ohio European is not just a pet, but a true family guardian. The support and guidance we've received has been exceptional.",
      dogName: "Max vom Königshaus"
    },
    {
      name: "Sarah Mitchell",
      location: "Michigan, USA",
      image: "https://images.unsplash.com/photo-1636578191869-595d3536cc30?auto=format&fit=crop&w=800",
      text: "The dedication to breeding healthy, well-tempered Dobermans is evident in every interaction. Our puppy has exceeded all expectations.",
      dogName: "Luna von der Schwarzwald"
    },
    {
      name: "Michael Roberts",
      location: "Pennsylvania, USA",
      image: "https://images.unsplash.com/photo-1636578191869-595d3536cc30?auto=format&fit=crop&w=800",
      text: "The training program provided gave us the tools we needed to raise a confident and obedient Doberman. Couldn't be happier!",
      dogName: "Thor vom Königshaus"
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Client Testimonials"
          subtitle="Hear from our satisfied Doberman families"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;