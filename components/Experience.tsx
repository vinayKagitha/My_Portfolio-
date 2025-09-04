import React, { forwardRef } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import Section from './ui/Section';

interface ExperienceProps {
    id: string;
}

const Experience = forwardRef<HTMLElement, ExperienceProps>(({ id }, ref) => {
  return (
    <Section title="Experience" id={id} ref={ref}>
      <div className="relative border-l-2 border-slate-700 pl-8 space-y-12">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-slate-500 border-2 border-slate-950"></div>
            <div className="p-1 rounded-lg transition-all duration-300 group">
                <div className="absolute -inset-x-4 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="relative">
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{exp.period}</p>
                    <h3 className="text-lg font-bold text-slate-200 mt-1">{exp.role} · {exp.company}</h3>
                    <ul className="mt-3 list-disc list-inside space-y-2 text-slate-400">
                    {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                    </ul>
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

export default Experience;
