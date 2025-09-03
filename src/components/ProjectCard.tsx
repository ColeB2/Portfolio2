interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  pinned: boolean;
  technologies: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800 dark:text-white flex flex-col justify-between">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="w-full relative mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="object-contain rounded-md h-48 w-full"
        />
      </div>
      <div className="mt-auto flex flex-col gap-2">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition text-center"
          >
            Visit Site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition text-center"
          >
            GitHub
          </a>
        )}
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {project.technologies.join(', ')}
      </div>
    </div>
  );
}
