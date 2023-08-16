import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SHPE from "./components/SHPE";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <SHPE/>
      <Projects/>
    </div>
  );
}

export default App;
