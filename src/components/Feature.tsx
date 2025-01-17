import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-dark-700 border border-primary/20 hover:border-primary/50 transition-colors">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-accent">{title}</h3>
    <p className="text-accent/70">{description}</p>
  </div>
);

export default Feature;