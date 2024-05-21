import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { FaChessKnight } from "react-icons/fa6";
import { PiNotepadFill } from "react-icons/pi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const features = [
      {
        Icon: FaChessKnight,
        name: "Knight's Gambit",
        description: "Chess game built with React, TailwindCSS, Websocket, Clerk.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-3",
        background: (
          <img src="/knights-gambit/arena.png" width={500}
          height={500} className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40" />
        ),
      },
    {
      Icon: PiNotepadFill,
      name: "Note Corner",
      description: "A productivity hub built with NextJS, TailwindCSS.",
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-3",
      background: (
        <img src="/NoteCorner/home.png" width={500}
        height={500} className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40" />
        // <div className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40 bg-blue-300" ></div>
      ),
    },
    {
        Icon: MdOutlineRestaurantMenu,
        name: "Mess Buddy",
        description: "A mess management system for IIT mandi built with NextJS, TailwindCSS.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-3",
        background: (
          <img src="/MessApp/students.png" width={500}
          height={500} className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40" />
        ),
      },
]

export function Projects() {
    return (
        <div>
            <BentoGrid>
                {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        <div className="mt-4 hover:decoration-solid hover:underline">
            <a href={'/#/archive'} className="text-cyan-500 flex items-center">
            View Full Project Archive
            <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>    
        </div>
      </div>
      
    );
  }

export default Projects