import React from 'react'
import logo from '../Imagenes/logo192.png'

export const Header = () => {
  return (
    <> 
    <Header style={{color:"white"}}>
        <nav className='navbar-expand-lg navbar-light bg-primary'>
            <a href=''>
                <img src={logo} height="100"  atl="no encontrada"/>
            </a>
            <h1>Sitio Web con React</h1>

            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className='navbar-toggler-icon'></span>

            </button>

            
        </nav>
    </Header> 
    </>
  )
}