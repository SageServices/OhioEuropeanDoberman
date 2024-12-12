import React from 'react';
import SectionTitle from './SectionTitle';
import DogCard from './cards/DogCard';
import { Award, Heart, Shield } from 'lucide-react';

const OurDogs = () => {
  const dogs = [
    {
      name: "Kaiser vom Königshaus",
      image: "https://images.unsplash.com/photo-1636578191869-595d3536cc30?auto=format&fit=crop&w=800",
      title: "Champion Stud",
      achievements: [
        { icon: <Award className="w-4 h-4" />, text: "International Champion" },
        { icon: <Heart className="w-4 h-4" />, text: "Health Tested" },
        { icon: <Shield className="w-4 h-4" />, text: "DNA Verified" }
      ],
      description: "Our premier stud with exceptional European lineage and proven show success."
    },
    // Add more dogs as needed
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Our Champion Dogs"
          subtitle="Meet our exceptional breeding program champions"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog, index) => (
            <DogCard key={index} {...dog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDogs;