import React, { forwardRef } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import Section from './ui/Section';

interface ProjectsProps {
    id: string;
}

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1.5" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
    </svg>
)

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-2.5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:col-span-6">
        <h3 className="text-lg font-bold text-slate-200">{project.title}</h3>
        <ul className="mt-2 list-disc list-inside space-y-2 text-sm text-slate-400">
            {project.description.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
        {project.link && (
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 bg-slate-700/80 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-300"
            >
            <GithubIcon />
            View on GitHub
            </a>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
                <span key={tech} className="bg-cyan-400/10 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
                </span>
            ))}
        </div>
      </div>
      <img src={project.imageUrl} alt={project.title} className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1 w-full h-auto mt-4 sm:mt-0" width="200" height="48" />
  </div>
);

const Projects = forwardRef<HTMLElement, ProjectsProps>(({ id }, ref) => {
  return (
    <Section title="Projects" id={id} ref={ref}>
      <ul className="group/list space-y-12">
        {PROJECTS_DATA.map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
});

export default Projects;
