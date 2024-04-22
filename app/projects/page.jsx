export default function Page() {
  const projects = [
    {
      title: "EMpowR",
      description:
        "A platform for users to store healthcare data in one convenient location, empowering users to take control of their health.",
      tech: "JavaScript, React, Python, Flask, SQLAlchemy",
    },
    {
      title: "FloraFriends",
      description:
        "A social media inspired platform for plant owners to track the care they have provided for their plants.",
      tech: "JavaScript, React, Python, Flask, SQLAlchemy",
    },
    { title: "QuestForge", description: "" },
    { title: "National Parks of California", description: "" },
    { title: "Harry Potter Book Reviewer", description: "" },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Projects
      </h1>
      {projects.map((project) => (
        <div key={project.title}>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {project.title}
          </h3>
          <p className="text-gray-900">{project.description}</p>
          <p className="text-gray-900">{project.tech}</p>
        </div>
      ))}
    </>
  );
}
