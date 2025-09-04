import React, { forwardRef } from 'react';
import { SKILLS_DATA } from '../constants';
import { Skill } from '../types';
import Section from './ui/Section';

interface SkillsProps {
    id: string;
}

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => (
  <span className="inline-block bg-cyan-400/10 text-cyan-300 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full transition-colors duration-300 hover:bg-cyan-400/20">
    {skill.name}
  </span>
);

const Skills = forwardRef<HTMLElement, SkillsProps>(({ id }, ref) => {
  return (
    <Section title="Skills" id={id} ref={ref}>
      <div className="space-y-6">
        {SKILLS_DATA.map((category) => (
          <div key={category.category}>
            <h3 className="text-md font-semibold text-slate-300 mb-3">{category.category}</h3>
            <div className="flex flex-wrap">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

export default Skills;
