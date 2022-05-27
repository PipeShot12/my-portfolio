import "./styles.css";
import Navbar from "./Componentes/Navbar/Navbar";
import Welcome from "./Componentes/Welcome/Welcome";
import Projects from "./Componentes/Projects/Projects";
import Contact from "./Componentes/Contact/Contact";
import Footer from "./Componentes/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
