import React from 'react';
import { Dog } from 'lucide-react';
import NavLink from './navigation/NavLink';

const Header = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: 'https://www.ohioeuropeandoberman.com/About' },
    { name: 'Our Dogs', href: 'https://www.ohioeuropeandoberman.com/our-dobermans' },
    { name: 'Puppies', href: 'https://www.ohioeuropeandoberman.com/puppies' },
    { name: 'Services', href: 'https://www.ohioeuropeandoberman.com/litter-news' },
    { name: 'Contact Us', href: 'https://www.ohioeuropeandoberman.com/Contact' },
    { name: 'Puppy Map', href: 'https://dobermap.netlify.app' }
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
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;