import Image from "next/image";
import Link from "next/link";
import { skills } from "../lib/skills";

export default function Page() {
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
            For the past five years, I&apos;ve been a Registered Nurse in adult and
            neonatal intensive care units, where collaboration, problem-solving,
            and attention to detail were daily essentials. During this time, I
            also worked as a COVID-19 crisis response nurse, honing my ability
            to thrive in fast-paced, high-intensity environments.
          </p>
          <p className="text-sm tracking-tight text-captions sm:text-base text-left mt-3">
            Inspired by the transformative potential of technology, I embarked
            on a journey to combine my critical thinking and analytical
            expertise with cutting-edge software development skills. Through the
            rigorous Full Stack Software Engineering program at Flatiron School,
            I gained a solid foundation in technologies such as JavaScript,
            React, Python, and SQL.
          </p>
          <p className="text-sm tracking-tight text-captions sm:text-base text-left mt-3">
            My unique background allows me to approach problems with a fresh
            perspective and innovative solutions. From completing an accelerated
            Bachelor of Science degree Summa Cum Laude to developing impactful
            software projects, I have consistently embraced and overcome
            challenges.
          </p>
          <p className="text-sm tracking-tight text-captions sm:text-base text-left mt-3">
            I&apos;m passionate about leveraging technology to create solutions that
            drive meaningful impact. Whether it&apos;s improving user experiences,
            optimizing processes, or developing new features, I&apos;m dedicated to
            delivering high-quality, scalable software.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-sub-headers block mt-6 text-right">
            my skills{" "}
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {skillsDisplay}
          </ul>
          <Link
            href="/Cecilia_Chimento_Resume.pdf"
            download={true}
            target={"_blank"}
            className="text-2xl font-bold tracking-tight text-captions block mt-8 text-center"
          >
            View Resume
          </Link>
        </div>
      </div>
    </>
  );
}
