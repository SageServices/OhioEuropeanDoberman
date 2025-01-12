import React from 'react';
import { Dog } from 'lucide-react';
import NavLink from './navigation/NavLink';
import NavButton from './navigation/NavButton';

const Header = () => {
  const navItems = [
    'Home',
    'About Us',
    'Our Dogs',
    'Puppies',
    'Services',
    'Testimonials',
    'Contact Us',
    'Blog'
  ];

  return (
    <header className="fixed w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Dog className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">Ohio European Doberman</span>
              <span className="text-sm text-accent/80">America's #1 Doberman Resource</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;