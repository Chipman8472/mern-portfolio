# MERN Portfolio (Monorepo)

A minimal, clean portfolio using **MongoDB + Express + React (Vite) + Node**.

## Local quick start
```bash
# terminal 1
cd server
cp .env.example .env    # add your MongoDB Atlas URI
npm install
npm run dev             # http://localhost:5174

# terminal 2
cd client
npm install
npm run dev             # http://localhost:5173
```
The frontend proxies `/api/*` to the server in dev.

## Deploy (free-friendly)
- **Frontend (client)**: Vercel or Netlify → set build command `npm run build`, output `dist`.
- **Backend (server)**: Render (Free web service) → set `MONGODB_URI`, `PORT`, `ORIGIN` (your client URL).

### Render setup (server)
1. New → Web Service → Connect your repo (server directory).
2. Build command: `npm install`
3. Start command: `node index.js`
4. Env vars: `MONGODB_URI`, `PORT=10000`, `ORIGIN=https://your-frontend.vercel.app`

### Vercel setup (client)
1. New Project → import `client` folder.
2. Build: `npm run build` • Output dir: `dist`.
3. Add env vars if needed; set API base to your Render URL in production (see below).

## Configure API base in production (optional)
In `client/vite.config.js`, you can switch fetches to use an absolute base via an env var.
In code, use:
```js
const API = import.meta.env.VITE_API_BASE || '';
fetch(`${API}/api/projects`)
```

## Seeding demo projects
```bash
cd server
npm run seed
```

## What’s included
- Projects listing from MongoDB (`/api/projects`).
- Contact form storing messages in MongoDB (`/api/contact`).
- Tailwind UI, responsive sections, simple components.
- Clean structure to expand with auth, dashboards, blogs, etc.
