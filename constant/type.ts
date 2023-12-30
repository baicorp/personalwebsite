//type for projects
type ProjectItemProps = {
  title: string;
  description: string;
  image?: string;
  logo?: string;
  link: string;
  tech: string[];
};

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  logo?: string;
  link: string;
  tech: string[];
};

//type for tech skills
type TechSkillsProps = {
  logo: string;
  logoName: string;
};
type TechSkills = {
  id: string;
  logo: string;
  logoName: string;
};

// type for each footer list item
type Link = {
  id: string;
  linkSource: string;
  linkName: string;
};

type FooterListItemProps = {
  title: string;
  links: Link[];
};
type FooterListItem = {
  id: string;
  title: string;
  links: Link[];
};

type CodeProps = {
  children: string;
  language: string | undefined;
};

type ArticleMetadata = {
  title: string;
  image: string;
  date: string;
};
