import Calculator from "./Calculator";
import About from "./About";
import { Canvas } from "react-three-fiber";

function App() {
  return (
    <div id="app">
      <Calculator />
      <About />
      {/* <Canvas camera={{ position: [0, 0, 0], fov: 70 }}></Canvas> */}
    </div>
  );
}

export default App;
