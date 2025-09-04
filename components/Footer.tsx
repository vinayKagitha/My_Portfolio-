import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 mt-12 text-center text-slate-500">
        <p>
            Built with React, TypeScript, and Tailwind CSS.
        </p>
        <p>&copy; {currentYear} Vinay Kagitha. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
