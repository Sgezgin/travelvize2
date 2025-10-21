'use client';

import { useState, useEffect } from 'react';

export default function TableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState('');
  const [tocOpen, setTocOpen] = useState(true);

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      // Find the section currently in view
      let currentSection = '';
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      sections.forEach((section) => {
        if (section.title) {
          const element = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'));
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              currentSection = section.title.toLowerCase().replace(/\s+/g, '-');
            }
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 cursor-pointer flex justify-between items-center"
        onClick={() => setTocOpen(!tocOpen)}
      >
        <div className="flex items-center gap-3 text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <h3 className="text-lg font-semibold">İçindekiler</h3>
        </div>
        <svg 
          className={`w-5 h-5 text-white transition-transform ${tocOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {tocOpen && (
        <div className="p-4">
          <ul className="space-y-2">
            {sections.map((section, idx) => (
              section.title && (
                <li key={idx}>
                  <a 
                    href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`flex items-start gap-2 p-2 rounded-lg transition-colors ${
                      activeSection === section.title.toLowerCase().replace(/\s+/g, '-')
                        ? 'bg-blue-100 text-blue-700 font-semibold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm">{section.title}</span>
                  </a>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}