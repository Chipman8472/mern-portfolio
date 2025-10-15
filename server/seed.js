import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const sample = [
  {
    title: 'IoT Pet Feeder',
    description: 'Raspberry Pi + Firebase + Android app to monitor and feed pets remotely.',
    tags: ['IoT', 'Android', 'Firebase', 'Raspberry Pi'],
    repoUrl: 'https://github.com/youruser/iot-pet-feeder',
    liveUrl: '',
    imageUrl: 'https://picsum.photos/seed/pet/1200/800',
    featured: true
  },
  {
    title: 'Smart Fitness Platform',
    description: 'Full-stack fitness tracker with goals, workouts, and data viz.',
    tags: ['React', 'Node', 'MongoDB'],
    repoUrl: 'https://github.com/youruser/fitness-platform',
    liveUrl: '',
    imageUrl: 'https://picsum.photos/seed/fitness/1200/800',
    featured: false
  }
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Project.deleteMany({});
    await Project.insertMany(sample);
    console.log('Seeded projects.');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
