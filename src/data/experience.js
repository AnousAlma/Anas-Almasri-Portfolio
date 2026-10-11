import { SiMongodb } from 'react-icons/si';

// Newest first. An entry shows `logo` (image URL), else `icon`, else the company's initial.
export const experiences = [
  {
    icon: SiMongodb,
    iconColor: "#47a248",
    company: "MongoDB",
    position: "Software Engineering Intern, Docs Platform",
    duration: "Jun 2026 - Aug 2026",
    // TODO: add location
    achievements: [
      "Owned an LLM-based translation service end to end, replacing a legacy per-word vendor. It processed 60,000+ MDX files at a 10–50x cost reduction.",
      "Chunked pages along structural boundaries, with safety checks to keep the MDX intact.",
      "Built an LLM-as-a-judge evaluation suite and set up observability with Braintrust."
    ]
  },
  {
    logo: "https://avatars.githubusercontent.com/u/91031689?s=280&v=4",
    company: "Toronto Intelligent Systems Lab (TISL)",
    position: "Student Researcher",
    duration: "Jun 2025 - Present",
    location: "Toronto, ON",
    achievements: [
      "Ran ablation studies isolating base-policy failure modes, which informed the verifier design.",
      "Adapted Diffusion Policy training code to custom simulation data.",
      "Wrote a custom PyTorch DataLoader that halved preprocessing time across 10+ datasets.",
      "Collected real-robot demonstration and evaluation data on the ALOHA bimanual rig via teleoperation."
    ],
    // Scrolls to the section with this id
    sectionLink: { label: "See the paper in Research", to: "research" }
  },
  {
    // TODO: fill in the role, dates and bullets, and add a logo and location
    company: "Amicare",
    position: "TODO: role",
    duration: "TODO: dates",
    achievements: [
      "TODO: add bullets"
    ]
  },
  {
    logo: "https://i.ibb.co/8Ljrw6jf/logo512.png",
    company: "Bitarco",
    position: "Software Developer Intern",
    duration: "Apr 2025 - Sep 2025",
    location: "Mississauga, ON",
    achievements: [
      "Built and deployed a commerce platform used by 100+ businesses and customers, supporting $6.6M in annual transaction volume.",
      "Built account creation, product browsing and ordering, and shipment tracking with React, REST APIs and Python.",
      "Built admin dashboards for staff to manage orders, products, users and employees.",
      "Integrated the QuickBooks API for billing and automated shipment documents and order confirmations, cutting manual processing time by 70%."
    ]
  },
  // {
  //   logo: "https://i.ibb.co/2nyFjpp/Al-Bassem-Org.jpg",
  //   company: "Al Bassem Org",
  //   position: "Software Developer Intern",
  //   duration: "Nov 2023 - Apr 2024",
  //   location: "Oakville, ON",
  //   achievements: [
  //     "Designed and implemented a comprehensive inventory management system using JavaScript, React Native, AWS, and MongoDB ensuring accurate alignment of items with their real-life locations.",
  //     "Developed a dynamic React-based mobile application, enabling seamless user account creation, using Firebase, and efficient item sign-in/out through QR code scanning."
  //   ]
  // },
  {
    logo: "https://i.ibb.co/QQwYyKL/stack-hacks-logo.jpg",
    company: "Stack Hacks",
    position: "Co-Founder",
    duration: "Feb 2024",
    location: "Remote",
    achievements: [
      "Spearheaded the design, implementation and deployment of the Hackathon's website.",
      "Managed social media and digital advertising resulting in over 40 sign-ups.",
      "Facilitated event logistics and operations including reaching out and communicating with guest speakers."
    ]
  },
  {
    logo: "https://i.ibb.co/HPjh6MT/intellibots-academy-logo.jpg",
    company: "IntelliBots Academy",
    position: "Volunteer",
    duration: "Jul 2022 - Aug 2022",
    location: "Mississauga, ON",
    achievements: [
      "Guided 10+ students in implementing code for the robot, fostering their understanding of robotic principles.",
      "Cultivated a vibrant learning environment by encouraging learning from mistakes, and ability to problem solve."
    ]
  }
];
