
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








  

const ProjectsPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }
    const projects = [
        {
          title: "JavaScript Calculator",
          description: "A simple old fashioned plain JavaScript Calculator",
          image: Project1,
          tags: [
            {
              name: "JavaScript",
              class: "javascriptTag",
              icon: JavaScriptIcon,
            },
          ],
          demo: "https://github.com/bilalae",
          source: "",
        },
        {
          title: "NextAuth",
          description: "An Application built on NextAUTH",
          image: Project2,
          tags: [
            {
              name: "TypeScript",
              class: "typescriptTag",
              icon: TypeSriptIcon,
            },
            {
              name: "Next",
              class: "nextTag",
              icon: NextIcon,
            },
            {
              name: "Redux",
              class: "reduxTag",
              icon: ReduxIcon,
            },
            {
              name: "RTL",
              class: "rtlTag",
              icon: RTLIcon,
            },
            {
              name: "Jest",
              class: "jestTag",
              icon: JestIcon,
            },
            {
              name: "Tailwind",
              class: "tailwindTag",
              icon: TailwindIcon,
            },
            {
              name: "ShadCN",
              class: "shadcnTag",
              icon: ShadCNIcon,
            },
          ],
          demo: "https://github.com/bilalae",
          source: "",
        },
        {
          title: "Personal Portfolio",
          description: "A personal portfolio website showcasing my work and skills",
          image: Project3,
          tags: [
            {
              name: "JavaScript",
              class: "javascriptTag",
              icon: JavaScriptIcon,
            },
            {
              name: "Tailwind",
              class: "tailwindTag",
              icon: TailwindIcon,
            },
          ],
          demo: "https://github.com/bilalae",
          source: "https://github.com/bilalae/portfolio",
        },
        {
          title: "E-Commerce Site",
          description: "An e-commerce website with a full shopping cart and checkout system",
          image: Project4,
          tags: [
            {
              name: "JavaScript",
              class: "javascriptTag",
              icon: JavaScriptIcon,
            },
            {
              name: "Redux",
              class: "reduxTag",
              icon: ReduxIcon,
            },
            {
              name: "Tailwind",
              class: "tailwindTag",
              icon: TailwindIcon,
            },
          ],
          demo: "https://github.com/bilalae",
          source: "https://github.com/bilalae/ecommerce-site",
        },
        {
          title: "Blog Platform",
          description: "A full-stack blog platform with user authentication and CRUD functionality",
          image: Project5,
          tags: [
            {
              name: "JavaScript",
              class: "javascriptTag",
              icon: JavaScriptIcon,
            },
            {
              name: "React",
              class: "reactTag",
              icon: ReactIcon, 
            },
            {
              name: "Redux",
              class: "reduxTag",
              icon: ReduxIcon,
            },
          ],
          demo: "https://github.com/bilalae",
          source: "https://github.com/bilalae/blog-platform",
        },
      ];
      
  return (
    <div className='projectBackground'>
        <div className='flex flex-col justify-center items-center pt-12 gap-3 p-4'>
            <h1 className='h1 text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl md:text-4xl lg:text-4xl '>My Projects</h1>
            <p className='descriptiveText text-sm md:text-base max-w-lg text-center '>
                Some projects I've made and worked on. Feel free to take a look and explore around!
            </p>
            <Button onClick={handleClick} className=' text-xl p-6'>
                <img src={RightArrowIcon} alt="Left Arrow" className='w-4 h-4' />
                Home</Button> 
        </div> 

        <div className='flex flex-wrap gap-4 items-stretch  px-7  justify-center mt-10'>
            

            
            {projects.map((project: any) => {
                
                
                return <ProjectCard title={project.title} key ={project.title} description={project.description} image={project.image} tags={project.tags} demo={project.demo} source={project.source}/>
                    
            })}
            
        </div>

    </div>
  )
}

export default ProjectsPage