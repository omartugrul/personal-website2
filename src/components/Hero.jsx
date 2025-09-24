import React from 'react';
import StandardText from './text/StandardText.jsx';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pb-24">
      <StandardText tag="h1" className="text-5xl font-serif">
        Omar Anees
      </StandardText>
      <StandardText tag="h2" className="mt-2 text-xl text-gray-600">
        Product Manager
      </StandardText>
      <StandardText className="mt-6 max-w-5xl text-lg text-gray-700 leading-relaxed">
        I've worked across energy, retail, healthcare, and finance—solving complex business problems for field operators, frontline staff, and everyday customers.  
      </StandardText>
      <StandardText className="mt-6 text-gray-600 max-w-2xl text-md">
        I just like building cool things that solve real problems and make people's lives better.
      </StandardText>
    </section>
  );
}