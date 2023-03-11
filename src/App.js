import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import EventLineUps from "./EventLineUps/EventLineUps";
import BePartOf from "./BePartOf/BePartOf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/eventlineups" element={<EventLineUps />} />
        <Route path="/bepartof" element={<BePartOf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
