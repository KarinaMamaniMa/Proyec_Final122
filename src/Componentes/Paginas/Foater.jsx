import React from 'react'

export const Foater = () => {
  return (
 
    <div className="container" style={{background:"#7d9caf"}}>
        <footer className="py-3 my-4"  >
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Medicamentos</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Paquetes</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contactos</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Sobre Nosotros</a></li>
            </ul>
            <p className="text-center text-muted">&copy;Producciones : ARASY</p>
        </footer>
    </div>
  )
}
