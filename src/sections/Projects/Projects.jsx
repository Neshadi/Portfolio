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
      title: 'Mobile Price Classification',
      description: 'In today competitive smartphone market, leveraged Machine Learning to classify mobile phones into price ranges (Low, Medium, High, Very High) based on key technical features like battery power, RAM, and processor speed.',
      tags: ['ML','Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib','SVM','Random Forest'],
      image: `${import.meta.env.BASE_URL}images/phone.jpeg`,
      category: 'AI/ML',
      githubLink: 'https://github.com/Neshadi/Mobile-Price-Classification',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Speech Emotion Recognition (Emo-DB)',
      description: 'Real-time emotion recognition from speech using deep learning techniques.',
      tags: ['AI', 'ANN', 'CNN', 'TensorFlow', 'Keras', 'Python'],
      image: `${import.meta.env.BASE_URL}images/emotion.png`,
      category: 'AI/ML',
      githubLink: 'https://github.com/Neshadi/Speech-Emotion-Recognition',
      liveLink: '#'
    },
    {
      id: 6,
      title: 'Federated-Learning-Based-Rainfall-Prediction-System',
      description: 'Compare three approaches to rainfall prediction using SVR models: training local models for each weather station, training a single centralized model on combined data, and a simulated federated learning approach using prediction averaging.',
      tags: ['AI', 'Federated Learning', 'SVM', 'Python'],
      image: `${import.meta.env.BASE_URL}images/rainfall.png`,
      category: 'AI/ML',
      githubLink: 'https://github.com/Neshadi/Federated-Learning-Based-Rainfall-Prediction-System',
      liveLink: '#'
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      tags: ['React', 'JavaScript', 'CSS','EmailJS'],
      image: `${import.meta.env.BASE_URL}images/portfolio.png`,
      category: 'web',
      githubLink: 'https://github.com/Neshadi/Portfolio',
      liveLink: 'https://Neshadi.github.io/Portfolio'
    },
     {
      id: 8,
      title: 'General Knowledge Quiz Website with PDF Score Reporting',
      description: 'Interactive quiz web application using Next.js, enabling users to answer multiple-choice questions and download a detailed report of their quiz results as a PDF.',
      tags: ['Next.js', 'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'jsPDF', 'Tailwind CSS'],
      image: `${import.meta.env.BASE_URL}images/quiz.png`,
      category: 'full-stack',
      githubLink: 'https://github.com/Neshadi/GeneralKnowledgeQuiz',
      liveLink: '#'
    },
      {
      id: 9,
      title: 'Patient Management System',
      description: 'A robust patient registration system built using WPF and SQLite database integration.',
      tags: ['WPF', 'SQLite', 'C#','Entity Framework (EF) Core'],
      image: `${import.meta.env.BASE_URL}images/patient.jpg`,
      category: 'desktop',
      githubLink: 'https://github.com/Neshadi/Patient_Registration_System',
      liveLink: '#'
    },
      {
      id: 10,
      title: 'Personal Finance Tracker',
      description: 'A dynamic Personal Finance Tracker web application that allows users to manage their finances effectively by tracking income, expenses, reports, and budgets.',
      tags: ['Html', 'CSS', 'JS'],
      image: `${import.meta.env.BASE_URL}images/finance.jpg`,
      category: 'GUI',
      githubLink: 'https://github.com/Neshadi/Personal_Financial_Tracker',
      liveLink: '#'
    },
      {
      id: 11,
      title: 'Farm Details Responsive Web Application',
      description: 'A responsive web application for managing farm details built with wordpress.',
      tags: ['WordPress'],
      image: `${import.meta.env.BASE_URL}images/farm.jpg`,
      category: 'web',
      githubLink: '#',
      liveLink: '#'
    },
     {
      id: 12,
      title: 'Restaurant Web Application',
      description: 'Delicious details of a restaurant-themed web app using Atlantic theme',
      tags: ['Angular', 'Html', 'CSS', 'TS','Atlantic Theme'],
      image: `${import.meta.env.BASE_URL}images/restaurant.jpg`,
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
          {['all',  'web','mobile', 'full-stack', 'DevOps',  'GUI','desktop','AI/ML' ].map((filter) => (
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

