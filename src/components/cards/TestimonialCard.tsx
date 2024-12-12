import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  text: string;
  dogName: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  image,
  text,
  dogName
}) => {
  return (
    <div className="rounded-2xl bg-dark-700 border border-primary/20 p-6 hover:border-primary/50 transition-colors">
      <Quote className="w-8 h-8 text-primary mb-4" />
      <p className="text-accent/80 mb-6">{text}</p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={image}
            alt={`${name}'s Doberman`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-accent">{name}</h4>
          <p className="text-sm text-accent/60">{location}</p>
          <p className="text-sm text-primary">{dogName}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;