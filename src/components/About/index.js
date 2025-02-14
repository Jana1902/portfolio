import { easeInOut, motion } from "framer-motion";

import "./index.css";

const skillsList = [
  {
    id: 0,
    skill: "HTML",
  },
  {
    id: 1,
    skill: "CSS",
  },
  {
    id: 2,
    skill: "JavaScript",
  },
  {
    id: 3,
    skill: "React JS",
  },
  {
    id: 4,
    skill: "Node JS",
  },
  {
    id: 5,
    skill: "Sqlite",
  },
  {
    id: 6,
    skill: "Git",
  },
  {
    id: 7,
    skill: "Python",
  },
];

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }
    }
  };
  

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        ease: easeInOut, 
        staggerChildren: 0.2,
      }
    }
  }

const About = () => (
  <>
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="about-heading">About</h1>
        <p className="about-description">
          I'm a Full stack developer passionate about building dynamic and
          user-friendly web applications.I have experience working with{" "}
          <span>React.js, Node.js, Express.js, Sqlite,</span> and more. I love
          solving problems through clean and efficient code. I'm always eager to
          learn and contribute to exciting projects. Currently, I'm looking for
          opportunities to gain experience in web development and collaborate
          with teams on real-world applications.
        </p>
      </motion.div>
      <div className="skills-container">
        <h1 className="skill-heading">Skills</h1>
        <motion.ul className="skill-list" variants={container} initial="hidden" whileInView="visible">
          {skillsList.map((each) => (
            <motion.li key={each.id} className="skill" variants={item}>
              {each.skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  </>
);

export default About;
