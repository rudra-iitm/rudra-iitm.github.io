import { LuLink } from "react-icons/lu";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const projects = [
    {
        "timeline": "2024",
        "name": "Knights Gambit",
        "techs": ["React", "TypeScript", "TailwindCSS", "Web_Socket", "Clerk_Auth", "Chess_Bot", "StockFish", "Prisma", "PostgreSQL", "ShadCN", "TurboRepo", "Ngrok"],
        "description": "Dive into the world of chess with our interactive multiplayer game! Experience real-time gameplay against friends or challenge our intelligent bots. Your game is always secure with Clerk authentication. Whether you're a novice or a grandmaster, enjoy seamless matches and elevate your chess skills on our dynamic web app.",
        "github": ""
    },
    {
      "timeline": "2024",
      "name": "Note Corner",
      "techs": ["NextJS", "TypeScript", "TailwindCSS", "Next_Auth", "Prisma", "PostgreSQL", "ShadCN", "Judge0", "QuillJS"],
      "description": "Welcome to our ultimate productivity app! Seamlessly switch between tasks with rich text editing, execute code remotely, and chat with our intelligent bot. From brainstorming to execution, unlock your full potential with us. Say hello to productivity redefined!",
      "github": ""
    },
    {
      "timeline": "2024",
      "name": "Surge Sync",
      "techs": ["S3 Client", "React", "Kafka", "NodeJS", "Express", "Docker", "Reverse_Proxy", "Prisma", "PostgreSQL"],
      "description": "Deploy your React app effortlessly with just one click. Say goodbye to complex configurations and waiting times—launch your masterpiece with ease and make your mark in the digital world!",
      "github": ""
    },
    {
      "timeline": "2024",
      "name": "My Portfolio",
      "techs": ["React", "TailwindCSS", "ShadCN", "Github Pages"],
      "description": "Know everything about me and my projects in one place. Explore my journey, skills, and projects in detail. Dive into the world of web development with me and let's create something amazing together!",
      "github": ""
    },
    {
      "timeline": "2024",
      "name": "Mess Buddy",
      "techs": ["React", "TailwindCSS", "ShadCN", "NodeJS", "Express", "Prisma", "PostgreSQL", "JWT", "Bcrypt", "Zod", "NodeMailer", "Cloudinary", "S3 Client", "Flutter"],
      "description": "Introducing Mess Buddy: your all-in-one solution for IIT Mandi mess management! Say goodbye to the hassle of menu browsing and mess selection processes. With just a click, access everything you need for a seamless dining experience. Let Mess Buddy take the stress out of managing your mess, so you can focus on enjoying your meals hassle-free!",
      "github": ""
    },
  ]
  
  export function ProjectTable() {

    return (
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-slate-950">
            <TableHead className="w-[100px] text-white">Timeline</TableHead>
            <TableHead className="text-white ">Project</TableHead>
            <TableHead className="text-white max-w-md">Made with</TableHead>
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white w-[120px] text-center">Github Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index} className="hover:bg-slate-900">
              <TableCell className="font-medium text-gray-400">{project.timeline}</TableCell>
              <TableCell className="text-gray-200 text-sm">{project.name}</TableCell>
              <TableCell className="text-gray-400 flex gap-2 flex-wrap max-w-4xl">{project.techs.map( (tech, index) => (
                <div key={index} className="mr-2 text-cyan-900 bg-cyan-300 rounded-full px-3 py-2">{tech}</div>
              ))}</TableCell>
              <TableCell className="text-gray-400 max-w-xl">{project.description}</TableCell>
              <TableCell className="text-gray-400 flex justify-center items-center" ><a href={project.github} className="flex justify-center items-center"><LuLink className="h-6 w-6 stroke-blue-400" /></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }