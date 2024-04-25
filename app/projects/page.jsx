import { projects } from "../lib/projects";
import Project from "../ui/project";

export default function Page() {
  const featured = projects
    .slice(0, 2)
    .map((project) => <Project project={project} type="featured" key={project.title} />);
  
  const other = projects
    .slice(2)
    .map((project) => <Project project={project} type="other" key={project.title} />);
    
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-headers sm:text-4xl">
        Projects
      </h1>
      <div className="flex flex-row mt-3 justify-center gap-12">
        <div className="flex flex-col basis-7/12 gap-4 justify-start">
          {featured}
        </div>
        <div className="flex flex-wrap basis-5/12 gap-3 justify-center">
          {other}
        </div>
      </div>
    </>
  );
}
