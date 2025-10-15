import { Router } from 'express';
import { listProjects, createProject } from '../controllers/projectsController.js';

const router = Router();

router.get('/', listProjects);
// Optional: simple admin create endpoint (protect later if you wish)
router.post('/', createProject);

export default router;
