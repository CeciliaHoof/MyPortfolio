import { projects } from "../lib/projects"
import Project from "../ui/project"

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-headers sm:text-4xl">
        Projects
      </h1>
      <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-3">
        {projects.slice(0,2).map((project) => (
          <Project project={project} imageHeight={310} imageWidth={549} key={project.title}/>))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-2">
        {projects.slice(2).map((project) => (
          <Project project={project} imageHeight={199} imageWidth={350} key={project.title}/>))}
      </div>
    </>
  );
}
