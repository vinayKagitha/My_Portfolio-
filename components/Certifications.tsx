import React, { forwardRef } from 'react';
import { CERTIFICATIONS_DATA } from '../constants';
import Section from './ui/Section';

interface CertificationsProps {
    id: string;
}

const CheckIcon = () => (
    <svg className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
);

const Certifications = forwardRef<HTMLElement, CertificationsProps>(({ id }, ref) => {
  return (
    <Section title="Awards & Certifications" id={id} ref={ref}>
      <ul className="space-y-1">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <li key={index} className="flex items-center text-slate-300 p-2 -ml-2 rounded-md transition-colors hover:bg-slate-800/50">
            <CheckIcon />
            <span>
                <span className="font-semibold text-slate-200">{cert.name}</span>
                <span className="text-slate-400"> – {cert.issuer}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
});

export default Certifications;
