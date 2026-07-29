import {
  About,
  Contact,
  Education,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
