// The projects in the front-page grid, in order. A project with a slug has
// its own page at /projects/<slug> and its square links there; the rest are
// still empty placeholders.
export interface Project {
  slug?: string;
  title?: string;
  subtitle?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "1000-rejections",
    title: "1000 Rejections",
    subtitle: "Creative Coding · Creative Data Visualization · Personal Data",
  },
  {
    slug: "news-for-a-digital-generation",
    title: "News for a Digital Generation",
    subtitle: "BA-thesis · Research",
  },
  {
    slug: "smartwatch-in-everyday-life",
    title: "Smartwatch in everyday life",
    subtitle: "Qualitative research",
  },
  {
    slug: "kunde-and-co",
    title: "Kunde & Co",
    subtitle: "CMS · Stakeholder management",
  },
  {
    slug: "user-centred-app-concept",
    title: "User-Centred App Concept",
    subtitle: "UX · Co-design",
  },
  {
    slug: "fredagsbar-dk",
    title: "Fredagsbar.dk",
    subtitle: "Events · Leadership · Communication",
  },
  {},
  {},
  {},
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
