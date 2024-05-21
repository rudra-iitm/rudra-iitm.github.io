
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const techs = [
    {
      "name": "Next.js",
      "overview": "Next.js is a React framework that enables server-side rendering and static site generation. It provides a seamless developer experience with features like file-system routing, API routes, and automatic code splitting.",
      "proficiencies": "Intermediate"
    },
    {
      "name": "React.js",
      "overview": "React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently.",
      "proficiencies": "Proficient"
    },
    {
      "name": "Next Auth",
      "overview": "Next Auth is an authentication library for Next.js applications. It provides built-in support for various authentication providers and offers a simple API for implementing authentication flows.",
      "proficiencies": "Intermediate"
    },
    {
      "name": "Tailwind CSS",
      "overview": "Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without writing traditional CSS code. It provides a set of pre-designed utility classes for styling HTML elements.",
      "proficiencies": "Proficient"
    },
    {
      "name": "ShadCN",
      "overview": "ShadCN is a library for managing state in React applications. It offers a simple and intuitive API for managing complex application state and provides tools for handling asynchronous actions.",
      "proficiencies": "Proficient"
    },
    {
      "name": "Node.js",
      "overview": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side and build scalable network applications.",
      "proficiencies": "Proficient"
    },
    {
      "name": "Express",
      "overview": "Express is a web application framework for Node.js. It provides a robust set of features for building web and mobile applications, including routing, middleware support, and template engines.",
      "proficiencies": "Proficient"
    },
    {
      "name": "Hono",
      "overview": "Hono is a tool for monitoring and managing Node.js applications. It offers insights into application performance and helps developers identify and fix performance bottlenecks.",
      "proficiencies": "Intermediate"
    },
    {
      "name": "Docker",
      "overview": "Docker is a platform for building, shipping, and running applications in containers. It provides a lightweight and efficient way to package applications and their dependencies into portable units.",
      "proficiencies": "Intermediate"
    },
    {
      "name": "Turbo Repo",
      "overview": "Turbo Repo is a package manager for Node.js projects. It simplifies dependency management by automatically resolving and installing package dependencies from a centralized repository.",
      "proficiencies": "Intermediate"
    },
    {
      "name": "Prisma ORM",
      "overview": "Prisma ORM is an open-source database toolkit for Node.js and TypeScript. It provides a type-safe and auto-generated database client that simplifies database access and query building.",
      "proficiencies": "Proficient"
    },
    {
      "name": "PostgreSQL",
      "overview": "PostgreSQL is a powerful open-source relational database system. It provides advanced features for storing and querying data, including support for transactions, indexes, and foreign keys.",
      "proficiencies": "Proficient"
    },
    {
      "name": "MongoDB",
      "overview": "MongoDB is a NoSQL document database. It stores data in flexible, JSON-like documents and offers a rich set of features for querying and indexing data, including support for geospatial queries and aggregation pipelines.",
      "proficiencies": "Intermediate"
    },
    {
        "name": "AWS",
        "overview": "Amazon Web Services (AWS) is a comprehensive, on-demand cloud computing platform that provides a broad range of compute, storage, database, networking, analytics, application services, deployment, management, and security functionalities to help businesses scale and grow.",
        "proficiencies": "Beginner"
    }
  ];
  
  
  export function TechArchive() {

    return (
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-slate-950">
            <TableHead className="text-white ">Tech Stack</TableHead>
            <TableHead className="text-white hidden md:block max-w-md">Overview</TableHead>
            <TableHead className="text-white">Proficiency</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {techs.map((tech, index) => (
            <TableRow key={index} className="hover:bg-slate-900">
              <TableCell className="text-gray-200 text-sm">{tech.name}</TableCell>
              <TableCell className="text-gray-400 hidden md:block max-w-xl">{tech.overview}</TableCell>
              <TableCell className="text-gray-400 min-w-36">
                <div className={`${tech.proficiencies == "Proficient" ? "bg-[#0b933d]": tech.proficiencies == "Intermediate" ? "bg-cyan-500" : "bg-orange-500"} flex justify-center items-center py-2 text-white rounded-full`}>
                    {tech.proficiencies}
                </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }