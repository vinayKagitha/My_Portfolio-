import { SkillCategory, Experience, Project, Education, Certification, Publication } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [{ name: 'Python' }, { name: 'Java' }, { name: 'C' }, { name: 'JavaScript' }, { name: 'HTML/CSS' }, { name: 'Unix fundamentals' }]
  },
  {
    category: 'Frameworks & Tools',
    skills: [{ name: 'Streamlit' }, { name: 'OpenCV' }, { name: 'PyAutoGUI' }, { name: 'IntelliJ IDEA' }, { name: 'Eclipse' }, { name: 'Jupyter' }, { name: 'Git' }]
  },
  {
    category: 'ML Libraries',
    skills: [{ name: 'TensorFlow' }, { name: 'NumPy' }, { name: 'PyTorch (basic)' }]
  },
  {
    category: 'Databases',
    skills: [{ name: 'MySQL' }, { name: 'Oracle' }]
  },
  {
    category: 'Core Concepts',
    skills: [{ name: 'Data Structures & Algorithms' }, { name: 'Database Management Systems' }, { name: 'Object-Oriented Programming' }]
  },
  {
    category: 'Professional',
    skills: [{ name: 'Analytical Thinking' }, { name: 'Adaptability' }, { name: 'Collaboration' }, { name: 'Data Confidentiality' }]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Machine Learning Intern',
    company: 'Smart Internz',
    period: 'Mar 2023 - Sep 2023',
    location: 'India',
    description: [
      'Developed ML models (linear regression, decision trees, SVM) using Python to solve real-world problems, enhancing model accuracy through iterative tuning.',
      'Performed data cleaning, feature engineering, and validation to boost predictive reliability across multiple projects.',
      'Collaborated in a team setting to deliver functional prototypes and interpret results using performance metrics.',
      'Developed an NLP solution using IBM Watson services to analyze large-scale Amazon reviews and extract sentiment trends. Built visualizations to deliver actionable insights.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Gesture-Based AI Interaction System',
    description: [
      'Built a real-time gesture control system for system tasks (volume, brightness, cursor control).',
      'Integrated Google Gemini for AI-based math solving, enabling voice-free, natural user interaction.',
      'Designed a responsive UI using Streamlit and optimized system resource usage for smooth performance.'
    ],
    technologies: ['OpenCV', 'Mediapipe', 'PyAutoGUI', 'Google Gemini', 'Streamlit'],
    imageUrl: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    link: 'https://github.com/vinayKagitha/Gesture_Based_AI_Interaction_System'
  },
  {
    title: 'File Encryption And Decryption Tool',
    description: [
      'Implemented file encryption and decryption using various algorithms including AES, DES, 3DES, RSA, Blowfish, and ChaCha20.',
      'Designed a user-friendly JavaFX GUI for seamless file handling and implemented secure key generation and storage.',
      'Demonstrated expertise in cryptography, file processing, and GUI development for robust data protection.'
    ],
    technologies: ['Java', 'JavaFX', 'Cryptography Algorithms'],
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    title: 'Online Campus Selection System',
    description: [
      'Led a team of 4 developers to build a full-stack job portal for university students.',
      'Designed and implemented the frontend using HTML, CSS, and JavaScript for an intuitive UX.',
      'Architected backend integration with MySQL to handle user data, application workflows, and role-based access.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Full-Stack Development'],
    imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Oklahoma City University, Oklahoma City, OK',
    period: 'Jan 2024 - Dec 2025 (Expected)',
    details: 'GPA: 4.00/4.00'
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Gudlavalleru Engineering College, India',
    period: 'Aug 2019 - Apr 2023',
    details: 'CGPA: 9.08/10.00'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
    { name: 'Java Full Stack Developer', issuer: 'Wipro Talent Next 2022' },
    { name: 'Top 5% Coder', issuer: 'TechGig Code Gladiators 2022' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
    { name: 'Microsoft Azure AI Fundamentals', issuer: 'Microsoft' },
    { name: 'PCAP – Programming Essentials in Python', issuer: 'Python Institute' },
    { name: 'MTA – Introduction to Programming with Python', issuer: 'Microsoft' },
    { name: 'Cisco CCNA – Introduction to Networks', issuer: 'Cisco' },
];

export const PUBLICATIONS_DATA: Publication[] = [
    {
        title: 'Paddy Leaf Disease Prediction Using Machine Learning',
        journal: 'NeuroQuantology',
        description: 'Developed a machine learning model to identify leaf smut, bacterial blight, and rice blast diseases in rice plants, achieving 80.5% mean accuracy using the SVM algorithm.',
        link: 'https://www.neuroquantology.com/open-access/Paddy+Leaf+Disease+Prediction+Using+Machine+Learning_6132/'
    }
];