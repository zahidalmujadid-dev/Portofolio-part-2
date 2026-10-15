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
  name: "Zahid G. Koentjoro", // shows in navbar, hero, footer
  role: "Front-End Developer", // shown under your name in the hero
  greeting: "Hello, I'm", // small line above your name

  /* ── 2. HERO BUTTONS ───────────────────────────────────── */
  // "label" = button text, "link" = where it goes, "type" = style
  // type can be: "primary" (filled) or "ghost" (outlined)
  heroActions: [
    { label: "View Projects", link: "#projects", type: "primary" },
    { label: "Contact Me", link: "#contact", type: "ghost" },
  ],

  /* ── 3. ABOUT SECTION ──────────────────────────────────── */
  about:
    "I'm an Infromatics Student at Jendral Soedirman University ",

  // Quick facts shown as small cards (add / remove lines freely)
  facts: [
    { label: "Location", value: "Kota Pekalongan, Indonesia" },
    { label: "Experience", value: "0+ years" },
    { label: "Email", value: "zahidalmujadid@gmail.com" },
    { label: "Freelance", value: "Available" },
  ],

  /* ── 4. PROJECTS ───────────────────────────────────────── */
  // To ADD a project: copy one { ... } block, paste it below the
  // last one (mind the commas!) and fill it in.
  projects: [
    {
      title: "Project One",
      description:
        "Create a portofolio website with VibeCode",
      tags: ["HTML", "CSS", "JavaScript"], // tech used
      link: "https://github.com/zahidalmujadid-dev/Portofolio-part-2", // project URL (or "#")
    },
    {
      title: "Project Two",
      description:
        //"Another short description. Explain the goal, your " +
        //"role, and one highlight of the result.",
        "-",
      tags: ["-", "-"],
      link: "#",
    },
    {
      title: "Project Three",
      description:
        //"A third project description. Show variety — " +
        //"different tech, different problem.",
        "-",
      tags: ["-", "-", "-"],
      link: "#",
    },
  ],

  /* ── 5. SKILLS ─────────────────────────────────────────── */
  // Simple list of skills shown as chips. Add or remove freely.
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
    "Figma",
    "Responsive Design",
    "Node.js",
    "Python",
  ],

  /* ── 6. CONTACT & SOCIAL ───────────────────────────────── */
  contactLead: "Have a project in mind? Let's talk.", // line above button
  email: "zahidalmujadid@gmail.com", // your real email

  // Social links shown as pill buttons
  socials: [
    { label: "GitHub", link: "https://github.com/zahidalmujadid-dev" },
    { label: "LinkedIn", link: "https://linkedin.com/in/zahid-al-mujaddid-giat-koentjoro" },
    { label: "Instagram", link: "https://instagram.com/macan_koeripan" },
  ],
};

/* ────────────────────────────────────────────────────────────
   Nothing to edit below this line — main.js reads this object
   and builds the page for you.
============================================================ */
