import { motion } from 'framer-motion'
import './About.css'

export const About = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-heading">About Me</h2>
          <p className="about-subheading">Creating digital experiences that matter</p>
        </motion.div>
        
        {/* Content Section */}
        <motion.div 
          className="about-content"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="about-image-container"
            variants={itemVariants}
          >
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about.png`} 
                  alt="Profile" 
                  className="about-image"
                />
              </div>
              <div className="about-image-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-dot dot-1"></div>
                <div className="decoration-dot dot-2"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text-container"
            variants={itemVariants}
          >
            <div className="about-text-content">
              <motion.p 
                className="highlight-text"
                whileHover={{ x: 5 }}
              >
                I craft digital solutions that blend functionality with beautiful design.
              </motion.p>
              
              <div className="about-paragraphs">
                <motion.p
                  whileHover={{ x: 3 }}
                >
                  As a full-stack developer with a passion for user experience, I specialize in building responsive web applications that delight users. My background in both development and design allows me to bridge the gap between technical implementation and visual appeal.
                </motion.p>
                
                <motion.p
                  whileHover={{ x: 3 }}
                >
                  My coding journey began when I built my first website at 15, and since then I've worked with startups and established companies to bring their digital visions to life. I'm committed to writing clean, maintainable code and staying current with industry trends.
                </motion.p>
                
                <motion.p
                  whileHover={{ x: 3 }}
                >
                  When I'm not at my computer, you can find me hiking in nature, experimenting with photography, or exploring new culinary adventures. I believe diverse experiences fuel creativity in problem-solving.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}