import React from 'react';

interface Achievement {
  icon: React.ReactNode;
  text: string;
}

interface DogCardProps {
  name: string;
  image: string;
  title: string;
  achievements: Achievement[];
  description: string;
}

const DogCard: React.FC<DogCardProps> = ({
  name,
  image,
  title,
  achievements,
  description
}) => {
  return (
    <div className="rounded-2xl bg-dark-700 border border-primary/20 overflow-hidden hover:border-primary/50 transition-colors">
      <div className="aspect-square relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent mb-1">{name}</h3>
        <p className="text-primary mb-4">{title}</p>
        
        <div className="space-y-2 mb-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-2 text-accent/80">
              {achievement.icon}
              <span>{achievement.text}</span>
            </div>
          ))}
        </div>
        
        <p className="text-accent/70">{description}</p>
      </div>
    </div>
  );
};

export default DogCard;