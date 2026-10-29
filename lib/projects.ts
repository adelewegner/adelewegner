// The projects in the front-page grid, in order. Each has its own page at
// /projects/<slug>, and its square links there. A project with an image (in
// public/projects) shows it in its square; the others show an "under
// construction" tile.
// The square is wider than most images, so some is cropped; imagePosition
// (a Tailwind object-position class) says which part to keep.
export interface Project {
  slug?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  imagePosition?: string;
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
    subtitle: "BA-thesis · Media systems analysis",
    image: "/projects/ba-thesis.webp",
    // Keep the title at the top of the cover in view.
    imagePosition: "object-top",
  },
  {
    slug: "smartwatch-in-everyday-life",
    title: "Smartwatch in everyday life",
    subtitle: "Qualitative research",
    image: "/projects/smartwatch-blue.webp",
  },
  {
    slug: "kunde-and-co",
    title: "Kunde & Co",
    subtitle: "CMS · Stakeholder management",
  },
  {
    slug: "eventful",
    title: "Eventful",
    subtitle: "App concept · UX · User testing",
    image: "/projects/eventful/collage.png",
    imagePosition: "object-center",
  },
  {
    slug: "fredagsbar-dk",
    title: "Fredagsbar.dk",
    subtitle: "Events · Leadership · Communication",
  },
  {
    slug: "associations",
    title: "Associations",
    subtitle: "SAMSON · Board of Studies · Tutor",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
