//Style
import "./Styles/App.scss";

//Components
import Footer from "./Components/Footer";

//Pages
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
function App() {
  return (
    <div>
      <div className="App">
        <Landing />
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contacts">
          <Contacts />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
