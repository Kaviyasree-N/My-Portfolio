# Kaviya Sree N — Multi-Page Personal Portfolio Website

A modern, minimal, professional developer portfolio for **Kaviya Sree N**, Computer Science Engineering Student at **Chennai Institute of Technology** (Class of 2029).

Built as a genuine **Multi-Page Application (MPA)** using **React Router**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons** with responsive layouts, accessible navigation, and deep-dive case studies.

---

## 🗺️ Multi-Page Architecture & Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Concise hero, factual highlights, featured projects teaser, core skills preview, experience snapshot, and CTA |
| `/about` | **About Me** | Dedicated academic background at Chennai Institute of Technology, focus areas, coursework, and learning philosophy |
| `/skills` | **Skills & Technologies** | Structured categorization, proficiency indicators (Foundational vs. Introductory), and interactive filter tabs |
| `/projects` | **Projects** | Complete project grid with problem statements, solutions, personal contributions, tech tags, and filters |
| `/projects/:id` | **Project Case Study** | Dedicated deep-dive page for individual projects (e.g. `/projects/reflow-access`, `/projects/haulai`) |
| `/experience` | **Experience & Community** | Structured timeline detailing CITBIF internship, GSX Chennai Chapter, and GSSoC 2026 open-source work |
| `/achievements` | **Achievements & Certifications** | Verified certifications (Oracle, NPTEL, Cisco), coding profiles (GitHub, LeetCode, CodeChef, LinkedIn) |
| `/contact` | **Contact** | Direct email, copy-to-clipboard, social links, and genuine validated contact form with email client dispatch |

---

## 🛠️ Central Configuration: `src/config/portfolioData.ts`

All personal data, links, descriptions, and credentials reside in **`src/config/portfolioData.ts`**. You do not need to edit JSX or CSS when updating your details!

### 📋 Items Awaiting Your Future Input / Verification:

1. **Resume File**:
   - `profile.resumeUrl`: Point to your public PDF link (e.g. Google Drive link or file in `/public/`).
2. **Project 4 (Machine Learning Exploration)**:
   - `projects[3].title`: Update with your exact project title.
   - `projects[3].shortDescription` & `problemStatement`: Update with the actual problem and dataset examined.
   - `projects[3].githubUrl`: Add your verified GitHub repository URL when public.
3. **Coding Profile Statistics & Handles**:
   - `codingProfiles`: Update with your exact LeetCode and CodeChef problem counts and profile URLs.
4. **Custom Photograph**:
   - The profile picture defaults to `/src/assets/images/avatar_student_developer_1793251843982.jpg`. You can drop your personal photograph into `/src/assets/images/` and change `profile.avatarImage` in `src/config/portfolioData.ts`.

---

## 🚀 Development & Build

```bash
# Run locally on http://localhost:3000
npm run dev

# Typecheck and lint
npm run lint

# Build for production (output to dist/)
npm run build
```
