import React, { forwardRef } from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ title, id, children }, ref) => {
  return (
    <section id={id} ref={ref} className="py-12 md:py-16 section-fade-in">
      <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest text-slate-200 mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
});

export default Section;
