 import React from 'react'
 import logo from '../Imagenes/logo193.png'
 
 export const Header = () => {
   return (
     <> 
     <header style={{color:"white"}}>
       <nav className='navbar navbar-expand-lg  navbar-light bg-primary'>
          <a href=''>
            <img src={logo} height="100" width="100" alt=' no encontrada'/>
            
          </a>
          <h2>AGENCIA DE TURISMO MORA </h2>
          <button type='button' className='navbar-toggler' data-bs-toggle='collapse'  data-bs-target='#navbarCollapse'>
            <span className='navbar-toggler-icon'></span>
          </button>
          
             
            <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <h4><a  className="nav-item nav-link text-center" style={{color:"white"}}>Home</a></h4>
                        <h4><a  className="nav-item nav-link text-center" style={{color:"white"}}>Tours</a></h4>
                        <h4><a  className="nav-item nav-link text-center" style={{color:"white"}}>Paquetes Turisticos</a></h4>
                        <h4><a  className="nav-item nav-link text-center" style={{color:"white"}}>Restaurantes</a></h4>
                        <h4><a  className="nav-item nav-link text-center" style={{color:"white"}}>Hoteles</a></h4>
                        <h4><a  className="nav-item nav-link text-center" style={{color:"white"}}>Contactos</a></h4>
                         
                    </div>
            </div>
       </nav>
     </header>
     </>
   )
 }
 