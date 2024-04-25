import { projects } from "../lib/projects";
import Project from "../ui/project";

export default function Page() {
  const featured = projects
    .slice(0, 2)
    .map((project) => (
      <Project project={project} type="featured" key={project.title} />
    ));

  const other = projects
    .slice(2)
    .map((project) => (
      <Project project={project} type="other" key={project.title} />
    ));

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-headers">
        Projects
      </h1>
      <h2 className="text-2xl font-bold tracking-tight text-sub-headers mt-5 text-right">
        featured
      </h2>
      <div className="flex flex-row gap-5 justify-center">{featured}</div>
      <h2 className="text-2xl font-bold tracking-tight text-sub-headers mt-7 text-right">
        other projects
      </h2>
      <div className="flex flex-row gap-5 justify-center">{other}</div>
    </>
  );
}
