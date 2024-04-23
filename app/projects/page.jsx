import Image from "next/image";
import { projects } from "../lib/projects"

export default function Page() {
  // console.log(projects)
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {projects.slice(0,2).map((project) => (
          <div key={project.title}>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-gray-900">{project.description}</p>
            <p className="text-gray-900">{project.tech}</p>
            <Image
              src={project.image}
              height={282}
              width={500}
              alt={`Screenshot of ${project.title}`}
              priority='false'
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects.slice(2).map((project) => (
          <div key={project.title}>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-gray-900">{project.description}</p>
            <p className="text-gray-900">{project.tech}</p>
            <Image
              src={project.image}
              height={227}
              width={400}
              alt={`Screenshot of ${project.title}`}
              priority='false'
            />
          </div>
        ))}
      </div>
    </>
  );
}
