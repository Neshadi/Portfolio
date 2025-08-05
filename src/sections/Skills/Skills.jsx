import { motion } from 'framer-motion'
import './Skills.css'

const skillsData = [
  { 
    name: 'HTML', 
    level: 95, 
    icon: '📄',
    color: '#E44D26',
    description: 'Semantic markup, accessibility, SEO optimization' 
  },
  { 
    name: 'CSS', 
    level: 90, 
    icon: '🎨',
    color: '#264DE4',
    description: 'Responsive design, animations, CSS-in-JS, preprocessors' 
  },
  { 
    name: 'JavaScript', 
    level: 85, 
    icon: '📜',
    color: '#F0DB4F',
    description: 'ES6+, functional programming, DOM manipulation' 
  },
  { 
    name: 'React', 
    level: 80, 
    icon: '⚛️',
    color: '#61DAFB',
    description: 'Hooks, Context API, performance optimization' 
  },
  { 
    name: 'Node.js', 
    level: 75, 
    icon: '🖥️',
    color: '#68A063',
    description: 'REST APIs, Express, middleware, authentication' 
  },
  { 
    name: 'Git', 
    level: 85, 
    icon: '🔀',
    color: '#F05032',
    description: 'Version control, branching strategies, CI/CD' 
  },
  { 
    name: 'UI/UX', 
    level: 80, 
    icon: '✨',
    color: '#FF4081',
    description: 'Wireframing, prototyping, user testing' 
  },
  { 
    name: 'TypeScript', 
    level: 70, 
    icon: '📝',
    color: '#3178C6',
    description: 'Type safety, interfaces, generics' 
  }
]

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { 
        duration: 1.5, 
        type: 'spring', 
        damping: 10,
        stiffness: 100
      }
    })
  }

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-heading">Technical Expertise</h2>
          <p className="skills-subheading">Technologies I've mastered and continuously refine</p>
          {/* <div className="skills-divider" /> */}
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={itemVariants}
              custom={skill.level}
              whileHover="hover"
            >
              <div className="skill-card-header">
                <motion.span 
                  className="skill-icon"
                  style={{ 
                    backgroundColor: `${skill.color}20`,
                    color: skill.color
                  }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {skill.icon}
                </motion.span>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              
              <div className="skill-bar-container">
                <motion.div 
                  className="skill-bar-background"
                  initial={{ width: '100%' }}
                />
                <motion.div 
                  className="skill-progress"
                  style={{ backgroundColor: skill.color }}
                  variants={progressVariants}
                  custom={skill.level}
                />
              </div>
              
              <div className="skill-level-indicator">
                <span className="level-label">Proficiency:</span>
                <div className="level-dots">
                  {[25, 50, 75, 100].map((threshold) => (
                    <div 
                      key={threshold}
                      className="level-dot" 
                      style={{ 
                        opacity: skill.level >= threshold ? 1 : 0.2,
                        backgroundColor: skill.color
                      }} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}