import Link from "next/link";

export default function Page() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/cecilia-chimento/",
    },
    {
        name: "GitHub",
        href: "https://github.com/CeciliaHoof",
    },
    {
      name: "Email",
      href: "mailto:ccchimento@gmail.com",
    }
  ];

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contact Me
      </h2>
      <ul>
        {/* <li className="text-gray-900"><Link href="https://www.linkedin.com/in/cecilia-chimento/">LinkedIn</Link></li>
        <li className="text-gray-900">Email</li>
        <li className="text-gray-900">GitHub</li> */}
        {links.map((link) => (
          <li key={link.name} className="text-gray-900">
            <Link  href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
