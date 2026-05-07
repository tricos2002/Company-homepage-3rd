import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'outline';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'default' }) => {
  const isLight = variant === 'light' || variant === 'outline';
  const isOutline = variant === 'outline';
  
  const logoSrc = isLight ? '/logo-white.svg' : '/logo.svg';

  return (
    <img
      src={logoSrc}
      alt="Tricos Logo"
      className={cn(className, isOutline && "logo-outline")}
    />
  );
};
