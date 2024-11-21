import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Icon from './components/Icons';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Icon />
      <Project />
      <Skills />
      <div class="content">
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
        <p>Content goes here...</p>
    </div>
    </div>
  );
}

export default App;
