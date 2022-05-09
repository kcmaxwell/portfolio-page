import "./styles.css";
import Section from "./components/Section";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Section title="Main Section" id="main-section" />
      <Section title="Projects" id="project-section" />
      <Section title="Open Source Contributions" id="open-source-section" />
      <Section title="Contact Me" id="contact-section" />
    </div>
  );
}
