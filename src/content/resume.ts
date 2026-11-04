// Single source of truth for the resume page (see the resume-site capability).

export interface Contact {
  name: string;
  location: string;
  nationality: string;
  linkedin: string;
}

export interface Project {
  name: string;
  url?: string;
  technologies?: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  title?: string;
  url?: string;
  startYear: number;
  startMonth?: number;
  endYear: number | null;
  summary: string;
  highlights?: string[];
  projects: Project[];
}

export interface Education {
  institution: string;
  location?: string;
  credential: string;
  startYear?: number;
  endYear: number;
}

export interface Reference {
  name: string;
  role: string;
  note?: string;
}

export interface Resume {
  contact: Contact;
  careerObjective: string;
  profile: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  references: Reference[];
}

export const resume: Resume = {
  contact: {
    name: "Jace Jahraus",
    location: "Sunshine Coast, Queensland, Australia",
    nationality: "Canadian",
    linkedin: "https://www.linkedin.com/in/jace-jahraus-019347145",
  },

  careerObjective:
    "Full-time hybrid role on the Sunshine Coast, or a remote role with a Brisbane-based team.",

  profile:
    "I have a passion and eagerness for learning new skills and techniques. I possess time management skills " +
    "and a strong work ethic, and I work effectively under pressure. Problem solving and strategic planning " +
    "assist me in working well with teams as well as individually.",

  skills: [
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "PHP",
    "Eloquent ORM",
    "Doctrine ORM",
    "SQL",
    "AI-assisted development",
    "Jira",
    "GitHub",
    "Confluence",
    "Agile",
    "Bootstrap",
    "Scrum",
    "Teamwork",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "SEO",
    "C#",
    "Java",
  ],

  experience: [
    {
      company: "Flowlogic",
      title: "Developer",
      startYear: 2025,
      startMonth: 9,
      endYear: null,
      summary:
        "Full-stack developer in a fast-paced team working in two-week sprints, across a React/TypeScript " +
        "frontend and a PHP backend.",
      highlights: [
        "Build frontend features in React and TypeScript.",
        "Develop PHP backend features, learning the Eloquent and Doctrine ORMs on the job.",
        "AI-assisted development: directing AI coding tools and reviewing the code they generate for correctness and quality.",
        "Work in two-week Agile sprints using Jira, GitHub and Confluence.",
      ],
      projects: [],
    },
    {
      company: "Registry Connection",
      title: "Junior Developer",
      url: "https://registryconnection.ca/",
      startYear: 2020,
      endYear: 2022,
      summary:
        "Main roads in Alberta are all privately owned. Registry Connection builds the software that connects " +
        "the private owners to the government for all road tests in Alberta.",
      projects: [
        {
          name: "Registry Connection home page",
          url: "https://registryconnection.ca/",
          technologies: ["WordPress", "Elementor"],
          highlights: ["Personally built Registry Connection's home page in WordPress using Elementor."],
        },
        {
          name: "Learners-Practice-Test",
          url: "https://www.learners-practice-test.ca/",
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "SQL"],
          highlights: [
            "Mobile first.",
            "Personally wrote all code, with daily meetings to discuss direction.",
            "Built login and payments; the test is SQL heavy, saving each answer so users can leave and come back.",
            "Saved all tests so users can see a graph of their progress.",
            "Debugged and tested the website.",
            "SEO.",
          ],
        },
        {
          name: "Registry Connection Dashboard",
          technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "PHP", "SQL"],
          highlights: [
            "Personally wrote all code, with daily meetings to discuss direction.",
            "Company control panel for all of Registry Connection, including internal affairs.",
            "Login and IP restriction to the website.",
            "View, edit and delete all Learners-Practice-Test questions and answers, plus users' answers, scores and payment histories.",
            "Edit and delete all Learners-Practice-Test articles on the website.",
            "Full lists of Registry Connection's affiliates, driving schools and examiners, with add, edit and delete.",
          ],
        },
        {
          name: "Didsbury Registries",
          url: "https://www.didsburyregistries.ca/",
          technologies: ["WordPress", "Elementor"],
          highlights: [
            "Personally built the website, with daily meetings to discuss pages and close communication with the customer.",
          ],
        },
        {
          name: "Vanda Agencies",
          url: "https://www.vandaagencies.ca/",
          technologies: ["WordPress", "Elementor"],
          highlights: [
            "Personally built the website, with daily meetings to discuss pages and close communication with the customer.",
          ],
        },
      ],
    },
  ],

  education: [
    {
      institution: "CDI College",
      location: "Calgary, Alberta",
      credential: "Diploma in Web and Applications Development",
      startYear: 2018,
      endYear: 2022,
    },
    {
      institution: "SAIT Polytechnic",
      location: "Calgary, Alberta",
      credential: "Certificate in Graphic Design Fast Track – Adobe",
      endYear: 2017,
    },
  ],

  references: [
    {
      name: "Dale Sarver",
      role: "Registry Connection, Owner",
      note: "Reference letter available",
    },
    {
      name: "Tim Wan",
      role: "Registry Connection, Owner",
    },
  ],
};
