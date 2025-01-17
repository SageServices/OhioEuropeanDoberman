import React from 'react';
import { Calendar, Users } from 'lucide-react';

interface PuppyLitterProps {
  parents: {
    sire: string;
    dam: string;
  };
  image: string;
  birthDate: string;
  available: number;
  description: string;
  status: string;
}

const PuppyLitter: React.FC<PuppyLitterProps> = ({
  parents,
  image,
  birthDate,
  available,
  description,
  status
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 rounded-2xl bg-dark-700 border border-primary/20 p-6">
      <div className="aspect-video rounded-lg overflow-hidden">
        <img
          src={image}
          alt="Puppy Litter"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-accent mb-2">
            {parents.sire} x {parents.dam}
          </h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-accent/80">
              <Calendar className="w-4 h-4" />
              <span>{birthDate}</span>
            </div>
            <div className="flex items-center gap-2 text-accent/80">
              <Users className="w-4 h-4" />
              <span>{available} Available</span>
            </div>
          </div>
        </div>
        
        <p className="text-accent/70">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
            {status}
          </span>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-accent hover:opacity-90 transition-opacity">
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuppyLitter;