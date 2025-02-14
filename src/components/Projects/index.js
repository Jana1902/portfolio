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

const Projects = () => (
  <div className="projects-container">
    <h1 className="project-heading">Projects</h1>
    <ul className="projects-list">
      {projectsList.map((each) => (
        <li>
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
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
