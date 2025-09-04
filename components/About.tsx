import React, { forwardRef } from 'react';
import Section from './ui/Section';

interface AboutProps {
    id: string;
}

const About = forwardRef<HTMLElement, AboutProps>(({ id }, ref) => {
  return (
    <Section title="About" id={id} ref={ref}>
      <p className="text-lg text-slate-300 max-w-4xl">
        Results-driven CS master's student with hands-on software development and machine learning internship experience. Skilled in Python, Java, database design, and frameworks like Streamlit and OpenCV. Recognized for delivering robust, user-focused applications and collaborating effectively in team-driven project environments.
      </p>
    </Section>
  );
});

export default About;
