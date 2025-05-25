import React from 'react';
import StandardText from './text/StandardText.jsx';

export default function Now() {
  return (
    <section className="py-16 px-6 text-center text-gray-600 border-t border-gray-200">
      <StandardText tag="h3" className="text-2xl font-serif mb-4">
        Now
      </StandardText>
      <StandardText>
        I’m deep in product delivery for enterprise clients, balancing user needs, delivery constraints, and long‑term scalability.
      </StandardText>
      <StandardText className="mt-4">
        Catch me building, learning, or tweaking this site at{' '}
        <a href="mailto:omar.anees@gmail.com" className="underline">
          omar.anees@gmail.com
        </a>.
      </StandardText>
    </section>
  );
}