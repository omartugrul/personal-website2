import React from 'react';
import StandardText from './text/StandardText.jsx'; // Importing the StandardText component

// Importing logo assets
import emailLogo from '../assets/icons/email_logo.svg';
import linkedinLogo from '../assets/icons/linkedin_logo.svg';
import xLogo from '../assets/icons/x_logo.svg';
import githubLogo from '../assets/icons/github_logo.svg'; // Importing GitHub logo

export default function Footer({ showEmail = true, showLinkedIn = true, showX = true, showGitHub = true }) {
  return (
    <footer className="py-6 px-6 text-gray-400 border-t border-gray-200">
      {/* Flex container to align content horizontally */}
      <div className="flex justify-between items-center">
        {/* Left-aligned "Built with..." text */}
        <StandardText className="text-sm">
          Built with ReactJS (with help from Cursor)
        </StandardText>

        {/* Right-aligned contact options */}
        <div className="flex space-x-4">
          {/* Email button (conditionally rendered if showEmail is true) */}
          {showEmail && (
            <a
              href="mailto:an.omar.ees@gmail.com"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
              aria-label="Email"
            >
              {/* Email icon */}
              <img src={emailLogo} alt="Email" className="w-5 h-5" />
            </a>
          )}

          {/* LinkedIn button (conditionally rendered if showLinkedIn is true) */}
          {showLinkedIn && (
            <a
              href="https://www.linkedin.com/in/omaranees/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
              aria-label="LinkedIn"
            >
              {/* LinkedIn icon */}
              <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
            </a>
          )}

          {/* X (Twitter) button (conditionally rendered if showX is true) */}
          {showX && (
            <a
              href="https://x.com/omartugrul"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
              aria-label="X"
            >
              {/* X icon */}
              <img src={xLogo} alt="X" className="w-5 h-5" />
            </a>
          )}

          {/* GitHub button (conditionally rendered if showGitHub is true) */}
          {showGitHub && (
            <a
              href="https://github.com/omartugrul"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
              aria-label="GitHub"
            >
              {/* GitHub icon */}
              <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
