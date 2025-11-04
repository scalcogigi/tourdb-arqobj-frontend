import React, {useState} from "react";
import './App.css'
import Login from './components/Login/Login.jsx'
import Banda from "./components/Banda/banda.jsx";
import Membros from "./components/Membros/membros.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import MemberRegisterPage from "./components/CadastroMembro/MemberRegisterPage.jsx";
import BandRegisterPage from "./components/CadastroBanda/BandRegisterPage.jsx";
import ShowForm from "./components/CadastroShow/cadastroshow.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/banda" element={<Banda />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/homepage" element={<HomePage />}/>
        <Route path="/cadastrobanda" element={<BandRegisterPage />}/>
        <Route path="/cadastromembro" element={<MemberRegisterPage />}/>
        <Route path="/show" element={<ShowForm />} />
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
