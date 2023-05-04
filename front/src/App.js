import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sentenses from "./pages/Sentenses";
import Units from "./pages/Units";
import vocabulary from "./pages/Vocabulary";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sentences" element={<Sentenses />}></Route>
          <Route path="/units" element={<Units />}></Route>
          <Route path="/vocabulary" element={<vocabulary />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
