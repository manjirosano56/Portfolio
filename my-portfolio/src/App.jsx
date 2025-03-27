import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Project'
import Footer from './components/Footer'
function App() {
  return (
    <div className="dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;