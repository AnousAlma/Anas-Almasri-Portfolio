import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export const site = {
  name: 'Anas Almasri',
  initials: 'AA',
  // Also used as the description in public/index.html, which can't import this file
  positioning:
    'CS + Math student at the University of Toronto researching robot learning and building ML systems.',
  // Phrases of the positioning line that the hero highlights
  positioningHighlights: ['University of Toronto', 'robot learning'],
  email: 'anask.almasri@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anas-almasri-45491b298/',
  github: 'https://github.com/anousalma',
  // TODO: add a resume URL; a resume link appears next to the social links once this is set
  resumeUrl: null,
  location: 'Toronto, ON, Canada',
  photo: 'https://i.ibb.co/f0D0KJd/nice-anas-photo.jpg',
};

export const mailto = `mailto:${site.email}`;

// Shared by the hero and the contact section; each maps `id` to its own colors
export const socialLinks = [
  { id: 'github', label: 'GitHub', icon: FaGithub, href: site.github },
  { id: 'linkedin', label: 'LinkedIn', icon: FaLinkedin, href: site.linkedin },
  { id: 'email', label: 'Email', icon: FaEnvelope, href: mailto },
  { id: 'resume', label: 'Resume', icon: FaFileAlt, href: site.resumeUrl },
].filter((link) => link.href);
