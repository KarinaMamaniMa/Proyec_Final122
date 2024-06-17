import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


import './App.css';
import { Header } from "./Componentes/Paginas/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Componentes/Paginas/Home";
import { Paquetes } from "./Componentes/Paginas/Paquetes";
import {Sobre_Nosotros  } from "./Componentes/Paginas/Sobre_Nosotros";
import { Contacto } from "./Componentes/Paginas/Contacto";
import { Paque } from "./Componentes/Paginas/Paque";
 
 

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/Paquetes" element={<Paquetes/>}/>
          <Route exact path="/Sobre_Nosotros" element={<Sobre_Nosotros/>}/>
          <Route exact path="/Contacto" element={<Contacto/>}/>
          <Route exact path="/Paque" element={<Paque/>}/>
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
