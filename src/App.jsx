import React from 'react';
import Hero from './components/Hero.jsx';
import SideProjects from './components/SideProjects.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import HowIWork from './components/HowIWork.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <main className="max-w-2xl mx-auto px-4 text-sm leading-relaxed">
      <Hero />
      <SideProjects />
      <SelectedWork />
      <HowIWork />
      <Footer />
    </main>
  );
}
