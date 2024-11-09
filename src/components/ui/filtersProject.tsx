import { useEffect, useState } from "react"



const FiltersProject = ({projects, setFilteredProjects}: any) => {
    const technologies = ["JavaScript", "React", "Next", "Redux", "RTL", "Jest", "Tailwind", "ShadCN"]
    const [filters, setFilters] = useState({
        featured: false,
        openSource: false,
        hasDemo: false, 
        newestFirst: false,
        ascendingOrder: false,
        descendingOrder: false, 
    })

    const handleCheckbox = (event: any) => {
        const { name, checked }= event.target
        setFilters((prevState) => {
            return {
                ...prevState,
                [name]: checked,
            }
        })
    }

  
      
 

      const handleTechButton = (tech: any) => {
        
        const filtered = projects.filter((project: any) => {
            return project.tags.some((tag: any) => tag.name === tech)
        })
        setFilteredProjects(filtered)
      }

      useEffect(() => {
        
      
        
      }, [filters.featured]); 
      
  return (
    <div className=" flex justify-center">
 
 
        <div className="flex gap-1 bg-slate-950 flex-wrap justify-center">
        {
            technologies.map((tech) => {
                return <div className= {` cursor-pointer rounded-xl px-3 text-xs font-semibold bg-opacity-10 hover:bg-opacity-5 transition-all duration-100  ${tech+"Tag"}`} onClick={(e) => handleTechButton(tech)} key={tech} >{tech}</div>
            })
        }
        </div>
        </div>
  )
}

export default FiltersProject