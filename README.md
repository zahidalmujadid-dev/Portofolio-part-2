# Minimal Portfolio Website

A lightweight, modern portfolio — **no frameworks, no build step**. Just open `index.html` in a browser and it works.

## Files

| File              | What it does                                    | Do you edit it?              |
| ----------------- | ----------------------------------------------- | ---------------------------- |
| `index.html`      | Page structure (skeleton)                       | Rarely — only the `<title>`  |
| `css/style.css`   | Colors, fonts, spacing, responsive layout       | Only to restyle              |
| `js/data.js`      | **All your content** (name, projects, skills…)  | ✅ **Yes — edit this file**  |
| `js/main.js`      | Fills the page using the data above             | No                           |

## How to edit your content

1. Open **`js/data.js`** in any text editor (VS Code, Notepad…).
2. Change the values inside the quotes, e.g. `name: "Your Name"` → `name: "Fiy"`.
3. Save the file and refresh the browser tab.

Everything updates automatically: navbar, hero, about, projects, skills, contact, footer.

### Add a project

Copy an existing block and change the values (mind the commas):

```js
{
  title: "My New App",
  description: "What it does...",
  tags: ["HTML", "CSS"],
  link: "https://github.com/yourname/my-new-app",
},
```

### Change the look

Open `css/style.css` and edit the variables at the very top (lines starting with `--`):

```css
--accent: #4f46e5;      /* brand color */
--bg:     #fafafa;      /* page background */
```

## Running locally

Double-click `index.html` — no server needed.

To deploy free: drag the folder into [Netlify Drop](https://app.netlify.com/drop) or push it to GitHub and enable GitHub Pages.
