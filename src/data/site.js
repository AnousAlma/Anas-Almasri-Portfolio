import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePhoto from '../assets/profile.jpg';

export const site = {
  name: 'Anas Almasri',
  initials: 'AA',
  // Also used as the description in public/index.html, which can't import this file
  positioning:
    'CS + Math student at the University of Toronto researching robot learning and building ML systems.',
  // Phrases of the positioning line that the hero highlights
  positioningHighlights: ['University of Toronto', 'robot learning'],
  email: 'anask.almasri@gmail.com',
  linkedin: 'https://www.linkedin.com/in/AnasMasri/',
  github: 'https://github.com/anousalma',
  // Served from public/; the Resume buttons are hidden when this is null
  resumeUrl: `${process.env.PUBLIC_URL}/Anas-Almasri-Resume.pdf`,
  location: 'Toronto, ON, Canada',
  photo: profilePhoto,
};

export const mailto = `mailto:${site.email}`;

// Shared by the hero and the contact section; each maps `id` to its own colors
export const socialLinks = [
  { id: 'github', label: 'GitHub', icon: FaGithub, href: site.github },
  { id: 'linkedin', label: 'LinkedIn', icon: FaLinkedin, href: site.linkedin },
  { id: 'email', label: 'Email', icon: FaEnvelope, href: mailto },
];
