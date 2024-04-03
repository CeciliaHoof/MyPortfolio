import Image from "next/image";

export default function Page() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Python",
    "Flask",
    "SQL",
    "SQLite",
    "SQLAlchemy",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "RESTful APIs",
    "Miro",
    "Figma",
    "Chart.js",
    "Beautiful Soup",
    "Material UI",
    "Semantic UI",
    "Tailwind CSS",
  ];

  for (let i = 0; i < skills.length - 1; i++) {
    skills[i] += " • ";
    console.log(skills[i]);
  }

  const skillsDisplay = skills.map((skill) => (
    <li
      key={skill}
      className="text-sm tracking-tight text-captions sm:text-base text-left mt-3"
    >
      {skill}
    </li>
  ));

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-headers">
        About Me
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-4">
      <div className="col-span-2 flex justify-center md:col-span-1 md:justify-start">
          <Image
            className="rounded shadow shadow-color-[#4c5657]"
            src="/about_me.png"
            width={450}
            height={562}
            alt="Cecilia Chimento head shot"
            priority="false"
          />
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl font-bold tracking-tight text-sub-headers block mt-2 text-right">
            my story{" "}
          </h2>
          <p className="text-base font-bold tracking-tight text-captions sm:text-lg text-left">
            Hi, I&apos;m Cecilia, and I&apos;m a Software Engineer on a mission.
          </p>
          <p className="text-sm tracking-tight text-captions sm:text-base text-left mt-3">
            For the past five years, I&apos;ve been a Registered Nurse in adult
            and neonatal intensive care units, where collaboration and
            problem-solving were daily essentials. During this time, I also
            worked as a COVID-19 crisis response nurse, which reinforced my
            skills for working in fast-paced, high-intensity environments.
          </p>
          <p className="text-sm tracking-tight text-captions sm:text-base text-left mt-3">
            Witnessing firsthand the potential for technology and innovation to
            revolutionize healthcare, I embarked on a journey to marry my
            medical expertise with cutting-edge software development skills.
            With the arsenal gained from the Flatiron School Full Stack Software
            Engineering program and my rich medical background, I&apos;m poised
            to be a driving force in reshaping how technology enhances our
            healthcare experiences.
          </p>
          <p className="text-sm tracking-tight text-captions sm:text-base text-left mt-3">
            From completing an accelerated Bachelor of Science degree Summa Cum
            Laude to caring for our country&apos;s most critical patients, I
            have never met a challenge that I haven&apos;t fully embraced and
            overcome, and embarking on this new mission is no different.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-sub-headers block mt-6 text-right">
            my skills{" "}
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {skillsDisplay}
          </ul>
        </div>
      </div>
    </>
  );
}
