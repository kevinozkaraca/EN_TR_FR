import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sentenses from "./pages/Sentenses";
import Units from "./pages/Units";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <h1>English - Türkçe - Français</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sentences" element={<Sentenses />}></Route>
          <Route path="/units" element={<Units />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
