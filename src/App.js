//Style
import "./Styles/App.scss";

//Components
import Footer from "./Components/Footer";

//Pages
import Landing from "./Pages/Landing";

function App() {
  return (
    <div>
      <div className="App">
      <Landing />
      <Footer />
      </div>
    </div>
  );
}
export default App;
