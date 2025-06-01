import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/About/about";
import Patents from "./components/Patents/patents";
import Presentations from "./components/Presentations/presentations"
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <About />
            <Patents />
            <Presentations />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
