/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ============================================================================
 * PORTFOLIO CONFIGURATION - KAVIYA SREE N
 * ============================================================================
 * 
 * 📸 HOW TO CHANGE YOUR PROFILE PHOTO:
 * 1. Place your new photo in: `/src/assets/images/my_photo.jpg`
 * 2. Update line 79 below: `avatarImage: "/src/assets/images/my_photo.jpg"`
 * 
 * 📄 HOW TO UPDATE YOUR RESUME:
 * 1. Upload your resume PDF to Google Drive or place it in `/public/resume.pdf`
 * 2. Update line 83 below: `resumeUrl: "https://drive.google.com/..."` or `"/resume.pdf"`
 * ============================================================================
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problemStatement: string;
  solution: string;
  myContribution: string;
  technologies: string[];
  status: 'Concept / Research' | 'Ongoing Prototype' | 'Completed' | 'Hackathon Build';
  contextTag: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Foundational' | 'Introductory Exposure' | 'Project-Based';
    note?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Community' | 'Open Source';
  collaborationNotice?: string;
  bulletPoints: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  badgeText?: string;
  description: string;
  credentialUrl?: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  metricLabel: string;
  metricValue: string;
  isConfigured: boolean;
}

export const PORTFOLIO_DATA = {
  // 1. Personal Profile
  profile: {
    fullName: "Kaviya Sree N",
    role: "Computer Science Engineering Student | Aspiring Software Developer",
    shortRole: "CSE Student & Aspiring Developer",
    institution: "Chennai Institute of Technology",
    graduationYear: "2029",
    location: "Chennai, Tamil Nadu, India",
    email: "kaviyasreen251207@gmail.com",
    
    // 📸 PHOTO SETTING: Replace with your photo path whenever ready
    avatarImage: "/src/assets/images/avatar_student_developer_1793251843982.jpg",
    avatarAlt: "Portrait photo of Kaviya Sree N, CSE Student",
    
    // 📄 RESUME SETTING: Set to your public link (e.g. Google Drive) or "/resume.pdf"
    resumeUrl: "#resume-modal",
    resumeFileName: "Kaviya_Sree_N_Resume.pdf",
    
    heroHeading: "Building practical solutions through code.",
    introduction:
      "I am a Computer Science Engineering student interested in software development, problem-solving, and building practical technology solutions. I enjoy exploring new technologies, collaborating with teams, and turning ideas into useful applications. I am continuously strengthening my fundamentals through projects, coding practice, and hands-on learning.",
    
    aboutSummary: [
      "Currently pursuing my B.E. in Computer Science and Engineering at Chennai Institute of Technology (Graduating in 2029).",
      "Focused on building practical, dependable software applications while strengthening core algorithmic and software engineering principles.",
      "Learning actively through hands-on project implementations, structured coding practice, and open collaboration in tech communities and hackathons.",
      "Exploring web technologies, backend workflows, databases, and applied machine learning fundamentals to solve real everyday challenges."
    ],

    highlights: [
      { label: "Institution", value: "Chennai Institute of Technology" },
      { label: "Class Of", value: "2029 (Undergraduate)" },
      { label: "Primary Focus", value: "Full-Stack Development & Problem Solving" },
      { label: "Status", value: "Available for Internships & Collaborations" }
    ]
  },

  // 2. Technical Skills
  skillCategories: [
    {
      title: "Programming Languages",
      description: "Core languages used for problem solving, algorithmic foundations, and academic coursework.",
      skills: [
        { name: "C++", level: "Foundational", note: "Data structures & problem solving" },
        { name: "Python", level: "Foundational", note: "Scripting, logic & data processing" }
      ]
    },
    {
      title: "Web Development",
      description: "Frontend building blocks and modern user interface libraries.",
      skills: [
        { name: "HTML5", level: "Foundational", note: "Semantic structure & accessibility" },
        { name: "CSS3", level: "Foundational", note: "Responsive styling & layouts" },
        { name: "JavaScript", level: "Foundational", note: "Modern ES6+ syntax & DOM" },
        { name: "React", level: "Introductory Exposure", note: "Component hierarchy & state hooks" }
      ]
    },
    {
      title: "Backend & Databases",
      description: "Server-side architectures, API communication, and relational databases.",
      skills: [
        { name: "Django", level: "Introductory Exposure", note: "Models, views & ORM workflows" },
        { name: "PostgreSQL", level: "Introductory Exposure", note: "Relational queries & table schemas" },
        { name: "Node.js", level: "Project-Based", note: "Lightweight runtime & Express services" }
      ]
    },
    {
      title: "Tools & Workflow",
      description: "Version control systems, development environments, and collaborative design tools.",
      skills: [
        { name: "Git", level: "Foundational", note: "Branching, staging & version history" },
        { name: "GitHub", level: "Foundational", note: "Pull requests, issues & code reviews" },
        { name: "VS Code", level: "Foundational", note: "Primary IDE & debugging" },
        { name: "Figma", level: "Foundational", note: "Wireframing & UI layout prototyping" },
        { name: "Jira", level: "Introductory Exposure", note: "Basic sprint tracking & task workflows" }
      ]
    },
    {
      title: "AI & Data Concepts",
      description: "Analytical techniques and modern developer productivity tooling.",
      skills: [
        { name: "Machine Learning Fundamentals", level: "Introductory Exposure", note: "Supervised concepts & preprocessing" },
        { name: "AI-Assisted Development Tools", level: "Project-Based", note: "Prompting, rapid prototyping & documentation" },
        { name: "Data Handling Fundamentals", level: "Introductory Exposure", note: "Tabular data, cleaning & structured evaluation" }
      ]
    }
  ] as SkillCategory[],

  // 3. Featured Projects
  projects: [
    {
      id: "reflow-access",
      title: "ReFlow Access",
      category: "Data-Driven Menstrual Health Systems",
      status: "Concept / Research",
      contextTag: "Public Health Technology Concept",
      featured: true,
      shortDescription:
        "A concept for improving menstrual-product accessibility through stock monitoring, availability information, and shortage-prevention insights.",
      problemStatement:
        "Unpredictable stockouts in institutional and community restrooms create sudden emergencies and hygiene challenges. Users lack real-time visibility into availability, while administrators lack proactive restocking data.",
      solution:
        "Proposed a connected monitoring concept that gathers dispenser stock indicators and surfaces a transparent availability interface. The system notifies facility teams before supplies deplete, mitigating regional inventory gaps.",
      myContribution:
        "Conceived the project architecture, defined user workflows for both beneficiaries and administrators, mapped data schemas for inventory tracking, and designed initial UI wireframes.",
      technologies: ["Web Development", "Data Analytics Concepts", "IoT System Architecture", "Figma UI Prototyping"],
      githubUrl: "https://github.com/Kaviyasree-N/reflow-access",
      demoUrl: undefined
    },
    {
      id: "haulai",
      title: "HaulAI",
      category: "AI-Powered Freight Coordination",
      status: "Hackathon Build",
      contextTag: "Hackathon Project",
      featured: true,
      shortDescription:
        "An AI-assisted freight coordination platform concept exploring transporter communication, quote comparison, and route cost estimation.",
      problemStatement:
        "Small shippers and freight operators struggle with scattered communication channels, manual quote reconciliation across multiple truckers, and opaque pricing variances.",
      solution:
        "Developed a prototype coordination portal that processes rate inquiries, formats quote comparisons into a structured dashboard, and assists dispatchers in evaluating shipping options efficiently.",
      myContribution:
        "Contributed to frontend interface components in React and Tailwind CSS, integrated responsive quote comparison tables, and assisted with backend service endpoints for data formatting.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "AI Integration Concepts"],
      githubUrl: "https://github.com/Kaviyasree-N/haulai",
      demoUrl: undefined
    },
    {
      id: "citevent-erp",
      title: "CITEVENT ERP",
      category: "Event and Workflow Management",
      status: "Ongoing Prototype",
      contextTag: "Product Development Internship Project",
      featured: true,
      shortDescription:
        "A college event-management system concept covering event creation, multi-tier approval workflows, registrations, and participant records.",
      problemStatement:
        "College event organization involves manual paper approvals, dispersed participant lists, uncoordinated budgeting reviews, and delayed hall reservations.",
      solution:
        "Constructed an internal event management prototype streamlining the lifecycle of campus events: departmental proposal submission, administrative approval tracking, and student sign-ups.",
      myContribution:
        "Worked as part of an intern cohort implementing UI screens in React, connecting endpoints to a Django backend, and querying relational PostgreSQL schemas for event participant records.",
      technologies: ["React", "Django", "PostgreSQL", "REST APIs", "Git Collaboration"],
      githubUrl: "https://github.com/Kaviyasree-N/citevent-erp",
      demoUrl: undefined
    },
    {
      id: "ml-predictive-system",
      title: "Machine Learning Exploration Project",
      category: "Applied Machine Learning & Data Modeling",
      status: "Completed",
      contextTag: "Academic & Practical Exploration",
      featured: false,
      isPlaceholder: true,
      shortDescription:
        "Structured predictive analysis and data modeling exploration using supervised learning techniques.",
      problemStatement:
        "Examining structured tabular data to detect trends, classify patterns, and evaluate predictive accuracy.",
      solution:
        "Implemented data preprocessing pipelines, feature encoding, exploratory data visualization, and trained comparative benchmark models to assess validation accuracy.",
      myContribution:
        "Performed data hygiene checks, split evaluation datasets, trained baseline models, and documented findings and error metrics.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
      githubUrl: "https://github.com/Kaviyasree-N/machine-learning-study",
      demoUrl: undefined
    }
  ] as ProjectItem[],

  // 4. Experience & Community
  experiences: [
    {
      role: "Product Development Intern",
      organization: "CITBIF Internship Program",
      location: "Chennai Institute of Technology",
      period: "2026",
      type: "Internship",
      collaborationNotice: "Collaborative internship program involving peer engineering teams and mentor reviews.",
      bulletPoints: [
        "Participated in hands-on product research and user requirement analysis for internal institutional software prototypes.",
        "Collaborated on UI/UX wireframes, design audits, and component structure in Figma before frontend implementation.",
        "Contributed to frontend views and connected interactive forms with backend services and database models.",
        "Exercised version control best practices through structured Git branching, pull request reviews, and agile team stand-ups.",
        "Authored technical documentation outlining module workflows and API request/response structures."
      ],
      tags: ["Requirements Analysis", "UI Prototyping", "Full-Stack Exposure", "Git & Agile", "Documentation"]
    },
    {
      role: "Core Team Member",
      organization: "GSX Chennai Chapter",
      location: "Chennai, India",
      period: "2025 – Present",
      type: "Community",
      bulletPoints: [
        "Active member of student-driven technical community dedicated to peer-to-peer knowledge sharing and practical coding.",
        "Assisted in coordinating technical workshops, coding sessions, and peer learning circles for junior engineering students.",
        "Engaged in technical discussions on emerging developer tools, open-source practices, and project building."
      ],
      tags: ["Student Community", "Peer Mentorship", "Technical Coordination", "Teamwork"]
    },
    {
      role: "Open Source Contributor",
      organization: "GirlScript Summer of Code (GSSoC 2026)",
      location: "Remote / Open Source",
      period: "2026",
      type: "Open Source",
      bulletPoints: [
        "Contributed to open-source software repositories by identifying issues, improving documentation, and submitting code enhancements.",
        "Successfully achieved 2 merged pull requests adhering to repository maintainer guidelines, code linting standards, and commit conventions.",
        "Gained practical experience navigating unfamiliar large codebases and addressing feedback from maintainers."
      ],
      tags: ["Open Source", "Git Collaboration", "Pull Requests", "Code Review"]
    }
  ] as ExperienceItem[],

  // 5. Achievements & Certifications
  achievements: [
    {
      title: "Oracle AI Foundations Associate",
      issuer: "Oracle",
      period: "Completed",
      badgeText: "Certified",
      description:
        "Foundational understanding of Artificial Intelligence, Machine Learning concepts, deep learning principles, and modern AI architectures.",
      credentialUrl: "https://catalog-education.oracle.com/"
    },
    {
      title: "NPTEL Internet of Things",
      issuer: "NPTEL & IIT Kharagpur",
      period: "Elite + Silver",
      badgeText: "Elite + Silver",
      description:
        "Certification covering IoT sensor architectures, networking protocols, edge computing paradigms, and device data ingestion.",
      credentialUrl: "https://nptel.ac.in/"
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Python Institute & Cisco Networking Academy",
      period: "Completed",
      badgeText: "Accredited",
      description:
        "Fundamentals of Python syntax, object-oriented programming, data structures, modules, exceptions, and file processing.",
      credentialUrl: "https://pythoninstitute.org/"
    },
    {
      title: "GirlScript Summer of Code 2026",
      issuer: "GirlScript Foundation",
      period: "Summer 2026",
      badgeText: "2 Merged PRs",
      description:
        "Open-source contributor with 2 successfully merged pull requests in community repositories, participating in structured code reviews.",
      credentialUrl: "https://gssoc.girlscript.tech/"
    }
  ] as CertificationItem[],

  // 6. Coding Profiles
  codingProfiles: [
    {
      platform: "GitHub",
      username: "Kaviyasree-N",
      profileUrl: "https://github.com/Kaviyasree-N",
      metricLabel: "Repositories & Open Source",
      metricValue: "Active Repositories",
      isConfigured: true
    },
    {
      platform: "LeetCode",
      username: "Kaviyasree2007",
      profileUrl: "https://leetcode.com/u/Kaviyasree2007/",
      metricLabel: "Problem Solving Practice",
      metricValue: "DSA & Problem Solving",
      isConfigured: true
    },
    {
      platform: "LinkedIn",
      username: "kaviya-sree-n-a6293b380",
      profileUrl: "https://www.linkedin.com/in/kaviya-sree-n-a6293b380/",
      metricLabel: "Professional Network",
      metricValue: "Chennai, India",
      isConfigured: true
    }
  ] as CodingProfile[]
};
