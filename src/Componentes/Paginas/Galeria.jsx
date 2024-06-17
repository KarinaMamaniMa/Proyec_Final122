import React from 'react'
import  h1 from'../Imagenes/salar4.jpeg' 
import  h2 from'../Imagenes/salar3.jpeg' 
import  h3 from'../Imagenes/salar5.jpeg'
import h4 from'../Imagenes/valle.jpeg'
import h5 from'../Imagenes/tiwanaku.jpeg'
import h6 from'../Imagenes/copacabana.jpeg'
import   h7 from'../Imagenes/flota.jpeg' 
import  h8 from'../Imagenes/telemora.jpeg' 
import  h9 from'../Imagenes/isla.jpeg' 
import  h10 from'../Imagenes/tarija.jpeg'
import  h11 from'../Imagenes/maravilla.jpeg' 
import  h12 from'../Imagenes/beni.jpeg'
import '../style/Galeria.css'
import { Foater } from './Foater'

export const Galeria= () => {
  return (
    <> 
    <section className="gallery min-vh-100">
    <div className="container-lg">
       <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div claclassNamess="col">
             <img src={h1} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src={ h2} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
            <img src={ h3} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src= {h4} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src= {h5}class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src={ h6} class="gallery-item" alt="gallery"/>
          </div>
          <div claclassNamess="col">
             <img src={h7} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src={ h8} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
            <img src={ h9} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src= {h10} class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src= {h11}class="gallery-item" alt="gallery"/>
          </div>
          <div className="col">
             <img src={ h12} class="gallery-item" alt="gallery"/>
          </div>
       </div>



    </div>
 </section>

<div className="modal fade" id="gallery-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered modal-lg">
   <div clclassNameass="modal-content">
     <div className="modal-header">
       <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> 
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div className="modal-body">
        <img src={h1} class="modal-img" alt="modal img"/>
     </div>
   </div>
 </div>
</div>


<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/main.js"></script>

<Foater/>
</>
 
  )
}
