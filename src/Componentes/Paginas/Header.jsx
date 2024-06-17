import React from 'react'
import logo from'../Imagenes/logo193.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header style={{color:"white"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <NavLink to="/home"  >
                    <img src={logo} height="100" alt="No Encontrada"  style={{width:"100px", height:"100px", position:"relative", left:"15px"}}/>
                </NavLink>

                <h2 style={{position:"relative", left:"30px"}}> AGENCIA DE VIAJE MORA </h2>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <h4><NavLink to="/home" className="nav-item nav-link text-center" style={{color:"white"}}>Home</NavLink></h4>
                        <h4><NavLink to="/Paquetes" className="nav-item nav-link text-center" style={{color:"white"}}>Paquetes</NavLink></h4>
                        <h4><NavLink to="/Blog" className="nav-item nav-link text-center" style={{color:"white"}}>Blog</NavLink></h4>
                        <h4><NavLink to="/Contacto" className="nav-item nav-link text-center" style={{color:"white"}}>Contacto</NavLink></h4>
                        
                        <h4><NavLink to="/Sobre_Nosotros" className="nav-item nav-link text-center" style={{color:"white"}}>Sobre_Nosotros</NavLink></h4>
                    </div>
                </div>

            </nav>
        </header>
    </>
  )
}
