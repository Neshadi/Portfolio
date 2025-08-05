import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with cart, payments, and admin dashboard',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/ecommerce.png',
      category: 'web',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracker',
      description: 'Mobile app for workout tracking with progress analytics',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: '/images/fitness-app.png',
      category: 'mobile',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with dark/light mode',
      tags: ['React', 'Framer Motion', 'SCSS'],
      image: '/images/portfolio.jpg',
      category: 'web',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Productivity app with drag-n-drop interface',
      tags: ['Flutter', 'Dart', 'SQLite'],
      image: '/images/task-manager.jpg',
      category: 'mobile',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization',
      tags: ['React', 'Chart.js', 'API'],
      image: '/images/weather-app.jpg',
      category: 'web',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'Discover recipes based on ingredients',
      tags: ['Vue.js', 'Firebase', 'Spoonacular API'],
      image: '/images/recipe-app.jpg',
      category: 'web',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-heading">My Projects</h2>
          <p className="projects-subheading">Explore my recent work and creations</p>
        </motion.div>
        
        <motion.div 
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['all', 'web', 'mobile'].map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              {...project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

