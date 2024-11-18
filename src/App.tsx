
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your components
import ProjectsPage from "./components/ProjectsPage";
import WorkProcess from "./components/WorkProcess";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";
import ExtraTags from './components/ExtraTags';
import Contact from './components/Contact';


function App() {
  return (
    <Router> 
     
      <Routes>
        <Route path='/' element={
          <div className='md:grid max-w-[65vh] m-auto   lg:max-w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-2 lg:pr-4'>
         <div className=''>

          
         <About />
         <Services />
       <Projects />
       <div className='hidden lg:block xl:hidden'>
         <WorkProcess />
          </div>

         </div>
         <div className=''>

         <Skills />
          <ExtraTags />
          <div className='lg:block hidden'>
         <Contact />
        
          </div>
         </div>
         <div className=''>
          <div className='lg:hidden xl:block'>

         <WorkProcess />
          </div>
         <div className='lg:hidden'>
         <Contact />
         </div>
         </div>
       </div>
 
   
        
        } />
        
      
      
        <Route path="/projects" element={<ProjectsPage />} />
       
      </Routes>
      
    </Router>
  );
}

export default App;

