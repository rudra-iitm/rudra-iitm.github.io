import { ArrowRightIcon } from "@radix-ui/react-icons"
import { WobbleCard } from "./ui/wobble-card"

const Experience = () => {
  return (
    <div className="">
    <WobbleCard
        containerClassName="col-span-1 mb-8 hover:cursor-pointer lg:col-span-2 h-full bg-cyan-800 min-h-[500px] lg:min-h-[300px]"
        className=""
        onClick={() => {
            window.open("https://summerofcode.withgoogle.com/programs/2024/projects/RTfTiMia", "_blank")
            }}
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Google Summer of Code 2024
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
                Project: Packaging CUPS(Common Unix Printing System) and Printer-apps into OCI images.
          </p>
          <div className="flex flex-wrap gap-2 md:mr-6 mt-6">
            <div className="bg-green-100 text-green-800 rounded-full flex items-center justify-center py-2 px-4 w-full md:w-24">
                Docker
            </div>
            <div className="bg-green-100 text-green-800 rounded-full flex items-center justify-center py-2 px-4 w-full md:w-36">
                Containerization
            </div>
            <div className="bg-green-100 text-green-800 rounded-full flex items-center justify-center py-2 px-4 w-full md:w-24">
                CUPS
            </div>
            <div className="bg-green-100 text-green-800 rounded-full flex items-center justify-center py-2 px-4 w-full md:w-36">
                Bash Scripting
            </div>
          </div>
        </div>
        <img
            src="/gsoc_main.png"
            width={150}
            height={150}
            alt="linear demo image"
            className="hidden xl:block absolute top-20 right-16 filter object-contain"
        />
        <img
            src="/tlf.png"
            width={200}
            height={200}
            alt="linear demo image"
            className="hidden xl:block absolute bottom-20 right-8 grayscale filter object-contain"
        />
      </WobbleCard>
      <WobbleCard 
      onClick={() => {
        window.open("https://devfolio.co/projects/notecorner-ae29", "_blank")
      }
      }
      containerClassName="col-span-1 hover:cursor-pointer min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Winner @ Frosthack 2024
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Winner of the Frosthack 2024 hackathon, where I and my team developed a web application for problem statement productivity paradox.
          </p>
        </div>
      </WobbleCard>
      <div className="mt-4 hover:decoration-solid hover:underline">
            <a href={'https://drive.google.com/file/d/1YZaxq899E9CKva3Ch-5IV7fVhLem3ki0/view?usp=sharing'} className="text-cyan-500 flex items-center">
            View Resume
            <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>    
      </div>
    </div>
  )
}

export default Experience