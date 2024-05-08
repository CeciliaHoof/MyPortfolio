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
}

module.exports = { skills };
