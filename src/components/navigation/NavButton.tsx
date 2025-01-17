import React from 'react';

interface NavButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ 
  children, 
  variant = 'primary',
  onClick 
}) => {
  const baseStyles = "px-6 py-2 rounded-full transition-all duration-200";
  const styles = {
    primary: `${baseStyles} bg-gradient-to-r from-primary to-secondary text-accent hover:opacity-90`,
    secondary: `${baseStyles} border border-primary/50 text-primary hover:bg-primary/10`
  };

  return (
    <button 
      className={styles[variant]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;