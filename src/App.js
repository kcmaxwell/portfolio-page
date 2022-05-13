import "@coreui/coreui/dist/css/coreui.min.css";
import "./styles.css";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import CardGrid from "./components/CardGrid";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Section title="Kristopher Maxwell" id="main-section">
        <h2>Front End | Back End | Full Stack Web Developer</h2>
      </Section>
      <Section title="Projects" id="project-section">
        <CardGrid xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
          <Project
            title="Portfolio Page"
            description="The page you're viewing right now!"
            code="https://github.com/kcmaxwell/portfolio-page"
            demo="https://tcv6p1.csb.app/"
          />
          <Project title="Project 2" description="Project #2" />
          <Project title="Project 3" description="Project #3" />
        </CardGrid>
      </Section>
      <Section title="Open Source Contributions" id="open-source-section">
        <CardGrid xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
          <Project title="Collabora Online" description="" />
          <Project title="Project 2" description="Open Source #2" />
          <Project title="Project 3" description="Project #3" />
        </CardGrid>
      </Section>
      <Section title="About Me" id="about-section">
        <CardGrid xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
          <About title="About Me">
            I am Kristopher Maxwell, a Computer Science graduate from the
            University of Calgary.
          </About>
          <Skills title="Skills">React Java C++</Skills>
          <Contact title="Contact Me">Github: Linkedin:</Contact>
        </CardGrid>
      </Section>
    </div>
  );
}
