//interface for projects
interface ProjectItemProps {
  title: string;
  description: string;
  image?: string;
  logo?: string;
  link: string;
  tech: string[];
}
interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  logo?: string;
  link: string;
  tech: string[];
}

//interface for tech skills
interface TechSkillsProps {
  logo: string;
  logoName: string;
}
interface TechSkills {
  id: string;
  logo: string;
  logoName: string;
}

// Interface for each footer list item
interface Link {
  id: string;
  linkSource: string;
  linkName: string;
}

interface FooterListItemProps {
  title: string;
  links: Link[];
}
interface FooterListItem {
  id: string;
  title: string;
  links: Link[];
}
