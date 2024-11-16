
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your components
import ProjectsPage from "./components/ProjectsPage";
import WorkProcess from "./components/WorkProcess";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";
import ExtraTags from './components/ExtraTags';


function App() {
  return (
    <Router> 
     
      <Routes>
        <Route path='/' element={
          <div className='md:grid max-w-[65vh] m-auto  lg:max-w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-2'>
         <div className=''>
         <About />
         <Services />
       <Projects />

         </div>
         <div className=''>

         <Skills />
          <ExtraTags />
         </div>
         <div className=''>

         <WorkProcess />
         </div>
       </div>
 
   
        
        } />
        
      
      
        <Route path="/projects" element={<ProjectsPage />} />
      
      </Routes>
      
    </Router>
  );
}

export default App;

