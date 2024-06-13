import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


import './App.css';
import { Header } from "./Componentes/Paginas/Header";
import { Banner_carrocel } from "./Componentes/Paginas/Banner_carrocel";
import { ContHeader } from "./Componentes/Paginas/ContHeader";

 

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner_carrocel/>
       <ContHeader/>
    </div>
  );
}

export default App;
