import { BentoCard, BentoGrid } from "./ui/bento-grid";
// import Marquee from "./ui/marquee";
// import { cn } from "@/lib/utils";
import { FaChessKnight } from "react-icons/fa6";
import { PiNotepadFill } from "react-icons/pi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { ArrowRightIcon } from "@radix-ui/react-icons";


// const files = [
//     {
//       name: "Homepage",
//       src: "/knights-gambit/home.png",
//     },
//     {
//       name: "Homepage",
//       src: "/knights-gambit/home1.png",
//     },
//     {
//       name: "Homepage",
//       src: "/knights-gambit/home2.png",
//     },
//     {
//       name: "Account",
//       src: "/knights-gambit/account.png",
//     },
//     {
//       name: "Arena",
//       src: "/knights-gambit/arena.png",
//     },
//     {
//         name: "Security",
//         src: "/knights-gambit/security.png",
//       },
//   ];

const features = [
    // {
    //     Icon: FileTextIcon,
    //     name: "Save your files",
    //     description: "We automatically save your files as you type.",
    //     href: "/",
    //     cta: "Learn more",
    //     className: "col-span-3 lg:col-span-3",
    //     background: (
    //       <Marquee
            
    //         className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
    //       >
    //         {files.map((f, idx) => (
    //           <figure
    //             key={idx}
    //             className={cn(
    //               "text-white relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
    //               "border-white/[.1] bg-white/[.01] hover:bg-white/[.05]",
    //               "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    //               "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
    //             )}
    //           >
    //             <div className="flex flex-row items-center gap-2">
    //               <div className="flex flex-col">
    //                 <figcaption className="text-sm font-medium dark:text-white ">
    //                   {f.name}
    //                 </figcaption>
    //               </div>
    //             </div>
    //             <img
    //               src={f.src}
    //               alt={f.name}
    //               className="w-full h-24 object-cover mt-2"
    //             />
    //           </figure>
    //         ))}
    //       </Marquee>
    //     ),
    //   },
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
          // <div className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40 bg-blue-300" ></div>
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
          // <div className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40 bg-blue-300" ></div>
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