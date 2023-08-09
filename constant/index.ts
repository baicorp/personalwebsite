export const projects: ProjectItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Wijaya Kusuma Kost",
    description:
      "Build a boarding management system that integrates a content management system (CMS) and utilizes a Supabase database.",
    image: "/project-logo/kost.webp",
    link: "https://github.com/baicorp/Wijaya-kusuma-kost",
    tech: ["next js", "supabase", "tailwind css"],
  },
  {
    id: crypto.randomUUID(),
    title: "Bai Quiz",
    description: "Build fun quiz using open trivia database API.",
    logo: "/project-logo/quiz.webp",
    link: "https://baiquiz.netlify.app/",
    tech: ["html", "css", "javaScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "BRI UI Clone",
    description: "Try flutter to create mobile UI of BRI bank.",
    image: "/project-logo/bri-bank.webp",
    link: "https://github.com/baicorp/bank-rakyat-indonesia-app-ui",
    tech: ["dart", "flutter", "firebase"],
  },
  {
    id: crypto.randomUUID(),
    title: "UI Web Architect",
    description:
      "Implementing a mobile-first approach and utilizing Tailwind CSS to achieve responsive design.",
    image: "/project-logo/architect web.webp",
    link: "https://github.com/baicorp/Web-Architect",
    tech: ["vite", "react", "tailwind css"],
  },
  {
    id: crypto.randomUUID(),
    title: "Bai Note",
    description: "Organize and record your ideas easily with notes.",
    logo: "/project-logo/note.png",
    link: "https://bainote.netlify.app/",
    tech: ["html", "css", "javaScript"],
  },
];

export const techSkills: TechSkills[] = [
  { id: crypto.randomUUID(), logoName: "html", logo: "/tech-logo/html.svg" },
  { id: crypto.randomUUID(), logoName: "css", logo: "/tech-logo/css.svg" },
  {
    id: crypto.randomUUID(),
    logoName: "javaScript",
    logo: "/tech-logo/javaScript.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "python",
    logo: "/tech-logo/python.svg",
  },
  { id: crypto.randomUUID(), logoName: "vite", logo: "/tech-logo/vite.svg" },
  { id: crypto.randomUUID(), logoName: "react", logo: "/tech-logo/react.svg" },
  {
    id: crypto.randomUUID(),
    logoName: "typescript",
    logo: "/tech-logo/typescript.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "next js",
    logo: "/tech-logo/next js.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "tailwind css",
    logo: "/tech-logo/tailwind css.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "node js",
    logo: "/tech-logo/node js.svg",
  },
  { id: crypto.randomUUID(), logoName: "sql", logo: "/tech-logo/sql.svg" },
  {
    id: crypto.randomUUID(),
    logoName: "supabase",
    logo: "/tech-logo/supabase.svg",
  },
  { id: crypto.randomUUID(), logoName: "git", logo: "/tech-logo/git.svg" },
];

export const footerList: FooterListItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Find me",
    links: [
      {
        id: crypto.randomUUID(),
        linkSource: "https://linkedin.com/in/baillah",
        linkName: "LinkedIn",
      },
      {
        id: crypto.randomUUID(),
        linkSource: "https://github.com/baicorp",
        linkName: "Github",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Credits",
    links: [
      {
        id: crypto.randomUUID(),
        linkSource: "https://dummyjson.com/",
        linkName: "Dummyjson/quotes",
      },
    ],
  },
];
