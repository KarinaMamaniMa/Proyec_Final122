import React from 'react'
import mara1 from '../Imagenes/mara1.jpeg'
import mara2 from '../Imagenes/mara2.jpeg'
import mara3 from '../Imagenes/mara3.jpeg'
import mara4 from '../Imagenes/mara4.jpeg'
import mara5 from '../Imagenes/mara5.jpeg'
import salar from '../Imagenes/salar4.jpeg'
import '../style/Paquetes.css';
import { NavLink } from 'react-router-dom'
import { Foater } from './Foater';


export const Paquetes = () => {
  return (
     <>
     
       <center>
    
    <div className="row">
      <h1 className='titulo2'>
        <cente> 
      <br/>
        NUESTROS PAQUETES TURISTICOS
        <br/>
        </cente>
      </h1>
      
     
    <div className="col-lg-4">
      <br/>
      <br/>
        <img className="rounded-circle" width="200" height="200" src={mara1} alt="..." />
        <h2 className='titulo2'>OH Linda La Paz</h2>
        <p> * 3 Dias /2 Noches</p>
        <p><a className="btn btn-secondary" href="# "><NavLink to="/Paque" className="nav-item nav-link text-center" style={{color:"white"}}> Ver Paquete</NavLink>  &raquo;</a></p>
    </div>
    <div className="col-lg-4">
    <br/>
    <br/>
        <img className="rounded-circle" width="200" height="200" src={mara2} alt="..."/>
        <h2 className='titulo2'>La Paz Encantadora</h2>
         <p>* 5 dias / 4 noches</p>
        <p><a className="btn btn-secondary" href="# " ><NavLink to="/Paque" className="nav-item nav-link text-center" style={{color:"white"}}><NavLink to="/Paque" className="nav-item nav-link text-center" style={{color:"white"}}> Ver Paquete</NavLink></NavLink>&raquo;</a></p>
         
    </div>
    <div className="col-lg-4">
    <br/>
    <br/>
        <img className="rounded-circle" width="200" height="200" src={mara3} alt="..."/>
         
         <h2 className='titulo2'>Bolivia Maravillosa</h2>
         <p> *6 dias / 5 noches</p>
        <p><a className="btn btn-secondary" href="# "> <NavLink to="/Paque" className="nav-item nav-link text-center" style={{color:"white"}}> Ver Paquete</NavLink>&raquo;</a></p>
    </div>
    <div className="col-lg-4">
    <br/>
    <br/>
        <img className="rounded-circle" width="200" height="200" src={mara4} alt="..."/>
        
         <h2 className='titulo2'>Lagunas Altiplanicas</h2>
         <p >9 dias / 8 noches</p>
        <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
    </div>
    <div className="col-lg-4">
    <br/>
    <br/>
        <img className="rounded-circle" width="200" height="200" src={mara5} alt="..."/>
      
         <h2 className='titulo2'>Lo Mejor De Bolivia</h2>
         <p> 13 dias / 12 noches</p>
        <p><a className="btn btn-secondary" href="# "><NavLink to="/Paque" className="nav-item nav-link text-center" style={{color:"white"}}> Ver Paquete</NavLink> &raquo;</a></p>
    </div>
    <div className="col-lg-4">
    <br/>
    <br/>
        <img className="rounded-circle" width="200" height="200" src={salar} alt="..."/>
         <h2 className='titulo2' >5 Estrellas Bolivia</h2>
         <p>9 dias / 8 noches </p>
        <p><a className="btn btn-secondary" href="# "><NavLink to="/Paque" className="nav-item nav-link text-center" style={{color:"white"}}> Ver Paquete</NavLink> &raquo;</a></p>
    </div>
    </div>
    
    
       </center>
       <Foater/>
     </>
  )
}
