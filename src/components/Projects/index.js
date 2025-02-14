import { easeInOut, motion } from "framer-motion";

import "./index.css";

const projectsList = [
  {
    id: 0,
    name: "NxtWatch",
    description:
      "Developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories, such as Trending, Gaming, and Saved videos, and search for specific content while customising the visual theme",
    technologies: ["CSS", "JS", "React Js", "Routing", "JWT Token"],
    url: "http://nxtwatch21.ccbp.tech/",
  },
  {
    id: 1,
    name: "Jobby App",
    description:
      "Constructed an all-in-one job searching platform, Jobby App. Built pages for Login, Home, Jobs, and Job item details with React components, form inputs, and event handlers",
    technologies: ["CSS", "JS", "React Js", "Routing", "JWT Token"],
    url: "http://jobbyapp91.ccbp.tech/",
  },
  {
    id: 2,
    name: "Emoji Game",
    description:
      "Created an exciting memory game with unique emoji clicks and randomized placement. Showcased React skills in displaying emojis, updating game states, and implementing event listeners.",
    technologies: ["CSS", "React Js"],
    url: "http://emojigame93.ccbp.tech/",
  },
];

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { x: 30, y: 20, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      ease: easeInOut,
      staggerChildren: 0.3,
    },
  },
};

const Projects = () => (
  <div className="projects-container">
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="project-heading"
    >
      Projects
    </motion.h1>
    <motion.ul className="projects-list">
      {projectsList.map((each, index) => (
        <motion.li
          key={each.id}
          initial={{ opacity: 0, x: 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="project-card">
            <h1 className="project-title">{each.name}</h1>
            <p className="project-description">{each.description}</p>
            <ul className="tech-list">
              {each.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={each.url} target="_blank">
              <button className="project-link">View Project</button>
            </a>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

export default Projects;
