import { lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { BackgroundMusic } from './components/BackgroundMusic';
import { MusicProvider } from './context/MusicContext';

const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Fragments = lazy(() => import('./components/Fragments').then(m => ({ default: m.Fragments })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <MusicProvider>
      <AppContent />
    </MusicProvider>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#e91e63] selection:text-white overflow-x-hidden">
      <BackgroundMusic />
      <Hero />
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Projects />
        <Fragments />
        <About />
        <Skills />
        <Footer />
      </Suspense>
    </div>
  );
}
