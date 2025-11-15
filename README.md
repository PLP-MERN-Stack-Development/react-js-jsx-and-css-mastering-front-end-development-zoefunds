```markdown
# Vite + React + Tailwind App (Week 3 assignment)

This project is a starter implementation for the Week 3 assignment: a responsive React app using JSX and Tailwind CSS, with component architecture, state management, hooks, and API integration.

What I built
- Vite + React scaffold
- Tailwind CSS configured (dark mode via class)
- Reusable components: Button, Card, Navbar, Footer, Layout
- Routing with react-router-dom (Home, Tasks)
- TaskManager with add/delete/toggle/filter, persisted via useLocalStorage hook
- Theme context (light/dark) using useContext and Tailwind dark mode
- API integration fetching posts from JSONPlaceholder with search, pagination, loading and error states

Quick start
1. Install dependencies:
   npm install

2. Start dev server:
   npm run dev

3. Open http://localhost:5173 (Vite default) in your browser.

Environment
- Node.js v18+ recommended
- No env variables are strictly required for local run

Features & Files
- src/components: UI components (Button, Card, Navbar, Footer, Layout)
- src/pages: Home (API list), Tasks (TaskManager), NotFound
- src/hooks/useLocalStorage.js: custom hook to persist state
- src/context/ThemeContext.jsx: theme management (light/dark)
- src/services/api.js: simple JSONPlaceholder wrapper

Notes & Next steps
- The app uses localStorage for tasks; replace with backend persistence as needed.
- Add form validation and accessibility improvements.
- Add automated tests (Jest + React Testing Library) and deploy to Vercel/Netlify.

Screenshots
(Please add screenshots in the repo under /screenshots and reference them here.)

```