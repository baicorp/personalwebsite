export const projects: ProjectItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Ad free youtube music",
    description:
      "Ad-free YouTube music client. Listen to music from YouTube music without interruptions, focusing solely on the audio experience.",
    image: "/project-images/music.webp",
    link: "https://music-app-ecru-xi.vercel.app/",
    tech: ["next js", "typescript", "tailwind css"],
  },
  {
    id: crypto.randomUUID(),
    title: "AuthLite ",
    description:
      "A fullstack authentication system implementing session-based auth and OAuth, designed to be minimal, secure, and easy to extend.",
    image: "/project-images/OAuth.webp",
    link: "https://github.com/baicorp/learning-auth",
    tech: ["react", "typescript", "bun", "hono", "drizzle-orm", "neon-db"],
  },
  {
    id: crypto.randomUUID(),
    title: "Vokemons",
    description: "Responsive pokemon themed website.",
    image: "/project-images/vokemons.webp",
    link: "https://candid-panda-c3abab.netlify.app",
    tech: ["html", "javaScript", "css", "tailwind css"],
  },
  {
    id: crypto.randomUUID(),
    title: "Panti Peduli",
    description:
      "As of my Kampus Merdeka project this is platform to make panti asuhan more visible to internet",
    logo: "/project-images/panti-peduli.png",
    link: "https://github.com/baicorp/peduli-panti",
    tech: [
      "react",
      "javascript",
      "tailwind css",
      "node js",
      "express",
      "sql",
      "firebase",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Baistream",
    description:
      "A lightweight video player optimized for screen sharing during Google Meet calls. Supports local file playback and subtitle extraction using FFmpeg.",
    image: "/project-images/baistream.webp",
    link: "https://baistream.netlify.app",
    tech: ["react", "typescript", "tailwind css"],
  },
  {
    id: crypto.randomUUID(),
    title: "Bai Note",
    description: "Organize and record your ideas easily with notes.",
    logo: "/project-images/note.png",
    link: "https://bainote.netlify.app/",
    tech: ["html", "css", "javaScript"],
  },
];

export const techSkills: TechSkills[] = [
  { id: crypto.randomUUID(), logoName: "html", logo: "/tech-icons/html.svg" },
  { id: crypto.randomUUID(), logoName: "css", logo: "/tech-icons/css.svg" },
  {
    id: crypto.randomUUID(),
    logoName: "javaScript",
    logo: "/tech-icons/javaScript.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "python",
    logo: "/tech-icons/python.svg",
  },
  { id: crypto.randomUUID(), logoName: "react", logo: "/tech-icons/react.svg" },
  {
    id: crypto.randomUUID(),
    logoName: "typescript",
    logo: "/tech-icons/typescript.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "next js",
    logo: "/tech-icons/next js.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "tailwind css",
    logo: "/tech-icons/tailwind css.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "node js",
    logo: "/tech-icons/node js.svg",
  },
  {
    id: crypto.randomUUID(),
    logoName: "express",
    logo: "/tech-icons/express.svg",
  },
  { id: crypto.randomUUID(), logoName: "sql", logo: "/tech-icons/sql.svg" },
  { id: crypto.randomUUID(), logoName: "git", logo: "/tech-icons/git.svg" },
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

export const blogPosts = [
  {
    id: 1,
    title: "Bun 1.0 is Here",
    date: "07/09/2023",
    img: "/project-images/quiz.webp",
  },
  {
    id: 2,
    title: "Bun 1.0 is Here",
    date: "07/09/2023",
    img: "/project-images/quiz.webp",
  },
  {
    id: 3,
    title: "Bun 1.0 is Here",
    date: "07/09/2023",
    img: "/project-images/quiz.webp",
  },
  {
    id: 4,
    title: "Bun 1.0 is Here",
    date: "07/09/2023",
    img: "/project-images/quiz.webp",
  },
  {
    id: 5,
    title: "Bun 1.0 is Here",
    date: "07/09/2023",
    img: "/project-images/quiz.webp",
  },
];
