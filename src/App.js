//Style
import "./Styles/App.scss";

//Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//Pages
import Landing from "./Pages/Landing";

function App() {
  return (
    <div>
      <div className="App">
      <Navbar />
      <Landing />
      <Footer />
      </div>
    </div>
  );
}
export default App;
