import { About } from "./About";
import styles from "./App.module.css";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Contact />
        </div>
    );
}

export default App;