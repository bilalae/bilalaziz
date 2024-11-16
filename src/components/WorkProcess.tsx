import ProcessIcon from '@/assets/Icons/ProcessIcon.svg' 
import BriefIcon from '@/assets/Icons/WorkProcessIcons/BriefIcon.svg'
import LaunchIcon from '@/assets/Icons/WorkProcessIcons/LaunchIcon.svg'
import TestIcon from '@/assets/Icons/WorkProcessIcons/TestIcon.svg'
import DevelopIcon from '@/assets/Icons/WorkProcessIcons/DevelopIcon.svg'
const workProcessSteps = [
  {
    heading: "Project Brief",
    description: "We will discuss your project and its goals.",
    order: "#1",
    icon: BriefIcon
  },
  {
    heading: "Design & Develop",
    description: "I will create your website based on your needs.",
    order: "#2",
    icon: DevelopIcon
  },
  {
    heading: "Testing & Review",
    description: "You test it, and I’ll make any necessary changes.",
    order: "#3",
    icon: TestIcon
  },
  {
    heading: "Launch",
    description: "I’ll hand over the source code and help launch the site.",
    order: "#4",
    icon: LaunchIcon
  }
]
const WorkProcess = () => {
  return (
    <div className="card">
       <div>
        <div className="flex gap-3 cardHeading   ">
       
          <img  src={ProcessIcon} alt="Skills" className="w-8 h-8"  />
        Work Process
        </div>
        </div>
        <div className="descriptiveText">
        The work process explained in 4 steps
          </div>

        <div className='flex flex-col gap-2'>
          {workProcessSteps.map((step) => {
            return <div key={step.order} className=' relative flex gap-3 bg-background rounded-xl border-border border-[0.03rem] p-3 group overflow-hidden items-center '>
              <div className='p-3 h-fit border-border rounded-lg bg-card group-hover:scale-150 group-hover:rounded-none transition-all duration-200 ease-linear group-hover:bg-background'>
                <img src={step.icon} alt="" className='min-h-7 min-w-7 max-w-7 max-h-7' />
              </div>

              <div className='flex flex-col gap-1 group-hover:translate-x-2 transition-all duration-100 ease-linear'>
              <div className='text-[1.1rem] font-bold tracking-tight'>
                {step.heading}
              </div>
              <div className='descriptiveText font-bold text-sm'>
                {step.description}
              </div>
              </div>
              <div className='absolute right-1 top-1 px-1 py-1 bg-card text-primary rounded-lg descriptiveText font-bold text-lg group-hover:translate-x-10 group-hover:-translate-y-10 group-hover:opacity-0 transition-all duration-200 ' >
                {step.order}
              </div>

            </div>
          })}
        </div>
    </div>
  )
}

export default WorkProcess