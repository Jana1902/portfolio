import Header from "./components/Header";

import Home from "./components/Home";

import About from "./components/About";

import Projects from "./components/Projects";

import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <div className="header-card">
        <Header />
      </div>
      <section id="homeSection">
        <Home />
      </section>
      <section id="aboutSection">
        <About />
      </section>
      <section id="projectsSection">
        <Projects />
      </section>
      <section id="contactSection"><Contact /></section>
    </>
  );
}

export default App;
