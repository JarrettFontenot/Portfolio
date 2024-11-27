import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Icon from './components/Icons';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Icon />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
