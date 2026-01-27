import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
        Let's Talk
      </h2>
      <p className="text-gray-600">
        Always happy to hear from people who like building things.
      </p>
      <p className="mt-3">
        <a href="mailto:an.omar.ees@gmail.com" className="text-accent hover:text-accent-dark transition-colors">
          an.omar.ees@gmail.com
        </a>
      </p>
      <div className="mt-3 flex gap-4 text-sm text-gray-500">
        <a href="https://www.linkedin.com/in/omaranees/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
          LinkedIn
        </a>
        <span className="text-gray-300">·</span>
        <a href="https://x.com/omartugrul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
          X
        </a>
        <span className="text-gray-300">·</span>
        <a href="https://github.com/omartugrul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
          GitHub
        </a>
      </div>
    </footer>
  );
}
