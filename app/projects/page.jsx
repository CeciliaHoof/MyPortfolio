import { projects } from "../lib/projects"
import Project from "../ui/project"

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-headers sm:text-4xl">
        Projects
      </h1>
      <div className="flex flex-wrap mt-3 gap-12 justify-center">
        {projects.map((project) => (
          <Project project={project} key={project.title}/>))}
      </div>
    </>
  );
}
