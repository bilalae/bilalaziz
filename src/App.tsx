
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your components
import ProjectsPage from "./components/ProjectsPage";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <Router> 
     
      <Routes>
        <Route path='/' element={
          <div className='flex flex-wrap justify-center'>
            <About />
            <Services />
            <Projects />
            <Skills />                 
            <Contact />
          </div>
        } />
        
      
      
        <Route path="/projects" element={<ProjectsPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;

