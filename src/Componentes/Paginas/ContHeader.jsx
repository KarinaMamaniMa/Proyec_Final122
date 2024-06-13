import React from 'react'
import '../style/ContHeader.css';
import  salar1 from'../Imagenes/salar1.jpeg' 
import  salar4 from'../Imagenes/salar4.jpeg' 
import  salar3 from'../Imagenes/salar3.jpeg' 
import  salar5 from'../Imagenes/salar5.jpeg'
import valle from'../Imagenes/valle.jpeg'
import tiwanaku from'../Imagenes/tiwanaku.jpeg'
import copacabana from'../Imagenes/copacabana.jpeg'

export const ContHeader = () => {
  return (
<div className='caja1'>    
    
    <div className="card-mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={  salar1} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 claclassNamess="card-title"> SOBRE NOSOTROS	</h2> 
          <p className="card-text">La empresa operadora MORA S.R.L., es una agencia de viajes y turismo creada por dos jóvenes: Karina Mamani Mamani ambos profesionales en turismo,  la agencia de viajes comenzó sus operaciones con recorridos dentro de la ciudad de La Paz y sus alrededores, posteriormente por todo Bolivia contamos con un personal con muchos años de experiencia, especializados en la organización  de viajes, trabajando siempre para que todos nuestros clientes tengan un viaje inolvidable y único, ofreciéndoles nuestra mejor calidad y eficiencia de servicio, brindándoles seguridad y responsabilidad, cumpliendo con todas sus expectativas.</p>
          
        </div>
      </div>
     
  </div>
</div>


 <div className='caja2'>
  <h1 className='titulo' > TOURS UYUNI </h1>
    <div className="row row-cols-1 row-cols-md-3 g-3">
  <div className="col">
    <div className="card">
      <img src={ salar5} className="card-img-top"    alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> UYUNI-ATARDECER Y NOCHE DE ESTRELLAS </h5>
         
      </div>
    </div>
  </div>
   
  <div className="col">
    <div className="card">
      <img src={salar3} className="card-img-top"   alt="..."/>
      <div className="card-body">
        <h5 className="card-title">LA PAZ ; SALAR CE UYUNI Y LAGUNA COLORADA</h5>
         
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={salar4} className="card-img-top"   alt="..."/>
      <div className="card-body">
        <h5 className="card-title">LA PAZ ; SALAR CE UYUNI Y LAGUNA COLORADA</h5>
         
      </div>
    </div>
  </div>
</div>
</div>


<div className='caja3'  > 
<h1 className='titulo'> TOURS LA PAZ </h1>
    <div className="row row-cols-1 row-cols-md-3 g-3">
  <div className="col">
    <div className="card">
      <img src={ valle} className="card-img-top" height={250}   alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> CITY TOUR VALLE DE LA LUNA - MEDIO DIA </h5>
         
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={tiwanaku} className="card-img-top" height={250}alt="..."/>
      <div className="card-body">
        <h5 className="card-title">TIWANAKU</h5>
         
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={copacabana} className="card-img-top" height={250} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">LA PAZ- COPACABANA- ISLA DEL SOL</h5>
         
      </div>
    </div>
  </div>
</div>
</div>
</div>
  )
}
