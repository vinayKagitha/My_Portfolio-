import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    certifications: useRef<HTMLElement>(null),
    publications: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const animationObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const handleAnimationIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const animationObserver = new IntersectionObserver(handleAnimationIntersect, animationObserverOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
        animationObserver.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
          animationObserver.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-slate-950 font-sans leading-relaxed">
        <div className="lg:flex lg:justify-between lg:gap-4 container mx-auto px-6 md:px-12">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
                <Header activeSection={activeSection} />
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24">
                <About ref={sectionRefs.about} id="about" />
                <Skills ref={sectionRefs.skills} id="skills" />
                <Experience ref={sectionRefs.experience} id="experience" />
                <Projects ref={sectionRefs.projects} id="projects" />
                <Education ref={sectionRefs.education} id="education" />
                <Certifications ref={sectionRefs.certifications} id="certifications" />
                <Publications ref={sectionRefs.publications} id="publications" />
                <Footer />
            </main>
        </div>
    </div>
  );
};

export default App;