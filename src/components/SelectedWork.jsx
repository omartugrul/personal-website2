import React from 'react';
import StandardText from './text/StandardText.jsx';

const projects = [
  {
    emoji: '💼',
    title: ' AI Driven Private Equity Due Diligence Platform',
    role: 'Private Equity Tech',
    desc: 'Designed AI-driven due diligence platform for private equity, leveraging Claude Code for rapid POC development to validate concepts and dramatically reduce due diligence analysis time.'
      //to do: better description line
  },
  {
    emoji: '🛢️',
    title: ' Oil & Gas Field App',
    role: 'Oil & Gas IoT',
    desc: 'Built iOS and web app enabling field operators to make data-driven decisions by leveraging live telemetry from IoT devices on upstream oil and gas wells.'
      //to do: better description line
  },
  {
    emoji: '🏪',
    title: ' Convenience Loyalty App',
    role: 'Retail & Loyalty',
    desc: 'Designed and built cashback and loyalty journeys across app and in-store, collaborating with engineering, strategy, and design teams to boost customer engagement and increase share of wallet.'
      //to do: better description line

  },
  {
    emoji: '🏥',
    title: ' Healthcare ERP',
    role: 'Healthcare ERP',
    desc: 'Interviewed nurses and stakeholders to surface UX pain points in legacy systems and delivered actionable recommendations to improve findability.'
      //to do: better description line
  }
];

export default function SelectedWork() {
  return (
    <section className="py-24 px-6">
      <StandardText tag="h3" className="text-3xl font-serif text-center mb-12">
        Selected Work
      </StandardText>
      <div className="space-y-12">
        {projects.map((p, i) => (
          <div key={i} className="max-w-2xl mx-auto space-y-1">
            <StandardText tag="h4" className="text-2xl">
              {p.emoji} {p.title}
            </StandardText>
            <StandardText className="text-gray-500 italic">
              {p.role}
            </StandardText>
            <StandardText className="text-gray-700">
              {p.desc}
            </StandardText>
          </div>
        ))}
      </div>
    </section>
  );
}