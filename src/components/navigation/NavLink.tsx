import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-accent/80 hover:text-primary transition-colors duration-200"
  >
    {children}
  </a>
);

export default NavLink;