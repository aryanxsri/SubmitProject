import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reportWebVitals from './reportWebVitals';
import Homepage from "./Homepage";
import TodoList from "./TodoList";
import News from "./News";
import Navbar from "./Navbar";
import Login from "./Login";
// import LoginPage from './login';
import LandingPage from "./LandingPage";

export default function App() {
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/Homepage" element={<Homepage name={name} />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Login" element={<Login setName={setName} />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//reportWebVitals();
