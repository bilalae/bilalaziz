import PlaceholderImage from '@/assets/aboutImages/PlaceholderImage.jpg'
import FreelanceIcon from '@/assets/aboutImages/FreelanceIcon.svg'
import LanguageIcon from '@/assets/aboutImages/LanguageIcon.svg'
import LocationIcon from '@/assets/aboutImages/LocationIcon.svg'
import MusicIcon from '@/assets/aboutImages/MusicIcon.svg'
import StudentIcon from '@/assets/aboutImages/StudentIcon.svg'
import TimezoneIcon from '@/assets/aboutImages/TimezoneIcon.svg'
import { Button } from "@/components/ui/button"
import EnvelopeIcon from '@/assets/aboutImages/Envelope.svg'
import { useEffect, useState } from 'react'
import GithubLogo from "@/assets/aboutImages/github.svg"


const About = () => {
    const [text] = useState("Developer");
    const [scrambledText, setScrambledText] = useState("");
    let interval: any= null;
    const emailLink = `mailto:${"bilalxeo@gmail.com"}?subject=${encodeURIComponent("Hello there!")}&body=${encodeURIComponent("Hook me up with some weed??")}`;
    const githubLink =  "https://github.com/bilalae"
    const scrobbleAnimation = (text: string) => {
        clearInterval(interval);
        let iteration = 0;
        interval = setInterval(() => {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            
            const scrambled = text.split("").map((_, index) => {
                if (index < iteration) {
                    return text[index];
                }
                return characters[Math.floor(Math.random() * characters.length)]; 
            }).join("");

            setScrambledText(scrambled); 

            iteration++;

            if (iteration > text.length) {
                clearInterval(interval!); 
            }
        }, 30); 
    };

    useEffect(() => {
        scrobbleAnimation(text); // Start scrambling animation on component mount
        return () => {
            if (interval) {
                clearInterval(interval); // Cleanup interval on unmount
            }
        };
    }, [text]);


    return (
        <div className='flex flex-col gap-4 card  '>

        <div className='flex gap-4 items-center'>

        
        <img src={PlaceholderImage} alt="Bilal Aziz" className='max-w-28 max-h-28 rounded-[0.75rem]' />
        <div>
        <h1 className='text-primary h1 font-geistMono'>
            Bilal
        </h1>
        <h1 className='text-lg font-bold font-geistMono'>17</h1>
        <h1 className='h1 font-geistMono'>Front-end <span className='text-primary font-geistMono h1 '>{scrambledText}</span></h1>
        
        </div>

        </div>

        <div className='flex-wrap  flex bg-background gap-2 p-4 w-fit rounded-lg'>

            <div className='aboutTags group aboutTagsTransition'>
            <img src={TimezoneIcon} alt="" className='w-6 h-6 group-hover:animate-spin aboutTagsTransition' />
                GMT+5
            </div>


            <div className='aboutTags group aboutTagsTransition '>
            <img src={LocationIcon} alt="" className='w-6 h-6 aboutTagsTransition aboutTagsTransition  group-hover:rotate-6 '  />
            
                Pakistan
          
            </div>

            <div className='aboutTags group aboutTagsTransition  '>
            <img src={FreelanceIcon} alt="" className='w-6 h-6 group-hover:-skew-y-12 aboutTagsTransition '  />
                Freelancer
            </div>


            <div className='aboutTags group aboutTagsTransition  '>
            <img src={StudentIcon} alt="" className='w-6 h-6 aboutTagsTransition group-hover:-skew-y-3' />
                Student
            </div>


            <div className='aboutTags group aboutTagsTransition '>
            <img src={LanguageIcon} alt="" className='w-6 h-6 aboutTagsTransition group-hover:rotate-90' />
                English & Urdu
            </div>


            <div className='aboutTags group aboutTagsTransition '>
            <img src={MusicIcon} alt="" className='w-6 h-6 group-hover:skew-x-12 aboutTagsTransition' />
                Music connoisseur
            </div>

            
        </div>
        <div className='flex gap-1 justify-center items-center w-full'>
        <Button size={'lg'} className='font-semibold text-[1rem] w-full rounded-lg' onClick={() => {
                window.location.href = emailLink
            }} >
                <img src={EnvelopeIcon} alt="" className='w-4 h-4'/>
                Get in touch</Button>
            
                <Button size={'lg'} variant={"secondary"} className='font-semibold text-[1rem] w-full rounded-lg' onClick={() => {
                window.open(githubLink, "_blank")
            }} >
                <img src={GithubLogo} alt="" className='w-5 h-5'/>
                Get in touch</Button>
            

        </div>
            
        </div>
    )
}

export default About 