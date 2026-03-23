import React from 'react';

export default function Hero() {
  return (
    <section className="pt-20 pb-10 px-6">
      <img
        src="/omarfavicon.png"
        alt="Omar Anees"
        className="w-32 object-contain mb-4"
      />
      <h1 className="text-4xl font-bold">
        Omar Anees
      </h1>
      <p className="mt-3 text-lg text-gray-800">
        I'm a product manager who builds.
      </p>
      <p className="mt-3 text-gray-600">
        At Umbrage, I ship products for enterprise clients across industries including energy, retail, healthcare, and private equity. Lately, I've been building on the side too.
      </p>
    </section>
  );
}
