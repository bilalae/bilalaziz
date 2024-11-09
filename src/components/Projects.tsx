import ProjectsIcon from "@/assets/Icons/ProjectsIcon.svg"
import Project1 from "@/assets/ProjectImages/CalculatorProject.png"
import Project2 from "@/assets/ProjectImages/DAYSSINCEWLR.png"
import Project3 from "@/assets/ProjectImages/DrumMachineProject.png"
import Project4 from "@/assets/ProjectImages/PokeapiProject.png"
import Project5 from "@/assets/ProjectImages/QuoteProject.png"
import { Button } from "@/components/ui/button"
import LeftArrowIcon from "@/assets/Icons/LeftArrowIcon.svg"
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const projects = [Project1, Project2, Project3, Project4, Project5]
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/projects")
  }
  return (
    <div className="card overflow-hidden ">
      <div className="flex flex-col gap-3">
      <div className="flex gap-2 ">
        <img src={ProjectsIcon} alt="" className="w-8 h-8" />
        <h2 className="cardHeading" >Projects</h2>
      </div>
      <div className="descriptiveText">
        Some projects I've worked on:
      </div>

      </div>




      <div className="flex gap-3 overflow-hidden relative">

        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10"></div>
        <div className="scrollAnimation duration-10s ">

        {projects.map((project) => {
          return <img src={project} className="w-40 h-28 object-cover rounded-lg transition-all ease-in-linear"></img>
        })}
        </div>
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10"></div>
        
       
       
        <Button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-semibold z-10 " onClick={handleClick}>

          View all Projects
        <img src={LeftArrowIcon} className="h-4 w-4" alt="Right Arrow" />
        </Button>
       
      </div>
    </div>
  )
}

export default Projects