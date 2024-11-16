
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your components
import ProjectsPage from "./components/ProjectsPage";
import WorkProcess from "./components/WorkProcess";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";


function App() {
  return (
    <Router> 
     
      <Routes>
        <Route path='/' element={
          <div className='md:grid md:grid-cols-2 xl:grid-cols-3'>
         <div className=''>
         <About />

         <Services />

         </div>
         <div className=''>

         <Skills />
       <Projects />
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

