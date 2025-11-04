import React, {useState} from "react";
import './App.css'
import Login from './components/Login/Login.jsx'
import Banda from "./components/Banda/banda.jsx";
import Membros from "./components/Membros/membros.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/banda" element={<Banda />} />
        <Route path="/membros" element={<Membros />} />
      </Routes>
    </div>
  );
}

export default App;
