### Repo overview (big picture)

- This is a small React single-page app scaffolded with Create React App. The app's entry point is `src/index.js` -> `src/App.js` which wires client-side routes via `react-router-dom` to components in `src/` (notably `MainDisplay`, `Create`, `BlogDetails`, `EditBlog`, `LoginForm`, `SignupForm`, `PersonalResume`).
- Data flow: a custom hook `src/useFetch.js` calls a backend API at `http://localhost:3000` to fetch `blogs` and a `/api/message`. Components read returned JSON and render lists or individual post views. `Create` uses a plain HTML form that posts to `http://localhost:3000/blogs`.
- Auth & persistence: Firebase is initialized in `src/firebase/firebase.js` (exports `auth` and `db`). Authentication is used directly in `src/LoginForm.js`, `src/SignupForm.js`, `src/Navbar.js` (signOut), and there's a small `src/delete.js` utility showing `onAuthStateChanged` usage.

### What AI agents should know first

- Run/dev scripts: package.json provides standard CRA scripts. To run the app locally the developer uses `npm start` (runs `react-scripts start`). Tests use `npm test` and build is `npm build`.
- Backend assumptions: components and `useFetch` expect a backend with endpoints like `/blogs` and `/api/message`. During local development the project uses the Create React App dev-server proxy defined in `package.json` (the repo now contains `"proxy": "http://localhost:3000/"`). Use relative paths (for example `/blogs`, `/api/message`) in code so the dev proxy forwards requests. Production builds must use an absolute URL (use REACT_APP_API_URL env var if needed).
- Firebase config: `src/firebase/firebase.js` contains a real-looking firebaseConfig object and exports `auth` and `db`. The code assumes Firebase Auth is used for sign-in / sign-up flows and `signOut(auth)` is used in `Navbar`.

### File-level conventions and patterns (examples)

- Routing: `src/App.js` defines client routes using `react-router-dom` v6-style `<Routes>` and `element` props (example: `<Route path="/" element={<MainDisplay/>}/>`) — follow this routing style.
- Data fetching hook: `src/useFetch.js` returns { data, message, isLoading, error } and logs unusual status codes (throws on non-OK responses). Use it for components that need blog lists; it fetches both `/api/message` and the provided `url`.
- Forms: `src/Create.js` uses a native HTML form with `action="/blogs" method="POST"` (relative path so CRA proxy forwards it in dev). Other forms (signup/login) are handled in React using Firebase auth functions (`createUserWithEmailAndPassword`, `signInWithEmailAndPassword`) and navigate back to `/` on success.
- Firebase usage: import `{ auth } from './firebase/firebase'` and call the Firebase modular functions with `auth` (e.g., `signInWithEmailAndPassword(auth, email, password)`). Use `onAuthStateChanged(auth, cb)` for subscription to auth state.

### Integration points & external dependencies

- External services: Local backend at `http://localhost:3000` (not included) and Firebase (project configured in `src/firebase/firebase.js`). Don't modify the firebase config unless instructed — assume it is intentional.
- NPM dependencies: see `package.json` — key libs: `react`, `react-dom`, `react-router-dom`, `firebase`, `react-scripts`.

### Debugging and testing notes

- Dev server: use `npm start`. The dev proxy in `package.json` forwards relative-path requests to the backend. If any fetches fail, confirm the proxied backend is reachable at the proxy URL or adapt `src/useFetch.js` for mock data.
- Console logs: repository uses console.log liberally (e.g., login/signup, useFetch). When adding debug output, follow the project's existing informal style (console.log, alert for user-facing messages).

### When making edits (rules for the agent)

- Preserve existing behavior: Do not change Firebase export names (`auth`, `db`) unless you add a clear migration path and update all imports. When changing backend host, prefer switching callers to relative URLs and updating `package.json` `proxy` or use a `REACT_APP_API_URL` env var approach and update this doc.
- Keep routing and component signatures stable: components are rendered via `<Route element={...}/>`; don't change props-based rendering without updating `App.js`.
- Avoid creating server-side code: the repo expects a separate backend. Only modify frontend files under `src/` unless the user asks to wire an API emulator or mock responses.

### Quick examples (copyable snippets from the codebase)

Using the fetch hook (as in `src/MainDisplay.js`):

  // Use relative path so CRA dev proxy in package.json forwards the request
  const { data, message, isLoading, error } = useFetch('/blogs')

- Firebase sign-in (as in `src/LoginForm.js`):

  import { signInWithEmailAndPassword } from 'firebase/auth'
  signInWithEmailAndPassword(auth, email, password)

### Where to look first (entry points for common tasks)

- To understand routing and high-level flows: `src/App.js` and `src/index.js`.
- To inspect data fetching and error handling: `src/useFetch.js` and `src/MainDisplay.js`.
- To review auth flows: `src/firebase/firebase.js`, `src/LoginForm.js`, `src/SignupForm.js`, `src/Navbar.js`.
- To update or add blog-related UI: `src/Create.js`, `src/BlogDetails.js`, `src/EditBlog.js`.

### Final notes

- Keep suggestions specific and minimal: prefer changing a single component or hook per PR and ensure `npm start` still works. If you add network/code changes that affect runtime (e.g., switching fetch host), include clear migration steps and update this guidance.

If anything here looks incomplete or you want more detail about the backend shape, tell me which endpoints or behaviors you want documented and I'll update this file.
