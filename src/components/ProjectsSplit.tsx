type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  date_started?: string | null;
  date_finished?: string | null;
  github?: string;
  link?: string;
//   order?: number;
  pinned?: boolean;
  technologies?: string[];
};

export default function ProjectSplit({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16 px-6 md:px-12 relative">
      {/* Text side */}
      <div className={`${flip ? "md:order-2" : "md:order-1"}`}>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg text-gray-300 text-whitex mb-6">{project.description}</p>

        {/* Dates if available */}
        {/* {(project.date_started || project.date_finished) && (
          <p className="text-sm text-gray-500 mb-4">
            {project.date_started ? `Started: ${project.date_started}` : ""}
            {project.date_finished ? ` • Finished: ${project.date_finished}` : ""}
          </p>
        )} */}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Image side */}
      <div className={`${flip ? "md:order-1" : "md:order-2"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
