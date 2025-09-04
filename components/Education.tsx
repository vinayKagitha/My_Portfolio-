import React, { forwardRef } from 'react';
import { EDUCATION_DATA } from '../constants';
import Section from './ui/Section';

interface EducationProps {
    id: string;
}

const Education = forwardRef<HTMLElement, EducationProps>(({ id }, ref) => {
  return (
    <Section title="Education" id={id} ref={ref}>
      <div className="space-y-4">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="bg-slate-800/50 p-5 rounded-lg transition-colors hover:bg-slate-800/80">
            <div className="flex justify-between items-start flex-col sm:flex-row">
                <div>
                    <h3 className="text-lg font-bold text-slate-200">{edu.degree}</h3>
                    <p className="text-md text-slate-300">{edu.institution}</p>
                </div>
                <div className="text-sm text-slate-400 mt-2 sm:mt-0 text-left sm:text-right flex-shrink-0">
                    <p>{edu.period}</p>
                    <p className="font-semibold text-cyan-400">{edu.details}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

export default Education;
