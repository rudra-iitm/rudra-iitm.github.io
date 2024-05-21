import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";

const techs = [
  {
    name: "NextJS",
    body: "Next.js provides a powerful and flexible framework for building server-side rendered React applications, making SEO and performance optimization a breeze.",
    img: "/tech-stacks/nextjs.png",
  },
  {
    name: "ReactJS",
    body: "ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces, allowing developers to create large web applications that can update and render efficiently.",
    img: "/tech-stacks/reactjs.png",
  },
  {
    name: "Prisma",
    body: "Prisma is an open-source database toolkit that simplifies data modeling, migrations, and type-safe database access for Node.js and TypeScript.",
    img: "/tech-stacks/prisma.png",
  },
  {
    name: "NodeJS",
    body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling developers to build scalable network applications with ease.",
    img: "/tech-stacks/nodejs.png",
  },
  {
    name: "Mongo DB",
    body: "MongoDB is a NoSQL database that uses a flexible, JSON-like document schema, making it a great choice for applications that require fast and iterative development cycles.",
    img: "/tech-stacks/mongodb.png",
  },
  {
    name: "PostgreSQL",
    body: "PostgreSQL is a powerful, open-source relational database system that uses and extends the SQL language combined with many features that safely store and scale complex data workloads.",
    img: "/tech-stacks/postgresql.png",
  },
  {
    name: "Docker",
    body: "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers, simplifying application deployment and scaling.",
    img: "/tech-stacks/docker.png",
  },
  {
    name: "Hono",
    body: "Hono is a high-performance web framework for building small, fast, and scalable web applications with a modern, expressive API.",
    img: "/tech-stacks/hono.png",
  },
  {
    name: "JavaScript",
    body: "JavaScript is a versatile, high-level programming language that's essential for web development, enabling dynamic and interactive web pages.",
    img: "/tech-stacks/javascript.png",
  },
  {
    name: "TypeScript",
    body: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale and making code easier to maintain and debug.",
    img: "/tech-stacks/typescript.png",
  },
];


const firstRow = techs;

const TechCards = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-slate-300/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}

          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const TechStacks = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl pt-10">
      <Marquee pauseOnHover className="[--duration:5s]">
        {firstRow.map((review, index) => ( 
          <TechCards key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
};
