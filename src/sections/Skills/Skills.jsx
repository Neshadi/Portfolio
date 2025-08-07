import { motion } from 'framer-motion';
import './Skills.css';

const baseSkills = [
  "Object-Oriented Programming (OOP)",
  "Quality Assurance & Quality Control",
  "Object Oriented Design Principle",
  "Object-Relational Mapping (ORM)",
  "Machine Learning",
  "Artificial Intelligence",
  "Graphical User Interface (GUI)",
  "Front-End Development",
  "Back-End Web Development",
  "SQL Database Management",
  "Windows Presentation Foundation (WPF)",
  "Figma",
  "Docker",
  "Jenkins",
  "Amazon Web Services (AWS)",
  "Go (Programming Language)",
  "MongoDB",
  "MySQL",
  "Flutter",
  "Dart",
  "React.js",
  "Spring Boot",
  "Java",
  "MERN Stack",
  "Next.js",
  "Material-UI",
  "JSON Web Token (JWT)",
  "WordPress Design",
  "Angular",
  "HTML",
  "CSS",
  "JavaScript",
  "Entity Framework (EF) Core",
  "C++",
  "Python",
];

// Explicit skill to icon mapping
const skillIconMap = {
  "Object-Oriented Programming (OOP)": "💻",
  "Quality Assurance & Quality Control": "✅",
  "Object Oriented Design Principle": "📐",
  "Object-Relational Mapping (ORM)": "🗄️",
  "Machine Learning": "🤖",
  "Artificial Intelligence": "🧠",
  "Graphical User Interface (GUI)": "🖥️",
  "Front-End Development": "🎨",
  "Back-End Web Development": "🛠️",
  "SQL Database Management": "🗃️",
  "Windows Presentation Foundation (WPF)": "🪟",
  "Figma": "🖌️",
  "Docker": "🐳",
  "Jenkins": "🤖",
  "Amazon Web Services (AWS)": "☁️",
  "Go (Programming Language)": "🐹",
  "MongoDB": "🍃",
  "MySQL": "🐬",
  "Flutter": "🦋",
  "Dart": "🎯",
  "React.js": "⚛️",
  "Spring Boot": "🌱",
  "Java": "☕",
  "MERN Stack": "🧱",
  "Next.js": "➡️",
  "Material-UI": "🎛️",
  "JSON Web Token (JWT)": "🔐",
  "WordPress Design": "📝",
  "Angular": "🅰️",
  "HTML": "📄",
  "CSS": "🎨",
  "JavaScript": "📜",
  "Entity Framework (EF) Core": "🧩",
  "C++": "➕",
  "Python": "🐍",
};

const defaultColor = '#4CAF50';

const getIcon = (skill) => {
  return skillIconMap[skill] || '⭐';
};

// Sort skills alphabetically
const sortedSkills = [...baseSkills].sort((a, b) => a.localeCompare(b));

const skillsData = sortedSkills.map(skill => ({
  name: skill,
  icon: getIcon(skill),
  color: defaultColor
}));

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    hover: {
      y: -6,
      boxShadow: '0 15px 30px -10px rgba(0,0,0,0.15)'
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="skills-heading">Technical Expertise</h2>
          <p className="skills-subheading">Technologies I've mastered and continuously refine</p>
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
