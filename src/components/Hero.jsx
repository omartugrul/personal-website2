import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pb-24">
      <h1 className="text-5xl font-serif">Omar Anees</h1>
      <h2 className="mt-2 text-xl text-gray-600">Product Manager</h2>
      <p className="mt-6 max-w-5xl text-lg text-gray-700 leading-relaxed">
        I’ve worked across energy, retail, and healthcare—building tools for field operators, frontline staff, and everyday customers.
      </p>
      <p className="mt-6 text-gray-600 max-w-2xl text-md">
        I just like building cool things that solve real problems and are enjoyable to use.
      </p>
    </section>
  );
}