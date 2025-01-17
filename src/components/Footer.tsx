import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'About Us', href: 'https://www.ohioeuropeandoberman.com/About' },
    { name: 'Our Dogs', href: 'https://www.ohioeuropeandoberman.com/our-dogs' },
    { name: 'Puppies', href: 'https://www.ohioeuropeandoberman.com/puppies' },
    { name: 'Litter News', href: 'https://www.ohioeuropeandoberman.com/litter-news' },
    { name: 'Contact Us', href: 'https://www.ohioeuropeandoberman.com/contact' }
  ];

  return (
    <footer className="bg-dark-800 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Ohio European Doberman</h3>
            <p className="text-accent/80">Where Companions Are Born and Raised</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-accent/80">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-accent/80 hover:text-primary">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent/80 hover:text-primary">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent/80 hover:text-primary">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-primary/20 focus:border-primary/50 outline-none"
              />
              <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-accent hover:opacity-90" onClick={() => window.location.href = 'https://www.ohioeuropeandoberman.com/litter-news'}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-accent/60">
          <p>&copy; {new Date().getFullYear()} Ohio European Doberman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;