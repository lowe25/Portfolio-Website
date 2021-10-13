import "./Styles/App.scss";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Project from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <div className="App">
        <Landing />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;
