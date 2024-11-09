import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "./button"


const ProjectCard = ({title, description, image, tags, demo, source}: any) => {

    const handleDemo = () => {
        if(demo){
            window.open(demo, "_blank")
        }
    }
    const handleSource = () => {
        if(source){
            window.open(source, "_blank")
        }
    }
  return (
    <div className="w-full sm:w-fit   ">
        <Card className=' flex flex-col gap-3 group h-full sm:max-w-[25rem]  '>
<CardHeader className='p-0 flex flex-col gap-2   '>
    <div className='overflow-hidden rounded-t-sm '>

    <img src={image} alt="" className=' group-hover:scale-125 transition-all ease-out duration-200 group-hover:opacity-70 sm:max-w-[25rem]' />
    </div>
    <CardTitle className='px-4 pt-2 group-hover:text-primary'>{title}</CardTitle>
    <CardDescription className='px-4 text-sm'>{description}</CardDescription>
</CardHeader>
<CardContent className='w-fit flex flex-wrap gap-1 h-full '>
    {tags.map((tag: any) => {
         return <div key={tag.class}className= {` flex justify-center items-center gap-[0.3rem] rounded-xl h-fit px-3 text-xs font-semibold bg-opacity-10 hover:bg-opacity-5 transition-all duration-100   ${tag.class}`}>
            <img src={tag.icon} alt={tag.name} className="w-5 h-5 my-[1px]" />
            {tag.name}
            </div>
    })}
</CardContent>
<CardFooter className='bg-slate-950 border-t-2 border-border p-4  flex justify-center gap-2 '>
    <Button disabled={demo ? false : true} className='w-full font-semibold md:w-[40%]' onClick={handleDemo}>
        Live Demo
    </Button>
    <Button disabled={source ? false : true} className='w-full font-semibold text-gray-300 bg-slate-900  hover:bg-opacity-80 hover:bg-slate-900
    md:w-[40%]' onClick={handleSource} >
        Source
    </Button>
</CardFooter>
</Card>
    </div>
  )
}

export default ProjectCard
