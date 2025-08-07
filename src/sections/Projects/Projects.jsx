import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Gym Management System',
      description: 'Secure Signup and Login functionalities leveraging JWT-based authentication, ensuring data confidentiality and controlled access using React, Spring Boot, and MySQL.',
      tags: ['React.js', 'SpringBoot', 'MySQL','Java', 'JWT', 'Material UI'],
      image: `${import.meta.env.BASE_URL}images/gym.jpeg`,
      category: 'full-stack',
      githubLink: 'https://github.com/Neshadi/GymManagementSystemBackend',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Virtual Interior Design Platform',
      description: 'Full-stack e-commerce platform with 3D visualization and augmented reality furniture previews.User authentication, product catalog, AR ”try-before-you-buy” experience, and order management',
      tags: ['React.js', 'Express.js', 'MongoDB', 'Unity', 'ARKit','.NET'],
      image: `${import.meta.env.BASE_URL}images/ecommerce.png`,
      category: 'full-stack',
      githubLink: 'https://github.com/Neshadi/Funiture_site-1',
      liveLink: 'https://www.decorit.store/'
    },
    {
      id: 3,
      title: 'Vehicle Tracking System',
      description: 'Complete CI/CD pipeline for a MERN stack vehicle tracking system and deployment on AWS.',
      tags: ['Docker', 'Jenkins', 'AWS EC2,', 'MERN stack', 'Github Webhooks'],
      image: `${import.meta.env.BASE_URL}images/vehicle.jpeg`,
      category: 'DevOps',
      githubLink: 'https://github.com/Neshadi/VehicleTrackingSystem',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Productivity app with drag-n-drop interface',
      tags: ['Flutter', 'Dart', 'SQLite'],
      image: `${import.meta.env.BASE_URL}images/task-manager.png`,
      category: 'mobile',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization',
      tags: ['React', 'Chart.js', 'API'],
      image: `${import.meta.env.BASE_URL}images/weather-app.png`,
      category: 'web',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'Discover recipes based on ingredients',
      tags: ['Vue.js', 'Firebase', 'Spoonacular API'],
      image: `${import.meta.env.BASE_URL}images/recipe-app.png`,
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
          <h2 className="projects-heading">Projects</h2>
          <p className="projects-subheading">Explore my recent work and creations</p>
        </motion.div>
        
        <motion.div 
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['all',  'web','mobile', 'full-stack', 'DevOps',  'ui/Ux','desktop','AI/ML' ].map((filter) => (
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

