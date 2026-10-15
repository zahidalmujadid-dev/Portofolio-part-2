/* ============================================================
   PORTFOLIO — js/data.js
   ------------------------------------------------------------
   ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT.
   ------------------------------------------------------------
   All the text on your website lives in this one object.
   Change a value → save → refresh the page → done.

   Quick reference:
   - Text uses   "double quotes"
   - Lists use   [ "a", "b", "c" ]   (separate items with commas)
   - To disable a project, delete its whole { ... } block,
     including the comma after it.
============================================================ */

const SITE_DATA = {
  /* ── 1. BASIC INFO ─────────────────────────────────────── */
  name: "Your Name",                 // shows in navbar, hero, footer
  role: "Front-End Developer",       // shown under your name in the hero
  greeting: "Hello, I'm",            // small line above your name

  /* ── 2. HERO BUTTONS ───────────────────────────────────── */
  // "label" = button text, "link" = where it goes, "type" = style
  // type can be: "primary" (filled) or "ghost" (outlined)
  heroActions: [
    { label: "View Projects", link: "#projects", type: "primary" },
    { label: "Contact Me",    link: "#contact",  type: "ghost" },
  ],

  /* ── 3. ABOUT SECTION ──────────────────────────────────── */
  about: "I'm a developer who loves building clean, fast, and simple " +
         "interfaces. I turn ideas into working websites — from the first " +
         "sketch to the final line of code. When I'm not coding, you'll " +
         "find me exploring new tech and contributing to open source.",

  // Quick facts shown as small cards (add / remove lines freely)
  facts: [
    { label: "Location",    value: "Your City, Country" },
    { label: "Experience",  value: "2+ years" },
    { label: "Email",       value: "you@example.com" },
    { label: "Freelance",   value: "Available" },
  ],

  /* ── 4. PROJECTS ───────────────────────────────────────── */
  // To ADD a project: copy one { ... } block, paste it below the
  // last one (mind the commas!) and fill it in.
  projects: [
    {
      title: "Project One",
      description: "A short description of what this project does and " +
                   "the problem it solves. Keep it to 1–2 sentences.",
      tags: ["HTML", "CSS", "JavaScript"],   // tech used
      link: "https://github.com/yourusername",  // project URL (or "#")
    },
    {
      title: "Project Two",
      description: "Another short description. Explain the goal, your " +
                   "role, and one highlight of the result.",
      tags: ["React", "Tailwind"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "A third project description. Show variety — " +
                   "different tech, different problem.",
      tags: ["Python", "Flask", "SQLite"],
      link: "#",
    },
  ],

  /* ── 5. SKILLS ─────────────────────────────────────────── */
  // Simple list of skills shown as chips. Add or remove freely.
  skills: [
    "HTML", "CSS", "JavaScript", "React", "Git & GitHub",
    "Figma", "Responsive Design", "Node.js", "Python",
  ],

  /* ── 6. CONTACT & SOCIAL ───────────────────────────────── */
  contactLead: "Have a project in mind? Let's talk.",   // line above button
  email: "you@example.com",                             // your real email

  // Social links shown as pill buttons
  socials: [
    { label: "GitHub",   link: "https://github.com/yourusername" },
    { label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
    { label: "Twitter",  link: "https://twitter.com/yourusername" },
  ],
};

/* ────────────────────────────────────────────────────────────
   Nothing to edit below this line — main.js reads this object
   and builds the page for you.
============================================================ */
