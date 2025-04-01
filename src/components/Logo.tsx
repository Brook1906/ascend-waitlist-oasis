
import React from 'react';

interface LogoProps {
  className?: string;
}

// Empty Logo component that doesn't render anything
const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return null;
};

export default Logo;
