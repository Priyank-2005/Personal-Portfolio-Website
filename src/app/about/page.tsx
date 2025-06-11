import '../../styles/about.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>

        <div className="about-section">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.Tech in Information and Communication Technology (ICT)</strong><br />
              Pandit Deendayal Energy University, 6th Semester<br />
              <em>CGPA: 7.8</em>
            </li>
            <li>
              <strong>H.S.C (Class 12)</strong><br />
              Rajasthan Higher Secondary School, 2022<br />
              <em>Scored: 75% | JEE Mains: 85.78 percentile</em>
            </li>
            <li>
              <strong>S.S.C (Class 10)</strong><br />
              Gujarat Law Society, 2020<br />
              <em>Scored: 84%</em>
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Skills</h2>

          <div className="skills-category">
            <h3>Front-End Development</h3>
            <p>HTML5, CSS3, JavaScript, ReactJS</p>
          </div>

          <div className="skills-category">
            <h3>Frameworks & Tools</h3>
            <p>Bootstrap, Tailwind CSS, jQuery, Chrome DevTools, Git</p>
          </div>

          <div className="skills-category">
            <h3>Responsive Design</h3>
            <p>Media Queries, Flexbox, CSS Grid</p>
          </div>

          <div className="skills-category">
            <h3>Programming Languages</h3>
            <p>C, C++, Java, Python</p>
          </div>

          <div className="skills-category">
            <h3>Database & Platforms</h3>
            <p>MySQL, MongoDB, AWS (basic), Docker (basic)</p>
          </div>

          <div className="skills-category">
            <h3>Other Strengths</h3>
            <p>Quick learner, adaptive, strong attention to visual detail, DSA & OOP, debugging, collaborative</p>
          </div>
        </div>
      </div>
    </section>
  );
}
