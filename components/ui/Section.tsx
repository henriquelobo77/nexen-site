import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export function Section({ children, className, id, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-nexen-gray/30',
    gradient: 'bg-gradient-to-br from-nexen-navy via-nexen-blue to-nexen-cyan',
  };
  
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className='text-3xl md:text-4xl font-bold text-nexen-navy mb-4'>
        {title}
      </h2>
      {subtitle && (
        <p className='text-lg text-nexen-navy/70 max-w-2xl mx-auto'>
          {subtitle}
        </p>
      )}
    </div>
  );
}
