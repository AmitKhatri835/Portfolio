export const LINKS = {
  github: "https://github.com/AmitKhatri835",
  linkedin: "https://www.linkedin.com/in/amit-khatri-7a1306225?original_referer=",
  projects: {
    worldAtlas: { github: "https://github.com/AmitKhatri835/World-Atlas", live: "https://world-atlas-flax.vercel.app/" },
    eventBooking: { github: "https://github.com/AmitKhatri835/Event-Booking-Web", live: null },
    votingApp: { github: "https://github.com/AmitKhatri835/Voting-Web", live: null },
  },
};

export const PROFILE = {
  name: "Amit Khatri",
  role: "MERN Developer",
  school: "Lucky Institute of Professional Studies, Jodhpur",
  graduationYear: 2024,
  phone: "+91 7742052181",
  email: "khatriamit.835@gmail.com",
  tagline:
    "Building efficient, user-friendly web applications with the MERN stack.",
  objective:
    "Motivated and detail-oriented fresher with hands-on experience in the MERN stack, aiming to leverage my knowledge of full-stack development and responsive design to create efficient and user-friendly web applications.",
};

export const TECHNICAL_SKILLS = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Vercel",
  "npm",
  "Redux Toolkit",
  "Postman",
];

export const SOFT_SKILLS = [
  "Good Communication",
  "Critical Thinking",
  "Teamwork",
  "Flexibility",
  "Active Listener",
  "Time Management",
  "Problem Solving",
];

export const PROJECTS = [
  {
    id: "world-atlas",
    title: "World-Atlas",
    description:
      "A responsive country explorer built with React and Tailwind CSS, powered by Axios API integration.",
    highlights: [
      "Search countries by name with real-time character matching",
      "Filter by continent with connected search and select logic",
      "Sort countries alphabetically in ascending or descending order",
      "About page with interesting country facts generated via ChatGPT",
      "SPA navigation with React Router DOM — no page reloads",
    ],
    tech: ["React.js", "Tailwind CSS", "Axios", "React Router"],
    links: LINKS.projects.worldAtlas,
  },
  {
    id: "event-booking",
    title: "Event-Booking-Web",
    description:
      "Full-stack event booking platform enabling users to browse, book, and manage event reservations.",
    highlights: [
      "JWT authentication with bcrypt hashing and OTP email verification",
      "Role-based access control for users and admins",
      "Real-time seat availability tracking and booking cancellation",
      "Admin dashboard with search, filter, and event management",
      "RESTful APIs with Nodemailer and MongoDB MVC architecture",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    links: LINKS.projects.eventBooking,
  },
  {
    id: "voting-app",
    title: "Voting-Application",
    description:
      "Backend online voting application for secure vote casting and transparent real-time results.",
    highlights: [
      "User authentication with Admin/User role-based access control",
      "Database system managing voters, candidates, and voting records",
      "Duplicate vote prevention ensuring data consistency",
      "Result visualization with instant vote counting logic",
      "Improved accessibility over traditional voting systems",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    links: LINKS.projects.votingApp,
  },
];

export const EDUCATION = [
  {
    degree: "BCA",
    institution: "Lucky Institute of Professional Studies, Jodhpur",
    percentage: "65.80%",
    period: "2021 – 2024",
    primary: true,
  },
  {
    degree: "Senior Secondary Education",
    institution: "Govt. Sr. Secondary School, Setrawa",
    percentage: "75.00%",
    period: "2020 – 2021",
    primary: false,
  },
  {
    degree: "Secondary Education",
    institution: "Govt. Sr. Secondary School, Setrawa",
    percentage: "49.17%",
    period: "2018 – 2019",
    primary: false,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
