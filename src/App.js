import Header from './components/Header'

import Home from './components/Home'

import About from './components/About'

import './App.css';

function App() {
  return (
    <>
    <div className='header-card'><Header /></div>
      <section id="homeSection">
        <Home />
      </section>
      <section>
        <About />
      </section>
    </>
  );
}

export default App;
