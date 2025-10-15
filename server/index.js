import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import projectsRouter from './routes/projects.js';
import contactRouter from './routes/contact.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.ORIGIN?.split(',') || ['http://localhost:5173'], credentials: false }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

const PORT = process.env.PORT || 5174;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`API listening on :${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

start();
