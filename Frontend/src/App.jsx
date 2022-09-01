import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import Home from "./routes/home.jsx";
import Statistics from "./routes/statistics.jsx";
import Reports from "./routes/reports.jsx";
import Report from "./routes/report.jsx";
import EditTask from "./routes/editTask.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/reports">
            <Route index element={<Reports />} />
            <Route path=":id" element={<Report />} />
          </Route>
          <Route path="/editTask" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
