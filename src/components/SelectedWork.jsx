import React from 'react';

const projects = [
  {
    title: 'AI Due Diligence Platform',
    industry: 'Private Equity',
    desc: 'Led discovery and design for an AI-powered due diligence platform. Used Claude Code to rapidly prototype and validate concepts with stakeholders.',
  },
  {
    title: 'Field Operations App',
    industry: 'Oil & Gas',
    desc: 'iOS + web app for field operators making decisions from live IoT telemetry on upstream wells.',
    link: 'https://www.umbrage.com/vital',
  },
  {
    title: 'Loyalty & Cashback App',
    industry: 'Retail',
    desc: 'Designed cashback journeys across app and in-store. 80k+ downloads.',
  },
  {
    title: 'Clinical Workflow UX',
    industry: 'Healthcare',
    desc: 'Interviewed nurses to surface pain points in legacy ERP. Delivered recommendations that improved task findability.',
  },
];

export default function SelectedWork() {
  return (
    <section className="pb-10 px-6">
      <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
        Shipped at Umbrage
      </h2>
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.title}>
            <div className="flex items-baseline gap-3">
              <h3 className="text-base font-semibold text-gray-900">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark transition-colors">
                    {p.title} →
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <span className="text-xs text-gray-400">
                {p.industry}
              </span>
            </div>
            <p className="mt-1 text-gray-600">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
