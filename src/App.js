import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Certifications from "./components/Certifications/certifications";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <About />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
