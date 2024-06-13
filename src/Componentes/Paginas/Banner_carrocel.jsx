import React from 'react'
import copacabana from '../Imagenes/copacabana.jpeg'
import teleferico from '../Imagenes/teleferico.jpeg'
import cochabamba from'../Imagenes/cochabamba.jpeg'
import salar from'../Imagenes/salar.jpeg'
import santacrux from'../Imagenes/santacrux.jpeg'
export const Banner_carrocel = () => {
  return (
    <div className='container' style={{marginTop:30, marginBottom:30}}>

       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={salar} className="d-block w-100" height="400" alt="No Encontrada"/>
                </div>
                <div className="carousel-item">
                <img src={cochabamba} className="d-block w-100" height="400" alt="No Encontrada"/>
                </div>
                <div className="carousel-item">
                <img src={teleferico} className="d-block w-100"  height="400" alt="No Encontrada"/>
                </div>
                
                <div className="carousel-item">
                <img src={copacabana} className="d-block w-100" height="400" alt="No Encontrada"/>
                </div>
                <img src={ santacrux} className="d-block w-100" height="400" alt="No Encontrada"/>
                </div>
                
                
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
  )
}
