import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  repoUrl: String,
  liveUrl: String,
  imageUrl: String,
  featured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Project', ProjectSchema);
