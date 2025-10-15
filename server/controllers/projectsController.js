import Project from '../models/Project.js';

export const listProjects = async (_req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const createProject = async (req, res) => {
  try {
    const p = await Project.create(req.body);
    res.status(201).json(p);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
