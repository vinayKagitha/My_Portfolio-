
export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Publication {
  title: string;
  journal: string;
  description: string;
  link?: string;
}