import React from 'react';

const sideProjects = [
  {
    title: 'YM App',
    status: 'In Development',
    desc: 'A platform for 1000+ leaders in a non-profit I\'m part of. Member onboarding, searchable profiles, resource hub.',
    link: null,
  },
  {
    title: 'Boba Wali',
    status: 'In Development',
    desc: 'Landing page for a South Asian fusion boba catering business. Built with Next.js, TypeScript, and Framer Motion.',
    link: null,
  },
];

export default function SideProjects() {
  return (
    <section className="pb-10 px-6">
      <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
        Side Projects
      </h2>
      <div className="space-y-6">
        {sideProjects.map((p) => (
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
                {p.status}
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
