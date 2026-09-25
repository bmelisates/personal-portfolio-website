# Personal Portfolio Website

A personal portfolio website built with React and Tailwind CSS as part of the Workintech Sprint 12 project. It introduces Melis Ateş, presents her skills and projects, and provides contact links.

**[Live Demo](https://personal-portfolio-website-three-blue.vercel.app/)**

## Features

- Introduction, skills, profile, projects, and contact sections.
- Turkish and English content with a language switch.
- Light and dark themes with a theme toggle.
- Language and theme preferences saved in local storage and restored after a page reload.
- Shared language, theme, content, and loading state managed through React Context API.
- Portfolio content loaded from language-specific JSON files using Axios.
- Project cards with technology tags, repository links, and live demo links.
- Layouts that adapt using Tailwind CSS breakpoints.

## Technologies

- React 19 and JavaScript
- React Context API
- Tailwind CSS 4
- Axios
- React Icons
- Vite 8
- ESLint
- Vercel

## Getting Started

Install a Node.js version supported by Vite 8 and npm, then run:

```bash
git clone https://github.com/bmelisates/personal-portfolio-website.git
cd personal-portfolio-website
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Project Structure

```text
public/                 Language-specific JSON content and public assets
src/
  assets/               Images and other bundled assets
  components/           Header, Hero, Skills, Profile, Projects, Footer
  context/SiteContext.jsx
                        Shared state, preferences, and content loading
  App.jsx               Page composition
  index.css             Global styles and Tailwind configuration
```

## Content and Preferences

The selected language determines which file is loaded: `public/data-tr.json` or `public/data-en.json`. Update these files to edit the translated portfolio content. Some contact links are defined directly in the components.

`SiteContext` manages the selected language and theme. Preferences are stored under the `lang` and `theme` local-storage keys, and the theme is applied through the `dark` class on the HTML element.

## Demo API Integration

After loading the local JSON content, the application attempts to POST that content to `https://reqres.in/api/workintech` as an educational API integration. The portfolio content is displayed before that request completes, so a failure in this POST request does not prevent the loaded content from appearing. API responses and errors are logged to the browser console.

This request is separate from the email contact link; the site does not provide a contact-form backend.

## Project Background

Created for the Workintech Sprint 12 project using React and Vite. The original React + Vite template notes are preserved in [docs/assignment.md](docs/assignment.md).
