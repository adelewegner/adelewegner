// The projects in the front-page grid, in order. Each has its own page at
// /projects/<slug>, and its square links there. A project with an image (in
// public/projects) shows it in its square; the others show an "under
// construction" tile.
// The square is wider than most images, so some is cropped; imagePosition
// (a Tailwind object-position class) says which part to keep. teaser is
// the short description under the subtitle; keep each around 70 characters
// so they all wrap to two even lines.
export interface Project {
  slug?: string;
  title?: string;
  subtitle?: string;
  teaser?: string;
  image?: string;
  imagePosition?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "1000-rejections",
    title: "Challenge: 1000 rejections",
    subtitle: "Creative Coding · Creative Data Visualization · Personal Data",
    teaser:
      "A personal project making 1,000 asks, tracked as data. Follow the journey.",
  },
  {
    slug: "news-for-a-digital-generation",
    title: "News for a Digital Generation",
    subtitle: "BA-thesis · Media systems analysis",
    teaser:
      "An analysis of how DR News uses Instagram to reach young audiences.",
    image: "/projects/ba-thesis.webp",
    // Keep the title at the top of the cover in view.
    imagePosition: "object-top",
  },
  {
    slug: "smartwatch-in-everyday-life",
    title: "Smartwatch in everyday life",
    subtitle: "Qualitative research",
    teaser:
      "A qualitative study of how smartwatches shape users’ view of their health.",
    image: "/projects/smartwatch-blue.webp",
  },
  {
    slug: "kunde-and-co",
    title: "Kunde & Co",
    subtitle: "CMS · Stakeholder management",
    teaser:
      "Managing web content across CMS platforms as part of a larger project team.",
  },
  {
    slug: "eventful",
    title: "Eventful",
    subtitle: "App concept · UX · User testing",
    teaser:
      "A user-centred app concept that helps people discover events in Aarhus.",
    image: "/projects/eventful/collage.png",
    imagePosition: "object-center",
  },
  {
    slug: "fredagsbar-dk",
    title: "Fredagsbar.dk",
    subtitle: "Events · Leadership · Communication",
    teaser:
      "Planning events, leading a team and handling communication for Fredagsbar.dk.",
  },
  {
    slug: "associations",
    title: "Associations",
    subtitle: "SAMSON · Board of Studies · Tutor",
    teaser:
      "Editorial work for SAMSON, student representation and tutoring new students.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
