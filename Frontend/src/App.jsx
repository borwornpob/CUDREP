import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import Home from "./routes/home.jsx";
import Statistics from "./routes/statistics.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
