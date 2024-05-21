import { WobbleCard } from "./ui/wobble-card"

const Experience = () => {
  return (
    <div className="">
    <WobbleCard
        containerClassName="col-span-1 mb-8 lg:col-span-2 h-full bg-cyan-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Google Summer of Code 2024
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Project: Packaging CUPS(Common Unix Printing System) and Printer-apps into OCI images.
          </p>
          <div className="grid grid-cols-2 gap-2 mr-6 mt-6">
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-24 h-9">
                Docker
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-40 h-9">
                Containerization
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-24 h-9">
                CUPS
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-40 h-9">
                Printer-apps
            </div>
          </div>
        </div>
        <img
            src="/gsoc_main.png"
            width={150}
            height={150}
            alt="linear demo image"
            className="absolute top-20 right-16 filter object-contain"
        />
        <img
            src="/tlf.png"
            width={200}
            height={200}
            alt="linear demo image"
            className="absolute bottom-20 right-8 grayscale filter object-contain"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Winner @ Frosthack 2024
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Winner of the Frosthack 2024 hackathon, where I and my team developed a web application for problem statement productivity paradox.
          </p>
        </div>
        {/* <div className="grid grid-cols-4 mr-6 mt-6">
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-28 h-9">
                NextJS
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-36 h-9">
                Judge0
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-28 h-9">
                QuillJS
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-36 h-9">
                Next-auth
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-28 h-9">
                Prisma
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-36 h-9">
                PostgreSQL
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-28 h-9">
                TailwindCSS
            </div>
            <div className="bg-green-200 text-green-600 rounded-full flex items-center justify-center w-36 h-9">
                ShadCN
            </div>
          </div> */}
        {/* <img
            src="/tlf.png"
            width={200}
            height={200}
            alt="linear demo image"
            className="absolute bottom-20 right-8 grayscale filter object-contain"
        /> */}
      </WobbleCard>
    </div>
  )
}

export default Experience