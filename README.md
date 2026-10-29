# Kaviya Sree N — Multi-Page Personal Portfolio Website

A modern, minimal, professional developer portfolio for **Kaviya Sree N**, Computer Science Engineering Student at **Chennai Institute of Technology** (Class of 2029).

Built as a genuine **Multi-Page Application (MPA)** using **React Router**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons** with responsive layouts, accessible navigation, and deep-dive project case studies.

---

## 🗺️ Multi-Page Architecture & Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Concise hero, factual highlights, and dedicated **Education** section (CIT & Chennai Girls HSS) |
| `/about` | **About Me** | Dedicated academic background at Chennai Institute of Technology, focus areas, coursework, and learning philosophy |
| `/skills` | **Skills & Technologies** | Vertically stacked sections for Programming (C++, Java, Python), Web Dev, Backend & DB, Tools, and AI/Data |
| `/projects` | **Projects** | 4 verified projects: PhishGuard, HaulAI, CITEVENT, and Internship Recommendation System |
| `/projects/:id` | **Project Case Study** | Dedicated deep-dive page for individual projects with grouped tech stacks |
| `/experience` | **Experience & Community** | 1. GirlScript Summer of Code (GSSoC 2026) <br/> 2. GSX Chennai Chapter (2026 onwards) |
| `/achievements` | **Achievements & Certifications** | Exactly 2 sections: **Certifications** (OCI, DCA, Typewriting, NPTEL, Cisco Python) & **Competitions & Recognition** |
| `/contact` | **Connect & Contact** | 3 sections: Connect with Me (LinkedIn, GitHub, Email), Coding Profiles & Practice (LeetCode, CodeChef), and Send a Message |

---

## 🛠️ Central Configuration: `src/config/portfolioData.ts`

All personal data, links, descriptions, and credentials reside in **`src/config/portfolioData.ts`**.

### 📸 Profile Photo:
Update `profile.avatarImage` (line 89) in `src/config/portfolioData.ts` to point to your photograph.

### 📄 Resume PDF:
Update `profile.resumeUrl` (line 93) in `src/config/portfolioData.ts` with your public Google Drive URL or local PDF file.
