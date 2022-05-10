import "./styles.css";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Section title="Main Section" id="main-section" />
      <Section title="Projects" id="project-section">
        <div className="project-grid">
          <Project
            title="Portfolio Page"
            description="The page you're viewing right now!"
            code="https://github.com/kcmaxwell/portfolio-page"
            demo="https://codesandbox.io/s/romantic-bohr-tcv6p1"
          />
          <Project title="Project 2" />
          <Project title="Project 3" />
        </div>
      </Section>
      <Section title="Open Source Contributions" id="open-source-section" />
      <Section title="Contact Me" id="contact-section" />
    </div>
  );
}
