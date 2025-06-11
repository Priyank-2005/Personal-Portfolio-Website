import Image from 'next/image';
import '../styles/home.css';

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm Priyank Bohra</h1>
          <p>
            I'm a final-year B.Tech (Information and Communication Technology) student at Pandit Deendayal Energy University, currently in my 6th semester with a CGPA of 7.8. I specialize in front-end web development and have practical experience using technologies like HTML5, CSS3, JavaScript, and ReactJS. I’m deeply passionate about building interactive and visually appealing user interfaces that are both responsive and accessible across devices.
          </p>
          <p>
            Over the past few semesters, I’ve worked on a range of projects including an e-learning coding platform and an AI-based healthcare diagnosis system. These projects have helped me grow not just as a developer, but as a problem-solver who can understand user needs and translate them into efficient, real-world applications. I’m also familiar with tools like Bootstrap, Tailwind CSS, Chrome DevTools, and have experience working with databases such as MySQL and MongoDB.
          </p>
          <p>
            I am a quick learner, highly adaptable to new technologies, and love collaborating with others to bring creative ideas to life. I’m now looking for a full-time opportunity to contribute to innovative web development projects and continue growing as a professional in the tech industry.
          </p>
        </div>

        <div className="home-image">
          <img src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=" alt="Priyank Bohra" width={250} height={250} />

        </div>
      </div>
    </section>
  );
}
