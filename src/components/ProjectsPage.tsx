
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import RightArrowIcon from "@/assets/Icons/RightArrowIcon.svg"
import ProjectCard from "./ui/projectCard"
  import Project1 from "@/assets/ProjectImages/CalculatorProject.png"
  import Project2 from "@/assets/ProjectImages/DAYSSINCEWLR.png"
  import Project3 from "@/assets/ProjectImages/DrumMachineProject.png"
  import Project4 from "@/assets/ProjectImages/PokeapiProject.png"
  import Project5 from "@/assets/ProjectImages/QuoteProject.png"

import JavaScriptIcon from "@/assets/Icons/TechIcons/JavaScript.svg"
import TypeSriptIcon from "@/assets/Icons/TechIcons/TypeScriptIcon.svg"
import JestIcon from "@/assets/Icons/TechIcons/JestIcon.svg"
import NextIcon from "@/assets/Icons/TechIcons/NextJSIcon.svg"
import TailwindIcon from "@/assets/Icons/TechIcons/TailwindIcon.svg"
import ShadCNIcon from "@/assets/Icons/TechIcons/ShadCNIcon.svg"
import RTLIcon from "@/assets/Icons/TechIcons/RTLIcon.svg"
import ReduxIcon from "@/assets/Icons/TechIcons/ReduxIcon.svg"
import ReactIcon from "@/assets/Icons/TechIcons/ReactIcon.svg"
import FiltersProject from './ui/filtersProject'
import { useState } from 'react'







  

const ProjectsPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }


    const [projects, setProjects] = useState([
      {
        title: "JavaScript Calculator",
        description: "A simple old fashioned plain JavaScript Calculator",
        image: Project1,
        tags: [
          {
            name: "JavaScript",
            class: "JavaScriptTag",
            icon: JavaScriptIcon,
          },
        ],
        hasDemo: true,
        hasSource: false,
        featured: true,
        demoLink: "",
        sourceLink: "",
        createdAt: "2023-03-15T08:00:00Z", // Example date
      },
      {
        title: "NextAuth",
        description: "An Application built on NextAUTH",
        image: Project2,
        tags: [
          {
            name: "TypeScript",
            class: "TypeScriptTag",
            icon: TypeSriptIcon,
          },
          {
            name: "Next",
            class: "NextTag",
            icon: NextIcon,
          },
          {
            name: "Redux",
            class: "ReduxTag",
            icon: ReduxIcon,
          },
          {
            name: "RTL",
            class: "RTLag",
            icon: RTLIcon,
          },
          {
            name: "Jest",
            class: "JestTag",
            icon: JestIcon,
          },
          {
            name: "Tailwind",
            class: "TailwindTag",
            icon: TailwindIcon,
          },
          {
            name: "ShadCN",
            class: "ShadCNTag",
            icon: ShadCNIcon,
          },
        ],
        hasDemo: true,
        hasSource: false,
        featured: false,
        demoLink: "",
        sourceLink: "",
        createdAt: "2023-06-05T10:00:00Z", // Example date
      },
      {
        title: "Personal Portfolio",
        description: "A personal portfolio website showcasing my work and skills",
        image: Project3,
        tags: [
          {
            name: "JavaScript",
            class: "JavascriptTag",
            icon: JavaScriptIcon,
          },
          {
            name: "Tailwind",
            class: "TailwindTag",
            icon: TailwindIcon,
          },
        ],
        hasDemo: true,
        hasSource: true,
        featured: true,
        demoLink: "",
        sourceLink: "",
        createdAt: "2023-02-20T09:30:00Z", // Example date
      },
      {
        title: "E-Commerce Site",
        description: "An e-commerce website with a full shopping cart and checkout system",
        image: Project4,
        tags: [
          {
            name: "JavaScript",
            class: "JavaScriptTag",
            icon: JavaScriptIcon,
          },
          {
            name: "Redux",
            class: "ReduxTag",
            icon: ReduxIcon,
          },
          {
            name: "Tailwind",
            class: "TailwindTag",
            icon: TailwindIcon,
          },
        ],
        hasDemo: true,
        hasSource: true,
        featured: false,
        demoLink: "",
        sourceLink: "",
        createdAt: "2023-08-10T14:15:00Z", // Example date
      },
      {
        title: "Blog Platform",
        description: "A full-stack blog platform with user authentication and CRUD functionality",
        image: Project5,
        tags: [
          {
            name: "JavaScript",
            class: "JavaScriptTag",
            icon: JavaScriptIcon,
          },
          {
            name: "React",
            class: "ReactTag",
            icon: ReactIcon,
          },
          {
            name: "Redux",
            class: "ReduxTag",
            icon: ReduxIcon,
          },
        ],
        hasDemo: true,
        hasSource: true,
        featured: true,
        demoLink: "",
        sourceLink: "",
        createdAt: "2023-07-25T12:45:00Z", // Example date
      },
    ]);
    


      const [filteredProjects, setFilteredProjects] = useState(projects)
  return (
    <div className='projectBackground h-max px-6 lg:px-16'>
        <div className='flex flex-col justify-center items-center pt-12 gap-3 p-4'>
            <h1 className='h1 text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl md:text-4xl lg:text-4xl '>My Projects</h1>
            <p className='descriptiveText text-sm md:text-base max-w-lg text-center '>
                Some projects I've made and worked on. Feel free to take a look and explore around!
            </p>
            <Button onClick={handleClick} className=' text-xl p-6'>
                <img src={RightArrowIcon} alt="Left Arrow" className='w-4 h-4' />
                Home</Button> 
        </div> 

        <div>
          <FiltersProject projects={projects} setProjects={setProjects} filteredProjects={filteredProjects} setFilteredProjects={setFilteredProjects} />
        </div>
        <div className='flex flex-wrap gap-4 items-stretch   justify-center mt-10 pb-10'>
            

            
            {filteredProjects.map((project: any) => {
                
                
                return <ProjectCard title={project.title} key ={project.title} description={project.description} image={project.image} tags={project.tags} demo={project.demoLink} source={project.sourceLink}/>
                    
            })}
            
        </div>

    </div>
  )
}

export default ProjectsPage