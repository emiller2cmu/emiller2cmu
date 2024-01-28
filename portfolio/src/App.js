import logo from './logo.svg';
import './App.css';
import InfoBlock from './InfoBlock';
import info from './info.json'
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import { Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
