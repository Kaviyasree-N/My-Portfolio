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
 * 2. Update line 89 below: `avatarImage: "/src/assets/images/my_photo.jpg"`
 * 
 * 📄 HOW TO UPDATE YOUR RESUME:
 * 1. Upload your resume PDF to Google Drive or place it in `/public/resume.pdf`
 * 2. Update line 93 below: `resumeUrl: "https://drive.google.com/..."` or `"/resume.pdf"`
 * ============================================================================
 */

export interface ProjectTechGroup {
  group: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  shortDescription: string;
  problemStatement: string;
  solution: string;
  myContribution: string;
  technologies: string[];
  techGroups?: ProjectTechGroup[];
  status: 'Completed' | 'Ongoing Prototype' | 'Hackathon Build';
  contextTag: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
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
  type: 'Open Source' | 'Community' | 'Internship';
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
}

export interface CompetitionItem {
  title: string;
  eventOrContext: string;
  institution?: string;
  recognition: string;
  award?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade: string;
  period?: string;
  location: string;
  recognition?: string;
  details?: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  metricLabel: string;
  metricValue: string;
  description: string;
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
      { label: "Current CGPA", value: "8.60 / 10" },
      { label: "Status", value: "Available for Internships & Collaborations" }
    ]
  },

  // Education Background
  education: [
    {
      institution: "Chennai Institute of Technology",
      degree: "B.E. Computer Science and Engineering",
      grade: "CGPA: 8.60 / 10",
      period: "2025 – 2029",
      location: "Chennai, Tamil Nadu",
      details: [
        "Core coursework in Data Structures, Object-Oriented Programming (C++, Java), and Database Systems."
      ]
    },
    {
      institution: "Chennai Girls Higher Secondary School",
      degree: "Higher Secondary (Class XII) & Secondary (SSLC)",
      grade: "Class XII: 94.8% · SSLC: 90.4%",
      location: "Chennai, Tamil Nadu",
      recognition: "School Topper — Class XII, 2025",
      details: [
        "Recognized as School Topper in Class XII in 2025.",
        "Consistent academic excellence in Mathematics and Science foundations."
      ]
    }
  ] as EducationItem[],

  // 2. Technical Skills
  skillCategories: [
    {
      title: "Programming Languages",
      description: "Core languages used for problem solving, algorithmic foundations, and academic coursework.",
      skills: [
        { name: "C++", level: "Foundational", note: "Foundational knowledge · Data structures & problem solving" },
        { name: "Java", level: "Foundational", note: "Foundational knowledge · Object-oriented programming & collections" },
        { name: "Python", level: "Introductory Exposure", note: "Introductory exposure · Scripting, data preprocessing & logic" }
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
        { name: "Node.js", level: "Project-Based", note: "Runtime & lightweight services" }
      ]
    },
    {
      title: "Tools & Workflow",
      description: "Version control systems, development environments, and collaborative design tools.",
      skills: [
        { name: "Git", level: "Foundational", note: "Branching, staging & version history" },
        { name: "GitHub", level: "Foundational", note: "Pull requests, code reviews & collaboration" },
        { name: "VS Code", level: "Foundational", note: "Primary IDE & debugging" },
        { name: "Figma", level: "Foundational", note: "Wireframing & UI layout prototyping" },
        { name: "Jira", level: "Introductory Exposure", note: "Basic task tracking & workflow familiarity" }
      ]
    },
    {
      title: "AI & Data Concepts",
      description: "Analytical techniques and machine learning classification fundamentals.",
      skills: [
        { name: "Machine Learning Fundamentals", level: "Introductory Exposure", note: "Logistic Regression, Naive Bayes, supervised classification" },
        { name: "Data Handling Fundamentals", level: "Introductory Exposure", note: "Pandas, NumPy, Matplotlib & data preparation" },
        { name: "AI-Assisted Development Tools", level: "Project-Based", note: "Prompting, rapid prototyping & documentation" }
      ]
    }
  ] as SkillCategory[],

  // 3. Projects (ReFlow Access completely removed)
  projects: [
    {
      id: "phishguard",
      title: "PhishGuard — Real-Time Phishing URL and Spam Email Detection System",
      shortTitle: "PhishGuard",
      category: "Academic Project-Based Learning — Machine Learning",
      status: "Completed",
      contextTag: "Academic Project-Based Learning (ML)",
      featured: true,
      shortDescription:
        "A machine learning-based system designed to detect potentially malicious phishing URLs and spam emails. Developed as part of an academic Project-Based Learning (PBL) course in Machine Learning, applying classification models to identify suspicious URLs and email content.",
      problemStatement:
        "Online users and organizations face ongoing cybersecurity risks from deceptive phishing URLs and fraudulent spam emails that evade static rule-based filters.",
      solution:
        "PhishGuard applies machine learning techniques to classify suspicious URLs and email content. The system uses Logistic Regression and Naive Bayes, along with Python-based data preprocessing and feature preparation, to support phishing URL and spam email detection.",
      myContribution:
        "Developed data preprocessing and feature preparation pipelines in Python using Pandas and NumPy, implemented and evaluated Logistic Regression and Naive Bayes classifiers with Scikit-learn, and designed user interface views using Google AI Studio.",
      technologies: [
        "Python",
        "Machine Learning",
        "Logistic Regression",
        "Naive Bayes",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Google AI Studio"
      ],
      githubUrl: "https://github.com/Kaviyasree-N",
      demoUrl: undefined
    },
    {
      id: "haulai",
      title: "HaulAI — Your AI Freight & Transport Coordinator",
      shortTitle: "HaulAI",
      category: "Hackathon Project — CALL-E",
      status: "Hackathon Build",
      contextTag: "CALL-E Hackathon Project",
      featured: true,
      shortDescription:
        "An AI-powered freight coordination platform that uses AI voice agents to call transporters, negotiate rates, compare quotes, and recommend the best transport option within budget, with human approval required before booking.",
      problemStatement:
        "Freight and logistics coordination frequently involves manual phone calls, fragmented transporter communication channels, and time-consuming quote reconciliation across multiple operators.",
      solution:
        "Explores how voice AI can simplify freight coordination and transport booking workflows by deploying AI voice agents to communicate with transporters, compile quote comparisons into a structured dashboard, and recommend optimal options while strictly enforcing human approval before booking.",
      myContribution:
        "Developed frontend interface components using React, TypeScript, and Tailwind CSS, integrated responsive quote comparison tables, and assisted in configuring client-side state with LocalStorage and Node.js/Express service endpoints.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "CALL-E Voice AI",
        "Google Gemini",
        "LocalStorage"
      ],
      githubUrl: "https://github.com/Kaviyasree-N",
      demoUrl: undefined
    },
    {
      id: "citevent",
      title: "CITEVENT: College Event Management System",
      shortTitle: "CITEVENT",
      category: "Internship Project — Product Development",
      status: "Ongoing Prototype",
      contextTag: "CITBIF Internship Project",
      featured: true,
      shortDescription:
        "A full-stack web application designed to manage college events, participant registrations, approvals, payments, and administrative operations through a centralized dashboard. Developed as part of an internship at CIT Business Incubation Forum (CITBIF).",
      problemStatement:
        "Managing college events involves disparate administrative workflows, manual approval chains, disconnected participant lists, and uncoordinated budgeting records across departments.",
      solution:
        "Engineered an institutional event management system to streamline the complete lifecycle of campus events: departmental proposal submissions, administrative approval hierarchies, student registration tracking, and participant management.",
      myContribution:
        "Contributed as part of an intern cohort at CIT Business Incubation Forum (CITBIF) developing responsive interface screens in React, connecting endpoints to a Django backend, and querying relational PostgreSQL schemas for event participant records.",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "REST APIs",
        "Git Collaboration"
      ],
      githubUrl: "https://github.com/Kaviyasree-N",
      demoUrl: undefined
    },
    {
      id: "internship-recommendation-system",
      title: "Internship Recommendation System",
      shortTitle: "Internship Recommendation System",
      category: "Academic Project-Based Learning — Java",
      status: "Completed",
      contextTag: "Academic Project-Based Learning (Java)",
      featured: true,
      shortDescription:
        "A Java-based desktop application that helps students discover suitable internship opportunities based on their academic qualifications, skills, interests, preferred locations, and stipend expectations using a rule-based matching score.",
      problemStatement:
        "Students seeking internship opportunities often struggle to filter through scattered listings to find positions matching their exact academic criteria, skillsets, preferred locations, and compensation preferences.",
      solution:
        "Built using Java Swing, Object-Oriented Programming, the Java Collections Framework, and file-based storage, the application combines personalized internship recommendations with manual search, filtering, and sorting. The system uses a rule-based recommendation approach to evaluate candidate preferences and display a matching score for internship opportunities.",
      myContribution:
        "Designed the Object-Oriented architecture, implemented Java Swing GUI with background concurrency using SwingWorker and Threads, built custom exception handling and validation, and developed Comparator-based multi-criteria sorting with Java File I/O persistence.",
      technologies: [
        "Java",
        "Java Swing",
        "Object-Oriented Programming",
        "Collections (ArrayList, HashMap, HashSet)",
        "Comparator / List.sort()",
        "Java File I/O",
        "Threads & SwingWorker",
        "Input Validation & Exceptions",
        "Git & GitHub"
      ],
      techGroups: [
        { group: "Language", items: ["Java"] },
        { group: "GUI", items: ["Java Swing"] },
        { group: "Programming Principles", items: ["Object-Oriented Programming"] },
        { group: "Collections", items: ["ArrayList", "HashMap", "HashSet"] },
        { group: "Sorting", items: ["Comparator", "List.sort()"] },
        { group: "Storage", items: ["Java File I/O"] },
        { group: "Concurrency", items: ["Threads", "SwingWorker", "Event Dispatch Thread"] },
        { group: "Reliability", items: ["Input validation", "Exception handling", "Custom exceptions"] },
        { group: "Version Control", items: ["Git", "GitHub"] }
      ],
      githubUrl: "https://github.com/Kaviyasree-N",
      demoUrl: undefined
    }
  ] as ProjectItem[],

  // 4. Experience & Community (Order: 1. GirlScript GSSoC 2026, 2. GSX Chennai Chapter 2026 onwards)
  experiences: [
    {
      role: "Open Source Contributor",
      organization: "GirlScript Summer of Code (GSSoC 2026)",
      location: "Remote / Open Source",
      period: "2026",
      type: "Open Source",
      collaborationNotice: "Participated in open-source repositories following maintainer guidelines and code reviews.",
      bulletPoints: [
        "Contributed to open-source software repositories by identifying issues, improving documentation, and submitting code enhancements.",
        "Successfully achieved 2 merged pull requests adhering to repository maintainer guidelines, code linting standards, and commit conventions.",
        "Gained practical experience navigating unfamiliar codebases and addressing feedback from maintainers."
      ],
      tags: ["Open Source", "Git Collaboration", "Pull Requests", "Code Review"]
    },
    {
      role: "Core Team Member",
      organization: "GSX Chennai Chapter",
      location: "Chennai, India",
      period: "2026 onwards",
      type: "Community",
      collaborationNotice: "Collaborative student-driven technical community initiative.",
      bulletPoints: [
        "Active member of student-driven technical community dedicated to peer-to-peer knowledge sharing and practical coding.",
        "Assisted in coordinating technical workshops, coding sessions, and peer learning circles for junior engineering students.",
        "Engaged in technical discussions on emerging developer tools, open-source practices, and project building."
      ],
      tags: ["Student Community", "Peer Mentorship", "Technical Coordination", "Teamwork"]
    }
  ] as ExperienceItem[],

  // 5. Achievements Page: Section A (Certifications) & Section B (Competitions & Recognition)
  certifications: [
    {
      title: "OCI Foundations Associate",
      issuer: "Oracle",
      period: "Completed",
      badgeText: "Oracle Certified",
      description: "Demonstrated fundamental understanding of Oracle Cloud Infrastructure (OCI) architecture, core cloud concepts, security, and governance."
    },
    {
      title: "OCI AI Foundations Associate",
      issuer: "Oracle",
      period: "Completed",
      badgeText: "Oracle Certified",
      description: "Foundational understanding of Artificial Intelligence, Machine Learning workloads, deep learning principles, and modern AI architectures in Oracle Cloud."
    },
    {
      title: "Diploma in Computer Applications (DCA)",
      issuer: "CSC — Computer Software College",
      period: "Completed",
      badgeText: "Diploma",
      description: "Completed a Diploma in Computer Applications covering Microsoft Office applications, C programming, and C++ programming, gaining practical knowledge of office productivity tools and programming fundamentals."
    },
    {
      title: "English Typewriting — Distinction",
      issuer: "Department of Technical Education / State Board",
      period: "Completed",
      badgeText: "Distinction",
      description: "Obtained Distinction in English Typewriting."
    },
    {
      title: "NPTEL Internet of Things",
      issuer: "NPTEL & IIT Kharagpur",
      period: "Elite + Silver",
      badgeText: "Elite + Silver",
      description: "Comprehensive certification covering IoT sensor architectures, networking protocols, edge computing paradigms, and device data ingestion."
    },
    {
      title: "Python Essentials 1",
      issuer: "Python Institute & Cisco Networking Academy",
      period: "Completed",
      badgeText: "Accredited",
      description: "Validated fundamentals of Python syntax, logic, data structures, conditional execution, and structured procedural programming."
    },
    {
      title: "Python Essentials 2",
      issuer: "Python Institute & Cisco Networking Academy",
      period: "Completed",
      badgeText: "Accredited",
      description: "Validated advanced Python concepts covering Object-Oriented Programming, custom modules, packages, exceptions, and file processing."
    }
  ] as CertificationItem[],

  competitions: [
    {
      title: "First Prize — Data Detox",
      eventOrContext: "TEXUS",
      institution: "SRM Institute of Science and Technology, Ramapuram",
      recognition: "First Prize in Data Detox, a technical competition held as part of the TEXUS event.",
      award: "Cash prize and certificate."
    },
    {
      title: "ReFlow Hackathon — Pre-Finale Selection",
      eventOrContext: "ReFlow Hackathon",
      institution: "IIT Bhubaneswar",
      recognition: "Shortlisted for the pre-finale round of the ReFlow Hackathon organized by IIT Bhubaneswar."
    },
    {
      title: "School Topper — Class XII, 2025",
      eventOrContext: "Academic Excellence",
      institution: "Chennai Girls Higher Secondary School",
      recognition: "Recognized as School Topper in Class XII in 2025 with an aggregate score of 94.8%."
    }
  ] as CompetitionItem[],

  // 6. Coding Profiles & Practice (Featured on Connect & Contact Page)
  codingPractice: [
    {
      platform: "LeetCode",
      username: "Kaviyasree2007",
      profileUrl: "https://leetcode.com/u/Kaviyasree2007/",
      metricLabel: "Practice",
      metricValue: "350+ Problems",
      description: "Practiced programming and Data Structures and Algorithms concepts, including arrays, strings, hash maps, sorting, searching, and related fundamentals.",
      isConfigured: true
    },
    {
      platform: "CodeChef",
      username: "kaviyasreen",
      profileUrl: "https://www.codechef.com/users/kaviyasreen",
      metricLabel: "Practice",
      metricValue: "300+ Problems",
      description: "Practiced programming fundamentals and basic problem-solving concepts through coding problems.",
      isConfigured: true
    }
  ] as CodingProfile[],

  socialProfiles: [
    {
      platform: "LinkedIn",
      username: "kaviya-sree-n-a6293b380",
      label: "Professional Network",
      profileUrl: "https://www.linkedin.com/in/kaviya-sree-n-a6293b380/"
    },
    {
      platform: "GitHub",
      username: "Kaviyasree-N",
      label: "Code Repositories",
      profileUrl: "https://github.com/Kaviyasree-N"
    },
    {
      platform: "Email",
      username: "kaviyasreen251207@gmail.com",
      label: "Direct Email",
      profileUrl: "mailto:kaviyasreen251207@gmail.com"
    }
  ]
};
