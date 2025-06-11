import '../../styles/projects.css';

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="project-card">
          <h2>E-learning Coding Platform</h2>
          <p>
            A web-based platform to help users learn programming through interactive courses, quizzes, and a responsive UI built with ReactJS. Features a clean, modular design focused on user-friendly navigation.
          </p>
          <a href="#">View Project</a>
        </div>

        <div className="project-card">
          <h2>AI-based Medical Healthcare Diagnosis System</h2>
          <p>
            An AI-powered system designed to help users identify potential diseases based on symptoms. Built to simplify early diagnosis using basic rule-based AI algorithms.
          </p>
          <a href="#">View Project</a>
        </div>

        <div className="project-card">
          <h2>Portfolio Website (This One!)</h2>
          <p>
            My personal portfolio website built using Next.js and TypeScript. Includes Home, About, Projects, and Contact pages, with light/dark mode toggle and fully responsive design using external CSS.
          </p>
          <a href="#">View Live</a>
        </div>
      </div>
    </section>
  );
}
