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
        "timeline": "2021",
        "name": "Knights Gambit",
        "techs": ["React", "TypeScript", "TailwindCSS", "Firebase"],
        "description": "A multiplayer chess game with real-time gameplay and chat.",
        "github": ""
    },
  ]
  
  export function ProjectTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-slate-950">
            <TableHead className="w-[100px] text-white">Timeline</TableHead>
            <TableHead className="text-white">Project</TableHead>
            <TableHead className="text-white">Made with</TableHead>
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white">Github Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index} className="hover:bg-slate-900">
              <TableCell className="font-medium text-gray-400">{project.timeline}</TableCell>
              <TableCell className="text-gray-400">{project.name}</TableCell>
              <TableCell className="text-gray-400">{project.techs.map( (tech, index) => (
                <span key={index} className="mr-2 text-cyan-900 bg-cyan-300 rounded-full px-3 py-2">{tech}</span>
              ))}</TableCell>
              <TableCell className="text-gray-400">{project.description}</TableCell>
              <TableCell className="text-gray-400 flex justify-center items-center" ><a href={project.github} className="flex justify-center items-center"><LuLink className="h-6 w-6 stroke-blue-400" /></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }