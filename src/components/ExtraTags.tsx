import { Icon } from '@iconify/react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
const extraDetails = [{
    detail: 'Projects',
    number: '16',
    hoverInfo: 'Including Private and Open Source/Public Projects',
    icon: "ic:round-work"
},
    {
        detail: 'Clients',
        number: '5',
        hoverInfo: "",
        icon: "fluent:people-24-filled"
    },
    {
        detail: 'Years of Expertise',
        number: '2',
        hoverInfo: "",
        icon: "uiw:star-on",
    },
]
const ExtraTags = () => {
  return (
    <div className="card bg-transparent border-0 flex-row gap-2 flex-wrap p-0 w-full min-w-[90%] max-w-[90%]  lg:min-w-full ">
    {extraDetails.map((info) => {
        if(info.hoverInfo !== ""){
           return <div key={info.number} className='bg-card rounded-xl border-2 border-border p-8 w-min flex-grow flex flex-col gap-1   '> 
            <div className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-900 flex items-center justify-center   '>
                {info.number} <Icon icon="mingcute:plus-fill" color='#5A5DDC' height={40} />
            </div>

            <TooltipProvider>
            <Tooltip>
            <TooltipTrigger>
                <div className='relative '>
            <div className='flex gap-1 rounded-xl bg-slate-900 text-sm  font-bold items-center  px-3 py-1 descriptiveText justify-center w-fit m-auto cursor-help'>
                <Icon icon={info.icon} color='#5A5DDC' width={20} height={25} />
                {info.detail}
            </div>
                <div className='absolute -top-2 right-2'>
                <Icon icon="fluent:chat-cursor-24-filled" color='#5A5DDC' width={25} height={25} />
                </div>
            </div>
            </TooltipTrigger>
            <TooltipContent className='bg-background text-white  text-[0.8rem] text-pretty antialiased'>
                <p>{info.hoverInfo}</p>
            </TooltipContent>
            </Tooltip>
            </TooltipProvider>

        </div>

        }
        return <div key={info.number} className='bg-card rounded-xl border-2 border-border p-8 w-min flex-grow flex flex-col gap-1   '> 
            <div className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-900 flex items-center justify-center   '>
                {info.number} <Icon icon="mingcute:plus-fill" color='#5A5DDC' height={40} />
            </div>
            <div className='flex gap-1 rounded-xl bg-slate-900 text-sm  font-bold items-center  px-3 py-1 descriptiveText justify-center w-fit m-auto'>
                <Icon icon={info.icon} color='#5A5DDC' width={20} height={25} />
                {info.detail}
            </div>
        </div>
    })}
    </div>
  )
}

export default ExtraTags