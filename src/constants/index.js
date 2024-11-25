import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering with hands-on experience in front-end development, React.js, Tailwind, and data structures and algorithms. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. Passionate about coding, I continually learn new technologies to stay updated with the latest industry trends. My strong problem-solving skills and attention to detail equip me to tackle complex technical challenges and contribute effectively to any team.`;

export const ABOUT_TEXT = `I am a dedicated student and open-source contributor with a passion for creating efficient and user-friendly applications. I have honed my skills across a variety of technologies, including React, Python, C++, and Tailwind. My journey began with a deep curiosity for how things work, evolving into a career where I continuously strive to learn and adapt to new challenges.
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Beyond coding, I stay active, explore new technologies, and contribute to open-source projects, always looking for opportunities to learn and share knowledge within the community..`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "LFX Mentee",
    company: "Anuket TSC Support (LFX Networking)",
    description: `Help the Anuket TSC in various tasks. In the area of release management: collect and summarize project specific input from the community, help to plan the next release. In the area of general TSC tasks: collect health metrics of the Anuket sub-projects and present them to the TSC.`,
    technologies: [
      "CI/CD",
      "Github Actions",
      "Wiki",
      "Project Mangement",
      "Git",
    ],
  },

  {
    year: "2023 - Present",
    role: "Campus Ambassador",
    company: "Coding Blocks",
    description: `Promoted Coding Blocks programs and resources within the university. Designed marketing campaigns to attract new students. Networked with students and faculty to build partnerships. Utilized promotional skills to enhance brand awareness and engagement on campus.`,
    technologies: ["Networking Skills", "Promotional Skills"],
  },
  {
    year: "2023 - Present",
    role: "Student Learn Ambassador",
    company: "Microsoft",
    description: `Advocated for Microsoft Learn resources, organizing and leading educational events and workshops. Worked on community projects and collaborated with cross-functional teams to deliver high-quality service. Managed projects using GitHub and contributed to community outreach.`,
    technologies: [
      "Technical Skills",
      "Organising Events",
      "Community work",
      "Github",
    ],
  },
  {
    year: "2023 - Present",
    role: "Postman Student Expert",
    company: "Postman",
    description: `Learned about the API, how to use Postman, API Testing, and Practical Applications. Gain an understanding of their importance in software development, and how they facilitate
 communication between di erent systems.`,
    technologies: ["API", "API Testing", "Postman"],
  },
];

export const PROJECTS = [
  {
    title: "Breast Cancer Classification",
    image: project1,
    description:
      "Breast Cancer Classi cation is a project that helps us identify the type of tumour by using binary numbers 0 or 1. It returns 'benign' if 0 and 'malignant' if it is 1. This will enhance early detection and diagnostic accuracy, improving patient outcomes and healthcare  efficency",
    technologies: [
      "Python",
      "Numpy",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
      "Github",
    ],
  },
  {
    title: "React Portfolio",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [
      "JavaScript",
      "React",
      "Tailwind",
      "Framer-Motion",
      "Github",
    ],
  },

  {
    title: "CNCF Glossary",
    image: project4,
    description:
      " The Cloud Native Glossary is a project led by the CNCF that aims to explain cloud-native concepts in simple language.Contributed to the CNCF Glossary Hindi Repository Documentation to simplify the concepts of cloud Kubernetes and various services",
    technologies: ["Github", "Documentation", "Git"],
  },
];

export const CONTACT = {
  address: "INDIA",
  // phoneNo: "+91-8708554573 ",
  email: "aryansingla0200@gmail.com",
};
