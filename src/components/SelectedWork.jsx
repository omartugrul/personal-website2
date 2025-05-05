import React from 'react';

const projects = [
  {
    emoji: '🛢️',
    title: 'Oil & Gas Field App',
    role: 'PM @ Umbrage',
    desc: 'Led offline-first mobile support for lease operators in no-signal zones, aligning stakeholders and sprint planning to simplify field workflows.'
  },
  {
    emoji: '🏪',
    title: 'Convenience Loyalty App',
    role: 'PM @ Umbrage',
    desc: 'Redesigned cashback and loyalty journeys across app and in-store, collaborating with strategy and design teams to boost engagement and clarity.'
  },
  {
    emoji: '🏥',
    title: 'Healthcare ERP',
    role: 'PM @ Umbrage',
    desc: 'Interviewed nurses and stakeholders to surface UX pain points in legacy systems and delivered actionable recommendations to improve findability.'
  }
];

export default function SelectedWork() {
  return (
    <section className="py-24 px-6">
      <h3 className="text-3xl font-serif text-center mb-12">Selected Work</h3>
      <div className="space-y-12">
        {projects.map((p, i) => (
          <div key={i} className="max-w-2xl mx-auto space-y-1">
            <h4 className="text-2xl">{p.emoji} {p.title}</h4>
            <p className="text-gray-500 italic">{p.role}</p>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}