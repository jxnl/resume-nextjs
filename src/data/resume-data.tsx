import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Jason Liu",
  initials: "jxnl",
  location: "New York",
  locationLink: "https://www.google.com/maps/place/New+York",
  about:
    "Experienced Data Scientist and Machine Learning Engineer w/ experience in recommendation systems, machine learning, and python tooling.",
  summary:
    "I am currently on sabbatical at South Park Commons, where I consult and advise startups in infrastructure, applied AI, and personal computing. I am obsessed with finding the right abstractions and discovering excellent tools that empower others to build.",
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
      title: "Owner / Consultant",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "Working with seed stage companies, helping founders with tech strategy, research, and infrastructure.",
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
      link: "https://about.meta.com/actions/promoting-safety-and-expression/",
      badges: ["Data Science"],
      title: "Data Scientist",
      logo: "",
      start: "2017",
      end: "2017",
      description:
        "Created algorithms for identifying harmful content and developed dashboards to detect malicious activities.",
    },
    {
      company: "New York University",
      link: "https://www.nyu.edu/",
      badges: ["Research"],
      title: "Research Assistant",
      start: "2015",
      end: "2017",
      description: "Under Rumi Chunara, centered around public health and social media.",
      logo: "", // Path to NYU logo image
    },
  ],
  skills: [
    "Python",
    "Pytorch",
    "LLMs",
    "Prompt Engineering",
    "Structured Extraction",
    "Observability",
    "Developer Tools",
    "Machine Learning",
    "Data Science",
  ],
  projects: [
    {
      title: "Instructor",
      techStack: ["python", "llms", "structured extraction"],
      description: "Creator, tool for structured extraction and self-hosting",
      link: {
        label: "Instructor",
        href: "https://jxnl.github.io/instructor/",
      },
    },
    {
      title: "Multimodal Search",
      techStack: ["Stitchfix", "pytorch", "representation learning", "search"],
      description: "Lead computer vision research, and embedding search system using multi-modal embeddings (Image, Text, Ratings).",
      link: {
        label: "Stylist Shuffle",
        href: "https://www.stitchfix.com/women/blog/inside-stitchfix/how-style-shuffle-works/",
      },
    },
    {
      title: "RecSys Framework",
      techStack: ["devops", "python", "orchestration", "observability"],
      description:
        "Designed and implemented Flight, a recommendation framework that improved system reliability and scalability, handling over 350 million daily requests.",
      link: {
        label: "Learn more about Flight at Stitchfix",
        href: "https://www.jxnl.co/writing/flight-at-stitchfix",
      },
    },
    {
      title: "Journal",
      techStack: ["typescript", "prompt engineering"],
      description:
        "AI-powered journaling application with long-term memory and semantic search.",
      link: {
        label: "Journal",
        href: "http://usejournal.xyz",
      },
    },
  ],
  clients: [
    {
      title: "Naro",
      techStack: ["client work", "python", "prompt engineering", "sales"],
      description: "Naro sits in the background, using contextual clues to proactively select the right content and messaging for each customer conversation, from emails to meetings.",
      link: {
        label: "narohq.com",
        href: "http://narohq.com",
      },
    },
    {
      title: "Trunk Tools",
      techStack: [
        "client work",
        "construction",
        "technical advisor",
        "retrival",
      ],
      description:
        "Trunk Tools addresses the skilled labor shortage in construction, enhancing workforce productivity through AI-based tools.",
      link: {
        label: "trunktools.com",
        href: "https://trunktools.com/",
      },
    },
    {
      title: "Modal Labs",
      techStack: ["client work", "technical writing", "python"],
      description:
        "Modal specializes in cloud functions, offering a platform for running generative AI models, large-scale batch jobs, and more.",
      link: {
        label: "modal.com",
        href: "https://modal.com/",
      },
    },
    {
      title: "Pydantic",
      techStack: ["client work", "technical writing", "python"],
      description:
        "Pydantic provides data validation and settings management using Python type annotations, enforcing type hints at runtime with user-friendly error handling.",
      link: {
        label: "pydantic.dev",
        href: "http://pydantic.dev",
      },
    },
    {
      title: "Weight & Biases",
      techStack: [
        "client work", 
        "technical writing",
        "education",
        "machine learning",
      ],
      description:
        "Wandb (Weights & Biases) provides a platform for tracking machine learning experiments, offering tools for visualization, comparison, and collaboration in ML projects.",
      link: {
        label: "wandb.ai",
        href: "https://wandb.ai/",
      },
    },
    {
      title: "Kay.ai",
      techStack: ["client work", "retrieval", "evals", "infrastucture", "python"],
      description:
        "Retrieve relevant context from the semantic web for your LLM apps with fully hosted embeddings.",
      link: {
        label: "Kay.ai",
        href: "http://Kay.ai",
      },
    },
    {
      title: "New Computer",
      techStack: ["client work", "personal computing", "python"],
      description:
        "Dot by New Computer is an intelligent guide designed to help you remember, organize, and navigate your life.",
      link: {
        label: "new.computer",
        href: "http://new.computer",
      },
    },
  ],
} as const;
