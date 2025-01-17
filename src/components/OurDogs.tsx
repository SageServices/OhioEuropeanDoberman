import React from 'react';
import SectionTitle from './SectionTitle';
import DogCard from './cards/DogCard';
import { Award, Heart, Shield } from 'lucide-react';

const OurDogs = () => {
  const dogs = [
    {
      name: "Draco",
      image: "https://cdn.freewebstore.com/origin/995840/doberman%60_1736953317174.png",
      title: "Companion Stud",
      achievements: [
        { icon: <Award className="w-4 h-4" />, text: "International Companion" },
        { icon: <Heart className="w-4 h-4" />, text: "Health Tested" },
        { icon: <Shield className="w-4 h-4" />, text: "DNA Verified" }
      ],
      description: "Our premier Stud with exceptional European lineage."
    },
    {
      name: "Memphis",
      image: "https://cdn.freewebstore.com/origin/995840/7_1736949045581.png",
      title: "Companion Queen",
      achievements: [
        { icon: <Award className="w-4 h-4" />, text: "International Companion" },
        { icon: <Heart className="w-4 h-4" />, text: "Health Tested" },
        { icon: <Shield className="w-4 h-4" />, text: "DNA Verified" }
      ],
      description: "Our premier Queen with exceptional European lineage."
    },
    // Add more dogs as needed
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Doberman Companions"
          subtitle="Meet The Parents"
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