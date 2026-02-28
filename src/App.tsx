import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AcademicJourney from "./components/AcademicJourney";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-50 text-slate-700 dark:bg-[#0B0F19] dark:text-[#A1A1AA] font-sans dark:selection:bg-indigo-500/30 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <About />
        <AcademicJourney />
        <Certifications />
        <Skills />
        <Research />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
