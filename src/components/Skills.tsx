import  StackIcon from "@/assets/Icons/StackIcon.svg"

import JavaScriptIcon from "@/assets/Icons/TechIcons/JavaScriptIconPurple.svg"
import TypeScriptIcon from "@/assets/Icons/TechIcons/TypeScriptIconPurple.svg"
import JestIcon from "@/assets/Icons/TechIcons/JestIconPurple.svg"
import NextIcon from "@/assets/Icons/TechIcons/NextJSIconPurple.svg"
import TailwindIcon from "@/assets/Icons/TechIcons/TailwindIconPurple.svg"
import ShadCNIcon from "@/assets/Icons/TechIcons/ShadCNIconPurple.svg"
import RTLIcon from "@/assets/Icons/TechIcons/RTLIconPurple.svg"
import ReduxIcon from "@/assets/Icons/TechIcons/ReduxIconPurple.svg"
import ReactIcon from "@/assets/Icons/TechIcons/ReactIconPurple.svg"


const skillsList = [
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "NextJS",
    icon: NextIcon,
  },
  {
    name: "Redux",
    icon: ReduxIcon,
  },
  {
    name: "Jest",
    icon: JestIcon,
  },
  {
    name: "RTL",
    icon: RTLIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "ShadCN",
    icon: ShadCNIcon,
  },
]
const Skills = () => {

  return (

 
   <div className="card h-fit">
        <div>
        <div className="flex gap-3 cardHeading ">
       
          <img  src={StackIcon} alt="Skills" className="w-8 h-8"  />
        Skills
        </div>
        </div>
        <div className="descriptiveText">
        I am expanding my skills everyday, here are some of them
        </div>

        <div className="flex gap-2 flex-wrap items-stretch  ">
         {skillsList.map((skill: any) => {
          return <div className="flex gap-2 antialiased font-semibold p-3 flex-1 rounded-xl bg-background items-center w-fit border-border border-2 hover:bg-card transition-all duration-100 ease-linear">
           
            <img src={skill.icon} alt="" className="min-w-7 min-h-7 max-w-7 max-7"/>
           
            
            <h3>{skill.name}</h3>

          </div>
         })}
        </div>
   </div>
  )
}

export default Skills