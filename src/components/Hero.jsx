import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pb-24">
      <h1 className="text-5xl font-serif">Omar Anees</h1>
      <h2 className="mt-2 text-xl text-gray-600">Product Manager · Builder of Useful Things</h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-700 leading-relaxed">
        I’m a product manager who likes making well-designed tools that actually solve people’s problems.
        I’ve worked on mobile apps for oilfield operators, loyalty programs for convenience stores,
        and healthcare systems used by nurses — messy spaces where clean design and clarity really matter.
      </p>
      <p className="mt-4 text-gray-600">
        I just like building things that work, feel good to use,
        and make someone’s life a little better.
      </p>
    </section>
  );
}