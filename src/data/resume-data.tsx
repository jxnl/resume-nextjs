import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Jason Liu",
  initials: "jxnl",
  location: "New York",
  locationLink: "https://www.google.com/maps/place/New+York",
  about:
    "Experienced Data Scientist and Machine Learning Engineer w/ experience in recommendation systems, applied ai, and developer tools.",
  summary:
    "Currently on my sabbatical at South Park Commons while consulting and advising startups in the infrastructure, applied ai, and personal computing. Obsessed with finding the right abstractions and finding great tools that enable others to build.",
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
    "Model Training",
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
      title: "Journal",
      techStack: ["typescript", "prompt engineering"],
      description:
        "AI-powered journaling application with long-term memory and semantic search.",
      link: {
        label: "Journal",
        href: "http://usejournal.xyz",
      },
    },
    {
      title: "LLMs @ Stitchfix",
      techStack: ["LLMs", "Prompt Engineering"],
      description:
        "Researched integrating LLMs into Stitchfix's stylist workflow, significantly improving efficiency and the quality of stylist recommendations.",
      link: {
        label: "Learn more about Stitchfix",
        href: "https://www.stitchfix.com",
      },
    },
    {
      title: "Computer Vision @ Stitchfix",
      techStack: ["Computer Vision", "Dataset Creation"],
      description:
        "Led a computer vision research, classification, embeddings, object detection to improve embedding coldstarts.",
      link: {
        label: "Explore Stitchfix's Technology",
        href: "https://www.stitchfix.com/technology",
      },
    },

    {
      title: "Multimodal Embeddings @ Stitchfix",
      techStack: ["pytorch", "representation learning", "search"],
      description:
        "Developed a product similarity search system using multi-modal embeddings (Image, Text, Ratings), leading to an increase in annual revenue by over $50 million.",
      link: {
        label: "Stylist Shuffle",
        href: "https://www.stitchfix.com/women/blog/inside-stitchfix/how-style-shuffle-works/",
      },
    },

    {
      title: "Recommendation Framework @ Stitchfix",
      techStack: ["devops", "python", "orchestration", "observability"],
      description:
        "Designed and implemented Flight, a recommendation framework that improved system reliability and scalability, handling over 350 million requests daily.",
      link: {
        label: "Learn more about Flight at Stitchfix",
        href: "https://www.jxnl.co/writing/flight-at-stitchfix",
      },
    },
    {
      title: "Consulting @ Naro",
      techStack: ["python", "prompt engineering", "sales"],
      description: "Copilot for B2B Sales Teams",
      link: {
        label: "narohq.com",
        href: "http://narohq.com",
      },
    },
    {
      title: "Consulting @ Trunk Tools",
      techStack: [
        "AI Construction Technology",
        "Project Management",
        "Construction Efficiency",
      ],
      description:
        "Trunk Tools addresses the skilled labor shortage in construction, enhancing workforce productivity through AI-based project management tools like TrunkPerform and TrunkText.",
      link: {
        label: "trunktools.com",
        href: "https://trunktools.com/",
      },
    },
    {
      title: "Writer @ Modal",
      techStack: ["technical writing", "python"],
      description:
        "Modal specializes in cloud functions, offering a platform for running generative AI models, large-scale batch jobs, and more. It enables easy code execution on hundreds of GPUs, streamlining the process for data teams.",
      link: {
        label: "modal.com",
        href: "https://modal.com/",
      },
    },
    {
      title: "Writer @ Pydantic",
      techStack: ["technical writing", "python"],
      description:
        "Pydantic provides data validation and settings management using Python type annotations, enforcing type hints at runtime with user-friendly error handling.",
      link: {
        label: "pydantic.dev",
        href: "http://pydantic.dev",
      },
    },
    {
      title: "Writer @ Wandb",
      techStack: [
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
      title: "Consultant @ Kay.ai",
      techStack: ["retrival", "evals", "infrastucture", "python"],
      description:
        "Retrieve relevant context from the semantic web for your LLM apps with fully hosted embeddings.Kay.ai leverages  for advanced data analysis and machine learning services, turning complex data into actionable insights.",
      link: {
        label: "Kay.ai",
        href: "http://Kay.ai",
      },
    },
    {
      title: "New.Computer",
      techStack: ["personal computing", "python"],
      description:
        "Dot by New Computer is an intelligent guide designed to help you remember, organize, and navigate your life.New.Computer focuses on innovative computing solutions, providing advanced technology services and infrastructure work for technological progress.",
      link: {
        label: "new.computer",
        href: "http://new.computer",
      },
    },
  ],
} as const;
