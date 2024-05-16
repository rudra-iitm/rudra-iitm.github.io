import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import React from 'react'
import { JSX } from 'react/jsx-runtime'

const Homepage = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <a className="flex items-center gap-2 font-semibold" href="#">
            <CodeIcon className="h-6 w-6" />
            <span className="sr-only">Rudra's Portfolio</span>
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#/resume">Resume</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main>
        <section className="bg-gray-100 py-12 md:py-24 dark:bg-gray-800">
          <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Rudra</h1>
              <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Software Engineer</h2>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-300">
                I'm a passionate software engineer with a focus on building high-quality, scalable applications. I have
                experience in a variety of technologies and enjoy tackling complex problems.
              </p>
              <div className="flex gap-4">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Me
                </a>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Resume
                </a>
              </div>
            </div>
            <img
              alt="Rudra"
              className="mx-auto rounded-lg object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/500",
                objectFit: "cover",
              }}
              width={500}
            />
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-6 lg:grid-cols-4">
            <a className="group" href="#">
              <div className="overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-105 dark:bg-gray-800">
                <img
                  alt="Project 1"
                  className="aspect-video w-full object-cover"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Project 1
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of Project 1.</p>
                </div>
              </div>
            </a>
            <a className="group" href="#">
              <div className="overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-105 dark:bg-gray-800">
                <img
                  alt="Project 2"
                  className="aspect-video w-full object-cover"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Project 2
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of Project 2.</p>
                </div>
              </div>
            </a>
            <a className="group" href="#">
              <div className="overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-105 dark:bg-gray-800">
                <img
                  alt="Project 3"
                  className="aspect-video w-full object-cover"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Project 3
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of Project 3.</p>
                </div>
              </div>
            </a>
            <a className="group" href="#">
              <div className="overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-105 dark:bg-gray-800">
                <img
                  alt="Project 4"
                  className="aspect-video w-full object-cover"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Project 4
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of Project 4.</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6 dark:bg-gray-800">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Rudra. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              className="text-sm hover:underline hover:underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm hover:underline hover:underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Contact
            </a>
            <a
              className="text-sm hover:underline hover:underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

const CodeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    </svg>
  )
}

export default Homepage