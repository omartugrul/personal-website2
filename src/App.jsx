// File: src/App.jsx
import React from 'react';
import Hero from './components/Hero.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import Now from './components/Now.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero />
      <SelectedWork />
      {/* <Now /> */}
      <Footer />
    </main>
  );
}
