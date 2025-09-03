import projects from "../data/projects.json"
// import ProjectCard from "./ProjectCard";
import ProjectSplit from "./ProjectsSplit";
import Hero from "./Hero";

export default function PortfolioPage() {
  return (
    // <main className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gray-900">
    //   <div className="max-w-7xl mx-auto text-center mb-12">
    //     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
    //       My Projects
    //     </h1>
    //     <p className="text-gray-600 dark:text-gray-300 mt-2">
    //       A collection of web apps, games, and tools I’ve built over the years.
    //     </p>
    //   </div>

    //   <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //     {projects.map((proj) => (
    //       <ProjectCard key={proj.id} project={proj} />
    //     ))}
    //   </div>
    // </main>

    <main>
      <Hero />
      {projects.map((project, i) => (
        <ProjectSplit key={project.id} project={project} flip={i % 2 === 1} />
      ))}
    </main>
  );
}
