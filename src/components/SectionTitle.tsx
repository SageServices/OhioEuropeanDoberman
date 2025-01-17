import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold gradient-text mb-4">{title}</h2>
    <p className="text-accent/80 max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
);

export default SectionTitle;