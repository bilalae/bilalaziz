import { useEffect, useState } from "react"
// import FilterIcon from "@/assets/Icons/FilterIcons/Filter.svg"
import CodeBranchIcon from "@/assets/Icons/FilterIcons/CodeBranch.svg"
import ResultIcon from "@/assets/Icons/FilterIcons/Result.svg"
// import SortIcon from "@/assets/Icons/FilterIcons/Sort.svg"

import { Button } from "./button"

import { Checkbox } from "@/components/ui/checkbox"

const FiltersProject = ({projects, setFilteredProjects, filteredProjects}: any) => {
    const technologies = ["JavaScript", "React", "Next", "Redux", "RTL", "Jest", "Tailwind", "ShadCN"]
    const [selectedTags, setSelectedTags]: any = useState([])
    const [selectedLanguages, setSelectedLanguages]: any = useState([])
    const [selectedElements, setSelectedElements]:any = useState({})
    const [checkboxElements, setCheckboxElements]: any = useState({})


    const handleCheckbox = (id:any, checked:any) => {
        
        setCheckboxElements((prevState:any) => {
            return {
                ...prevState,
                [id]: checked,
            }
        })
        setSelectedTags((prevState: any) => {
            return prevState.includes(id) ? [...prevState].filter((item:any) => item !== id) : [...prevState, id]
        })
    }

  
   
    
    const filterProjects = () => {
        
        const filtered = projects.filter((project : any) => {
           
            return (selectedLanguages.length === 0 || project.tags.some((tag: any) => selectedLanguages.includes(tag.name))) && (selectedTags.length === 0 || selectedTags.some((tag:any) => Object.keys(project).filter(key => project[key] === true).includes(tag) ) )

        })
        setFilteredProjects(filtered)
    }

    const resetAll = () => {
        
        setSelectedLanguages([])
        setSelectedElements({})
        setSelectedTags([])
    }
    const handleLanguageClick = (tech: any) => {
        setSelectedLanguages((prevState: any) => {
            return prevState.includes(tech) ? [...prevState].filter(item => item !== tech) : [...prevState, tech]
        })
        setSelectedElements((prevState: any) => {
            return {
                ...prevState,
                [tech]: prevState[tech] ? !prevState[tech] : true
            }
        })
        
       
    }
      useEffect(() => {
        
        filterProjects()
        
      }, [selectedLanguages, selectedTags]); 

      
  return (


    <div className="bg-card p-4 flex h-100 gap-2">
        <div className="flex flex-col  w-full">
        
        
        <div className="flex gap-1 items-center">

        <Checkbox
        id="featured"
        name="featured"
        onCheckedChange={(checked) => handleCheckbox("featured", checked as boolean)}
        checked={checkboxElements.featured}
        className="h-5 w-5 rounded-xl border-border p-[2px]"
      />
       <label htmlFor="featured   "> Featured Only </label>
       <Checkbox
        id="hasDemo"
        name="hasDemo"
        onCheckedChange={(checked) => handleCheckbox("hasDemo", checked as boolean)}
        checked={checkboxElements.hasDemo}
        className="h-5 w-5 rounded-xl border-border p-[2px]"
      />
       <label htmlFor="hasDemo"> Has Demo  </label>

       <Checkbox
        id="hasSource"
        name="hasSource"
        onCheckedChange={(checked) => handleCheckbox("hasSource", checked as boolean)}
        checked={checkboxElements.hasSource}
        className="h-5 w-5 rounded-xl border-border p-[2px]"
      />
       <label htmlFor="hasSource"> Has Source  </label>

  
       </div>
        </div>

  
    <div className=" flex flex-col    w-full gap-3">
        
        <div className="flex flex-col flex-wrap ml-auto w-1/3 gap-2">
        <div className="font-semibold flex gap-2 items-center">
            <img src={CodeBranchIcon} alt="" className="h-4 w-4" />
            Technologies
        </div>
        <div className="flex gap-1 flex-wrap   ">
        {
            technologies.map((tech) => {
                return <div className= {` cursor-pointer rounded-xl py-[0.1rem] px-3 text-xs font-semibold bg-opacity-10 hover:bg-opacity-5 transition-all duration-100  ${tech+"Tag"} ${selectedElements[tech] ? "bg-primary text-background" : ""}`} onClick={(_e) => handleLanguageClick(tech)} key={tech} >{tech}</div>
            })
        }
        </div>

        </div>

        </div>
        <div className=" w-1/3   flex flex-col gap-2 " >
            <div className="font-semibold flex gap-2 items-center">
                <img src={ResultIcon} alt="" className="w-4 h-4" />
            
                  Results
            
            </div>
            <p className="descriptiveText text-sm ">
                Showing  {filteredProjects.length} of {projects.length} Projects
            </p>
            <Button className={`font-bold w-full mt-auto`} disabled={(selectedLanguages.length === 0 && selectedTags.length === 0) ? true : false} onClick={resetAll}>Reset All </Button>
        </div>

        </div>
  )
}

export default FiltersProject