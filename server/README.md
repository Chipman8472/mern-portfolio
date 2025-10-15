# MERN Portfolio — Server

## Quick start
```bash
cp .env.example .env
# edit .env to add your MongoDB Atlas URI
npm install
npm run dev
# API at http://localhost:5174
```

## Endpoints
- `GET /api/health` — health check
- `GET /api/projects` — list projects
- `POST /api/projects` — create a project (simple admin; add auth later)
- `POST /api/contact` — submit a contact message

## Seed data
```bash
npm run seed
```


**CORS tip:** Set `ORIGIN` to a comma-separated list for multiple frontends, e.g. `https://yourapp.vercel.app, http://localhost:5173`.
