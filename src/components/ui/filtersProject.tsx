import { useEffect, useState } from "react"
import FilterIcon from "@/assets/Icons/FilterIcons/Filter.svg"
import CodeBranchIcon from "@/assets/Icons/FilterIcons/CodeBranch.svg"
import ResultIcon from "@/assets/Icons/FilterIcons/Result.svg"
import SortIcon from "@/assets/Icons/FilterIcons/Sort.svg"

import { Button } from "./button"
import { SortFilter } from "./SortFilters"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  


const FiltersProject = ({projects, setFilteredProjects, filteredProjects}: any) => {
    const technologies = ["JavaScript", "React", "Next", "Redux", "RTL", "Jest", "Tailwind", "ShadCN"]
    const [selectedTags, setSelectedTags]: any = useState([])
    const [selectedLanguages, setSelectedLanguages]: any = useState([])
    const [selectedElements, setSelectedElements]:any = useState({})
    const [checkboxElements, setCheckboxElements]: any = useState({})
    const [sortFilter, setSortFilter]:any = useState("")

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
        
        const filteredAndSorted = filtered.sort((a:any,b:any) => {
            if(sortFilter === "sortAscending"){
                return a.title.localeCompare(b.title)
            }
             else if (sortFilter === "sortDescending") {
                return b.title.localeCompare(a.title)
            }
            else if (sortFilter === "sortNewest"){
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            }
            return 0

        })
        setFilteredProjects(filteredAndSorted)
    }

    const resetAll = () => {
        
        setSelectedLanguages([])
        setSelectedElements({})
        setSelectedTags([])
        setSortFilter("")
        
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
        
      }, [selectedLanguages, selectedTags, sortFilter]); 

      
  return (

    <div>

   
    <div className="md:hidden block">
      <Collapsible className="bg-card p-4 flex flex-col gap-4rounded-2xl border-border border-[1px] shadow-primary lg:mx-16">
  <CollapsibleTrigger className="flex gap-2 items-center bg-slate-850 p-2 px-4 rounded-lg border-2 border-border hover:bg-background transition-all duration-100">
        <img src={FilterIcon} alt="" className="h-5 w-5" />
        <div className=" text-lg text-white font-bold">
            Filters
        </div>
  </CollapsibleTrigger>
  <CollapsibleContent>
      <div className=" flex gap-10 flex-wrap md:flex-nowrap p-4">

        {/* Project Filters */}
        <div className="flex flex-col gap-2 flex-grow">
            <div className="font-semibold flex gap-2 items-center">
                <img src={FilterIcon} alt="" className="w-4 h-4"/>
                Project Type
            </div>
        <div className="flex flex-col descriptiveText text-sm gap-3">
        <div className="flex gap-2 items-center w-max">
        <Checkbox
        id="featured"
        name="featured"
        onCheckedChange={(checked) => handleCheckbox("featured", checked as boolean)}
        checked={checkboxElements.featured}
        className="h-5 w-5 rounded-xl border-border p-[2px]"
      />
       <label htmlFor="featured" className={`${checkboxElements.featured ? "text-white font-semibold" : ""}`}> Featured Only </label>
       </div>
       <div className="flex gap-2 items-center w-max">
       <Checkbox
        id="hasDemo"
        name="hasDemo"
        onCheckedChange={(checked) => handleCheckbox("hasDemo", checked as boolean)}
        checked={checkboxElements.hasDemo}
        className="h-5 w-5 rounded-xl border-border p-[2px]"
      />
       <label htmlFor="hasDemo" className={`${checkboxElements.hasDemo ? "text-white font-semibold" : ""}`}> Has Demo  </label>
       </div>
        <div className="flex gap-2 items-center w-max">
       <Checkbox
        id="hasSource"
        name="hasSource"
        onCheckedChange={(checked) => handleCheckbox("hasSource", checked as boolean)}
        checked={checkboxElements.hasSource}
        className="h-5 w-5 rounded-xl border-border p-[2px]"
      />
       <label htmlFor="hasSource" className={`${checkboxElements.hasSource ? "text-white font-semibold" : ""}`}> Has Source  </label>
       </div>
  
       </div>
        </div>

        {/* Sort Filters */}
        <div className="flex flex-col gap-2 flex-grow ">
        <div className="font-semibold flex gap-2 items-center">
                <img src={SortIcon} alt="" className="w-4 h-4" />
                  Sort
            </div>
            <SortFilter setSortFilter={setSortFilter}  />
        </div>

    {/*  Technology Filters */}
    <div className=" flex  flex-col flex-grow w-full lg:max-w-[15rem] gap-2">
        
        <div className="flex flex-col flex-wrap gap-2">
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


        {/*  Results */}
        <div className="  flex flex-col gap-2 flex-grow  " >
            <div className="font-semibold flex gap-2 items-center">
                <img src={ResultIcon} alt="" className="w-4 h-4" />
            
                  Results
            
            </div>
            <p className="descriptiveText text-sm ">
                Showing  {filteredProjects.length} of {projects.length} Projects
            </p>
            <Button className={`font-bold  mt-auto`} disabled={(selectedLanguages.length === 0 && selectedTags.length === 0 && sortFilter === "") ? true : false} onClick={resetAll}>Reset All </Button>
        </div>

        </div>
   
   
  </CollapsibleContent>
</Collapsible>
</div>  

<div className="hidden md:block">
<div className=" flex gap-10 flex-wrap md:flex-nowrap p-8 bg-card rounded-xl border-border border-[1px] shadow-primary lg:mx-16">

{/* Project Filters */}
<div className="flex flex-col gap-2 flex-grow">
    <div className="font-semibold flex gap-2 items-center">
        <img src={FilterIcon} alt="" className="w-4 h-4"/>
        Project Type
    </div>
<div className="flex flex-col descriptiveText text-sm gap-3">
<div className="flex gap-2 items-center w-max">
<Checkbox
id="featured"
name="featured"
onCheckedChange={(checked) => handleCheckbox("featured", checked as boolean)}
checked={checkboxElements.featured}
className="h-5 w-5 rounded-xl border-border p-[2px]"
/>
<label htmlFor="featured" className={`${checkboxElements.featured ? "text-white font-semibold" : ""}`}> Featured Only </label>
</div>
<div className="flex gap-2 items-center w-max">
<Checkbox
id="hasDemo"
name="hasDemo"
onCheckedChange={(checked) => handleCheckbox("hasDemo", checked as boolean)}
checked={checkboxElements.hasDemo}
className="h-5 w-5 rounded-xl border-border p-[2px]"
/>
<label htmlFor="hasDemo" className={`${checkboxElements.hasDemo ? "text-white font-semibold" : ""}`}> Has Demo  </label>
</div>
<div className="flex gap-2 items-center w-max">
<Checkbox
id="hasSource"
name="hasSource"
onCheckedChange={(checked) => handleCheckbox("hasSource", checked as boolean)}
checked={checkboxElements.hasSource}
className="h-5 w-5 rounded-xl border-border p-[2px]"
/>
<label htmlFor="hasSource" className={`${checkboxElements.hasSource ? "text-white font-semibold" : ""}`}> Has Source  </label>
</div>

</div>
</div>

{/* Sort Filters */}
<div className="flex flex-col gap-2 flex-grow ">
<div className="font-semibold flex gap-2 items-center">
        <img src={SortIcon} alt="" className="w-4 h-4" />
          Sort
    </div>
    <SortFilter setSortFilter={setSortFilter}  />
</div>

{/*  Technology Filters */}
<div className=" flex  flex-col flex-grow w-full lg:max-w-[15rem] gap-2">

<div className="flex flex-col flex-wrap gap-2">
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


{/*  Results */}
<div className="  flex flex-col gap-2 flex-grow  " >
    <div className="font-semibold flex gap-2 items-center">
        <img src={ResultIcon} alt="" className="w-4 h-4" />
    
          Results
    
    </div>
    <p className="descriptiveText text-sm ">
        Showing  {filteredProjects.length} of {projects.length} Projects
    </p>
    <Button className={`font-bold  mt-auto`} disabled={(selectedLanguages.length === 0 && selectedTags.length === 0 && sortFilter === "") ? true : false} onClick={resetAll}>Reset All </Button>
</div>

</div>
</div>
</div>

  )
}

export default FiltersProject