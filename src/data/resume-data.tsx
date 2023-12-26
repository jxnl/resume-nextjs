
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Jason Liu",
  initials: "jxnl",
  location: "New York",
  locationLink: "https://www.google.com/maps/place/New+York",
  about:
    "Experienced Data Scientist and Machine Learning Engineer with a demonstrated history of working in various tech industries.",
  summary:
    "I have over 8 years of experience in data science and machine learning, working with companies like Stitchfix, Facebook, NYU, ActionIQ, Meltwater, Kojo, and helping other startups.",
  avatarUrl: "https://avatars.githubusercontent.com/u/4852235?v=4",
  personalWebsiteUrl: "https://jxnl.co",
  contact: {
    email: "jason@jxnl.co",
    tel: "4156106247",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jxnl",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jxnlco/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jxnlco",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Waterloo",
      degree: "B.Math. Computational Mathematics and Statistics",
      start: "2012",
      end: "2017",
    },
  ],
  work: [
    {
      company: "567",
      link: "https://jxnl.co",
      badges: ["Applied AI"],
      title: "Consultant",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "Working with seed stage companies, helping founders with AI strategy, implementation, and infrastructure.",
    },
    {
      company: "South Park Commons",
      link: "https://www.southparkcommons.com/",
      badges: ["Sabbatical"],
      title: "Member",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "Exploring LLM tooling around structured extraction and self-hosting. Launched Youtube University and developing Journal, an AI-powered journaling application.",
    },
    {
      company: "Stitchfix",
      link: "https://www.jxnl.co/writing/flight-at-stitchfix",
      badges: ["ML Engineering"],
      title: "Staff ML Engineer",
      logo: "", // Add logo if available
      start: "2018",
      end: "2023",
      description:
        "Integrated OpenAI's LLMs into Stitchfix's stylist workflow, led computer vision research, developed a product similarity search system, and designed Flight, a recommendation framework.",
    },
    {
      company: "Facebook",
      link: "#",
      badges: ["Data Science"],
      title: "Data Scientist",
      logo: "", // Add logo if available
      start: "2017",
      end: "2017",
      description:
        "Created algorithms for identifying harmful content and developed dashboards to detect malicious activities.",
    },
  ],
  skills: [
    "Data Science",
    "Machine Learning",
    "Computer Vision",
    "Recommendation Systems",
    "Developer Tools",
    "Pytorch",
    "Model Training"
  ],
  projects: [
    {
      title: "Naro",
      techStack: ["Applied AI Consultancy"],
      description: "Consultancy work for Naro.",
      link: {
        label: "narohq.com",
        href: "http://narohq.com",
      },
    },
    {
      title: "Trunktools",
      techStack: ["Applied AI Consultancy"],
      description: "Consultancy work for Trunktools.",
      link: {
        label: "trunktools.com",
        href: "https://trunktools.com/",
      },
    },
    {
      title: "Modal",
      techStack: ["Applied AI Consultancy"],
      description: "Consultancy work for Modal.",
      link: {
        label: "modal.com",
        href: "http://modal.com",
      },
    },
    {
      title: "Pydantic",
      techStack: ["Applied AI Consultancy"],
      description: "Consultancy work for Pydantic.",
      link: {
        label: "pydantic.dev",
        href: "http://pydantic.dev",
      },
    },
    {
      title: "Wandb",
      techStack: ["Applied AI Consultancy"],
      description: "Consultancy work for Wandb.",
      link: {
        label: "wandb.ai",
        href: "https://wandb.ai/",
      },
    },
    {
      title: "Kay.ai",
      techStack: ["Applied AI Consultancy"],
      description: "Consultancy work for Kay.ai.",
      link: {
        label: "Kay.ai",
        href: "http://Kay.ai",
      },
    },
    {
      title: "New.Computer",
      techStack: ["Applied AI Consultancy"],
      description: "Consultancy work for New.Computer.",
      link: {
        label: "new.computer",
        href: "http://new.computer",
      },
    },
    {
      title: "Instructor",
      techStack: ["Web Application", "LLMs"],
      description:
        "Creator of Instructor, an innovative tool for structured extraction and self-hosting, with approximately 2.3k stars.",
      link: {
        label: "Instructor",
        href: "https://jxnl.github.io/instructor/",
      },
    },
    {
      title: "Youtube Chapters",
      techStack: ["Web Application"],
      description:
        "Developer of Youtube Chapters, a platform for creating interactive and dynamic video chapters.",
      link: {
        label: "Youtube Chapters",
        href: "https://youtubechapters.app",
      },
    },
    {
      title: "Journal",
      techStack: ["Web Application", "AI", "Journaling"],
      description:
        "Developed Journal, an AI-powered journaling application with long-term memory and semantic search, achieving around 6k Monthly Active Users (MAU).",
      link: {
        label: "Journal",
        href: "http://usejournal.xyz",
      },
    },
  ],
} as const;
