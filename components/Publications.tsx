import React, { forwardRef } from 'react';
import { PUBLICATIONS_DATA } from '../constants';
import Section from './ui/Section';

interface PublicationsProps {
    id: string;
}

const Publications = forwardRef<HTMLElement, PublicationsProps>(({ id }, ref) => {
  return (
    <Section title="Publications" id={id} ref={ref}>
      <div className="space-y-6">
        {PUBLICATIONS_DATA.map((pub, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg transition-colors hover:bg-slate-800/80">
            <h3 className="text-lg font-bold text-slate-200">{pub.title}</h3>
            <p className="text-md font-semibold text-cyan-400 italic my-1">{pub.journal}</p>
            <p className="text-slate-400 mt-2">{pub.description}</p>
            {pub.link && (
                <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-slate-700/80 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                >
                    View Publication
                </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
});

export default Publications;