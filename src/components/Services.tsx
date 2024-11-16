import ServicesIcon from "@/assets/Icons/ServicesIcon.svg"

const Services = () => {
  const technologies: any = ["Web Development", "Website Rework", "Website Design", "SEO Optimization", "Testing", "Frontend Development", 'Responsive Design', "Accessibility", "Performance Optimization"]
  return (
    
    
      <div className="flex gap-4 flex-col flex-wrap w-100 text-lg card overflow-x-hidden shadow-inner h-fit">
        <div>
        <div className="flex gap-3 cardHeading ">
          <img src={ServicesIcon} alt="" className="w-8 h-8" />
        Services
        </div>
        </div>
        <div className="descriptiveText">
        Customized solutions that adapt to your priorities and budget
        </div>

    {/* Animated Scrolling Tags */}
<div className="w-full overflow-hidden">
      {/* Normal */}
      <div className="relative rounded-lg">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-card to-transparent z-10"></div>
      <div className="font-semibold text-highlight scrollAnimation ">
      {technologies.map((item: string) => {
        return <p key={item} className="bg-background px-3 py-2 rounded-lg ">{item}</p>
      })}
       
      </div>
       <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-card to-transparent z-10"></div>
      </div>
      </div>

      {/* Reversed */}
      <div className="relative w-full  overflow-hidden rounded-lg">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-card to-transparent z-10"></div>
      <div className="font-semibold text-highlight scrollAnimation ">
      {technologies.reverse().map((item: string) => {
        return <p key={item} className="bg-background px-3 py-2 rounded-lg ">{item}</p>
      })}
       
      </div>
       <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-card to-transparent z-10"></div>
      </div>

      </div>



 


  
  )
}
export default Services