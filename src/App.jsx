
import './App.css';
function App() {
  const name = " Mahammd Alfaz";
  const profession = " Full Stack Developer";
  const aboutMe = `
  I am ${name},   a ${profession} with a strong foundation in Java and Spring Boot, 
currently focusing on building modern, responsive frontends using React.

I enjoy creating real-world applications that solve practical problems, 
with a strong emphasis on clean architecture, scalable APIs, and user-friendly UI.

I am passionate about learning new technologies, improving my problem-solving skills,
and building impactful software products.
`;
 const projects = [
  {
    title: "Civic Plus – Civic Issue Reporting Platform",
    description:
      "A full-stack web application that allows citizens to report civic issues such as garbage, water supply, and road problems. The platform provides area-wise civic health insights, role-based access, and SLA-based issue escalation to ensure transparency and accountability.",
    link: "https://github.com/MahammadAlfaz" 
  },
  {
    title: "Full Stack E-Commerce Application",
    description:
      "An end-to-end e-commerce application with user authentication, product management, cart functionality, and secure order processing. Built with a Spring Boot backend and a React frontend, focusing on clean API design and scalable architecture.",
    link: "https://github.com/MahammadAlfaz"
  }
];




  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
    {aboutMe}
        </p>
      </section>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>
          If you would like to get in touch, feel free to reach out at{" "}
          <a href="mailto:alfazkota.786@gmail.com">alfazkota.786@gmail.com</a>
        </p>
      </section>
      <footer className="App-footer">
        <p>&copy; 2026 {name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App
