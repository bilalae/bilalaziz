import { Icon } from "@iconify/react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const contactOptions = [
  {
    name: "Email",
    icon: "fluent:mail-32-filled",
    link: `mailto:${"bilalxeo@gmail.com"}?subject=${encodeURIComponent("Excited to Collaborate!")}&body=${encodeURIComponent("Hi Bilal,")}`,
    tooltip: "Contact me via Email ",
    newWindow: false
  },
  {
    name: "GitHub",
    icon: "mdi:github",
    link: "https://github.com/bilalae",
    tooltip: "Connect through GitHub",
    newWindow: true
  },
  {
    name: "Discord",
    icon: "ic:baseline-discord",
    link: "https://discordapp.com/users/507849711265513472",
    tooltip: "Discord Username: @seekmoney",
    newWindow: true
  },
];
const ideasAbstracts = ["existence", "reality", "creation", "embodiment"]
const Contact = () => {

  const [currentAbstract, setCurrentAbstract] = useState(ideasAbstracts[0])
  const [key, setKey] = useState(0)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAbstract((prevAbstract) => {
          const currentIndex = ideasAbstracts.indexOf(prevAbstract)
          const nextIndex = (currentIndex + 1) % ideasAbstracts.length
          return ideasAbstracts[nextIndex]

      })

    }, 3000)

    return () => clearInterval(intervalId)
  }, [])
  
  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Update key to force re-render
  }, [currentAbstract]);

    const handleClick = (link?: string, newWindow?: boolean) => {
        if (link) {
            const target = newWindow ? "_blank" : "_self"
          window.open(link, target);
        }
      };
  return (
    <div className="card justify-center items-center min-w-[90%] max-w-[90%] lg:min-w-full">
      <div className="p-4 border-border border-2 w-fit rounded-full hover:scale-125 transition-all duration-100 ease-linear">
        <Icon
          icon="fluent:people-team-toolbox-20-filled"
          width={70}
          color="#6366F1"
        />
      </div>
      <div className="tracking-tight">
        <div className="text-2xl tracking-tight font-bold text-center">
          Let's work together
        </div>
        <div className="text-lg descriptiveText font-bold flex items-center whitespace-nowrap ">
          and make your ideas come to{" "}
          <span className="pl-1 text-primary animate-typing overflow-hidden border-r-4 border-r-primary   " key={key}>{currentAbstract}</span>
        </div>
      </div>

      <div className="flex gap-2">
        {contactOptions.map((option) => {
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex gap-2">
                  <button className="px-4 py-2 bg-primary rounded-lg shadow-inner hover:bg-[#5A5DDC] transition-all duration-150" onClick={(_e) => handleClick(option.link, option.newWindow)}>
                    <Icon icon={option.icon} width={25} color="#0A0B1F"></Icon>
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-card text-white text-pretty antialiased text-[0.8rem] font-bold">
                  {option.tooltip}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Contact
