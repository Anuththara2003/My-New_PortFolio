// ============================================================
// PORTFOLIO DATA - Edit this file to update all portfolio content
// ============================================================

// --- Profile ---
export const profile = {
  name: "Sandaru Perera",
  firstName: "Sandaru",
  lastName: "Perera",
  role: "Full-Stack Developer | Mobile Developer",
  intro:
      "I build scalable web, backend, and mobile applications with clean architecture and modern technologies.",
  email: "sandaruperera108@gmail.com",
  linkedin: "https://linkedin.com/in/sandaruperera",
  github: "https://github.com/Anuththara2003/",
  whatsapp:
      "https://wa.me/94763715191?text=Hello%20Sandaru%2C%20I%20visited%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you.",
  location: "Bandaragama, Sri Lanka",
};

// --- Images ---
export const images = {
  hero: "/me.jpg",
  aboutProfile: "/my2.jpg",
  projects: {
    giftify: "/Giftify.png",
    shelflife: "/ShelfLife.jpeg",
    mediqueue: "/Medi.png",
    restaurant: "/Res.png",
  },
  achievements: {

    awards: [ "/award2.png", "/award3.png", "/award4.png","/award5.png","/award6.png"],
  },
  education: {
    ijse: "/ijse.png",
    aat: "/AAT.png",
    taxila: "/tcc.jpg",
  },
};

// --- About ---
export const about = {
  paragraphs: [
    'I\'m a <strong>Full-Stack Engineer</strong> focused on building high-performance mobile apps using React Native and scalable backend systems. I design and develop robust <strong>RESTful APIs</strong> with Java and Spring Boot, delivering smooth cross-platform applications built on clean, structured code.',
    'My development approach centers on <strong>SOLID principles, OOP, and agile methodologies</strong>, ensuring every project maintains high code quality and scalability. I\'m currently seeking internship and software development opportunities where I can contribute to impactful products.',
  ],
  highlights: [
    { label: "Full-Stack Development" },
    { label: "Mobile Applications" },
    { label: "Backend Systems" },
  ],
};

// --- Skills (Grid Layout) ---
export interface Skill {
  name: string;
  icon: string;
}

export const flatSkills: Skill[] = [
  { name: "React.js", icon: "react" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Firebase", icon: "firebase" },
  { name: "React Native", icon: "react" },
  { name: "Spring Boot", icon: "spring" },
  { name: "Git", icon: "git" },
];

// --- Legacy Skill Categories (Keep for safety) ---
export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
    ],
  },
];

// --- Projects ---
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  stack: string[];
  category: string;
  image: string;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: "giftify",
    title: "Giftify",
    subtitle: "Intelligent Gift Recommendation Platform",
    description:
        "A full-stack e-commerce platform with an interactive quiz engine that generates personalized gift suggestions based on relationships, occasions, and budgets.",
    longDescription:
        "A full-stack e-commerce platform with an interactive quiz engine that generates personalized gift suggestions based on relationships, occasions, and budgets. Includes JWT and Google OAuth 2.0 authentication and an admin dashboard for analytics and product management.",
    stack: ["MERN", "TypeScript", "JWT", "Tailwind CSS"],
    category: "Full-Stack",
    image: images.projects.giftify,
    github: "https://github.com/Anuththara2003/rad_final_project_frontend",
    demo: "#",
  },
  {
    id: "shelflife",
    title: "ShelfLife",
    subtitle: "Smart Expiry Tracker & Notification System",
    description:
        "A mobile app that helps reduce food waste by tracking expiration dates and sending automated notifications.",
    longDescription:
        "A mobile app that helps reduce food waste by tracking expiration dates and sending automated notifications. Includes Firebase Firestore real-time sync, premium minimalist UI, dark mode, and global state management.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase Auth", "Firestore"],
    category: "Mobile",
    image: images.projects.shelflife,
    github: "https://github.com/Anuththara2003/ShelfLife-Smart-Expiry-Tracker",
    demo: "#",
  },
  {
    id: "mediqueue",
    title: "MediQueue",
    subtitle: "Real-Time Hospital Queue Management System",
    description:
        "A full-stack hospital queue management solution with real-time tracking, secure management panel, and SMS notifications.",
    longDescription:
        "A full-stack hospital queue management solution with real-time tracking, secure management panel, SMS notifications, and estimated wait time prediction.",
    stack: ["Java", "Spring Boot", "MySQL", "Spring Security", "REST APIs"],
    category: "Backend",
    image: images.projects.mediqueue,
    github: "https://github.com/Anuththara2003/MediQueue",
    demo: "#",
  },
  {
    id: "restaurant",
    title: "Restaurant Management System",
    subtitle: "Desktop Business Application",
    description:
        "A desktop application built with MVC and layered architecture to manage table reservations, orders, billing, inventory, and receipt generation.",
    longDescription:
        "A desktop application built with MVC and layered architecture to manage table reservations, orders, billing, inventory, and receipt generation.",
    stack: ["Java", "JavaFX", "MySQL", "JDBC"],
    category: "Desktop",
    image: images.projects.restaurant,
    github: "https://github.com/Anuththara2003/Layered-restuarent-management-system",
    demo: "#",
  },
];

export const projectFilters = ["All", "Full-Stack", "Mobile", "Backend", "Desktop"];

// --- Education ---
export interface Education {
  title: string;
  institute: string;
  date: string;
  description: string;
  image: string;
}

export const education: Education[] = [
  {
    title: "Graduate Diploma in Software Engineering",
    institute: "IJSE – Institute of Software Engineering",
    date: "Feb 2024 – Present",
    description: "Comprehensive software engineering program covering full-stack development, databases, and software architecture.",
    image: images.education.ijse,
  },
  {
    title: "Diploma in Accounting",
    institute: "AAT Sri Lanka",
    date: "Jan 2022 – Nov 2023",
    description: "Professional accounting qualification from the Association of Accounting Technicians of Sri Lanka.",
    image: images.education.aat,
  },
  {
    title: "Secondary Education",
    institute: "Taxila Central College, Horana, Sri Lanka",
    date: "2013 – 2022",
    description: "G.C.E. Ordinary Level Examination (2019) and G.C.E. Advanced Level Examination (2022) in Accounting, Economics, and ICT.",
    image: images.education.taxila,
  },
];

// --- Achievements ---
export interface Achievement {
  title: string;
  org: string;
  description: string;
  date?: string;
  image: string | string[]; // මෙතැන string[] දැමීමෙන් Slider එකට images කිහිපයක් දිය හැක
}

export const achievements: Achievement[] = [
  {
    title: "3rd Place – Creative Software Solution Awards 2025",
    org: "Circle Edge",
    description: "Recognized for innovative software solution design and implementation at the national level.",
    date: "2025",

    image: images.achievements.awards,
  },
];