import React from 'react'
import ReactPlayer from 'react-player'
import '../style/ContHeader.css'
import  salar4 from'../Imagenes/salar4.jpeg' 
import  salar3 from'../Imagenes/salar3.jpeg' 
import  salar5 from'../Imagenes/salar5.jpeg'
import valle from'../Imagenes/valle.jpeg'
import tiwanaku from'../Imagenes/tiwanaku.jpeg'
import copacabana from'../Imagenes/copacabana.jpeg'
import  flota from'../Imagenes/flota.jpeg' 
import  telemora from'../Imagenes/telemora.jpeg' 
import  isla from'../Imagenes/isla.jpeg' 
import  tarija from'../Imagenes/tarija.jpeg'
import  maravilla from'../Imagenes/maravilla.jpeg' 
import  beni from'../Imagenes/beni.jpeg'



export const ContHeader = () => {
  return (
<>   
<div className='caja1' style={{backgroundcolor:"red" , left:"100pxs"}} >    
    
    <div className="card-mb-3"   >
    <div className="row g-0" style={{background:"#00a2ab"}}  >
      <div className="col-md-4"  >
      <div className='video' style={{width:"50%" , height:"50%" ,position:'relative' ,top:"-40px" , left:"98px"}}>
        <ReactPlayer
            url={require('../Videos/turismo1.mp4')}
            width={500}
            height={500}
            controls
            playing
            loop
        />
      </div>
      </div>
      <div className="col-md-8"  >
        <div className="bo" tyle={{height:"60%" }}>
          <br/>
          <h2 className="titulo1" style={{color:"#c3003c",fontSize:"40px" }}> SOBRE NOSOTROS	</h2>
          <p className="card-text"  > La empresa operadora MORA , es una agencia de viajes y turismo creada por dos jóvenes: Karina Mamani Mamani ambos profesionales en turismo,  la agencia de viajes comenzó sus operaciones con recorridos dentro de la ciudad de La Paz y sus alrededores, posteriormente por todo Bolivia contamos con un personal con muchos años de experiencia, especializados en la organización  de viajes, trabajando siempre para que todos nuestros clientes tengan un viaje inolvidable y único, ofreciéndoles nuestra mejor calidad y eficiencia de servicio, brindándoles seguridad y responsabilidad, cumpliendo con todas sus expectativas.</p>
          
        </div>
      </div>
     
  </div>
</div>


  
</div>
<div> <div className='caja2' style={{background:"#c3003c"}}>
  <br/>
     <h1 className='titulo' style={{color:"white"}} > TOURS UYUNI </h1>
    <br/>
     <div className="row row-cols-1 row-cols-md-3 g-3" style={{background:"#c3003c", position:"relative", height:"500px" ,width:"1200px"}}>
     <div className="col" style={{background:"#00a2ab",  width:"350px" ,height:"400px" , position:"relative", left:"50px"}}>
       <br/>
         <img style={{position:'relative' ,height:"300px"}} src={ salar5} className="card-img-top"    alt="..."/>
         
         <div className="card-body4" style={{position:"relative", background:"#00a2ab" } }>
          
           <h5 className="card-title"  style={{color:"white"}}> UYUNI-ATARDECER Y NOCHE DE ESTRELLAS </h5>
            
        
       </div>
     </div>
      
     <div className="col" style={{background:"#00a2ab",  width:"350px" ,height:"400px" , position:"relative", left:"150px"}}>
       <br/>
         <img style={{position:'relative' ,height:"300px"}} src={salar3} className="card-img-top"   alt="..."/>
         <div className="card-body4">
           <h5 className="card-title"  style={{color:"white"}}>LA PAZ ; SALAR CE UYUNI Y LAGUNA COLORADA</h5>
      
       </div>
     </div>
     <div className="col "   style={{background:"#00a2ab",  width:"350px" ,height:"400px" , position:"relative", left:"230px"}}>
      
        <br/>
         <img style={{position:'relative' ,height:"300px"}} src={salar4} className="card-img-top"    alt="..."/>
         <div className="card-body4">
           <h5 className="card-title"  style={{color:"white"}}>LA PAZ ; SALAR CE UYUNI Y LAGUNA COLORADA</h5>
            
     
       </div>
     </div>
   </div>
   </div>
   </div>

   <div className='caja3'  style={{background:"#fdc333"}} >
    <br/> 
   <h1 className='titulo' style={{color:"white"}}> TOURS LA PAZ </h1>
   <br/>
       <div className="row row-cols-1 row-cols-md-3 g-3"  style={{background:"#fdc333",position:"relative", height:"500px" ,width:"1200px"}}>
     <div className="col"  style={{background:"#c3003c",  width:"350px" ,height:"400px" , position:"relative", left:"50px"}}>
      <br/>
         <img  style={{position:'relative' ,height:"300px"}}  src={ valle} className="card-img-top" height={250}   alt="..."/>
         <div className="card-body3">
           <h5 className="card-title" style={{color:"white"}}> CITY TOUR VALLE DE LA LUNA - MEDIO DIA </h5>
       </div>
     </div>
     <div className="col" style={{background:"#c3003c",  width:"350px" ,height:"400px" , position:"relative", left:"150px" }}>
       <br/>
         <img  style={{position:'relative' ,height:"300px"}}  src={tiwanaku} className="card-img-top" height={250}alt="..."/>
         <div className="card-body3">
           <h5 style={{color:"white"}} className="card-title">TIWANAKU</h5>
            
         
       </div>
     </div>
     <div className="col"style={{background:"#c3003c",  width:"350px" ,height:"400px" , position:"relative", left:"230px"}}>
      <br/>
         <img style={{position:'relative' ,height:"300px"}} src={copacabana} className="card-img-top" height={250} alt="..."/>
         <div className="card-body3">
           <h5 style={{color:"white"}} className="card-title">LA PAZ- COPACABANA- ISLA DEL SOL</h5>
 
       </div>
     </div>
   </div>
   </div>
   
   <div className='caja4' style={{background:"#00a2ab"}}>
   <br/>
     <h1 className='titulo' style={{color:"white"}} > TOURS UYUNI </h1>
     <br/>
       <div className="row row-cols-1 row-cols-md-3 g-3"  style={{background:"#00a2ab",position:"relative", height:"500px" ,width:"1200px"}}>
     <div className="col"  style={{background:"#fdc333",  width:"350px" ,height:"400px" , position:"relative", left:"50px"}}>
     <br/>
         <img style={{position:'relative' ,height:"300px"}} src={telemora} className="card-img-top"    alt="..."/>
         <div className="card-body2">
           <h5 className="card-title"  style={{color:"white"}}> UYUNI </h5>
           
    
       </div>
     </div>
      
     <div className="col"  style={{background:"#fdc333",  width:"350px" ,height:"400px" , position:"relative", left:"150px"}}>
        <br/>
         <img  style={{position:'relative' ,height:"300px"}} src={isla} className="card-img-top"   alt="..."/>
         <div className="card-body2">
           <h5 className="card-title"  style={{color:"white"}}>LA PAZ ; SALAR CE UYUNI Y LAGUNA COLORADA</h5>
            
        
       </div>
     </div>
     <div className="col"  style={{background:"#fdc333",  width:"350px" ,height:"400px" , position:"relative", left:"230px"}}>
         <br/>
         <img  style={{position:'relative' ,height:"300px"}} src={beni} className="card-img-top"   alt="..."/>
         <div className="card-body2">
           <h5 className="card-title"  style={{color:"white"}}>LA PAZ ; SALAR CE UYUNI Y LAGUNA COLORADA</h5>
            
        
       </div>
     </div>
   </div>
   </div>
   
   <div className='caja5' style={{background:"#dfdfef"}}>
    <br/>
     <h1 className='titulo1'  style={{color:"#c3003c"}}> TOURS UYUNI </h1>
     <br/>
       <div className="row row-cols-1 row-cols-md-3 g-3" style={{background:"#dfdfef",position:"relative", height:"600px" ,width:"1200px"}} >
     <div className="col"  style={{background:"#c3003c",  width:"350px" ,height:"500px" , position:"relative", left:"50px"}}>
        <br/>
         <img  style={{position:'relative' ,height:"300px"}} src={flota} className="card-img-top"    alt="..."/>
         <div className="card-body1">
           <h5 className="card-title" style={{color:"white"}}>BUS CAMA LA PAZ -UYUNI(VICEVERSA)-SALIDAS DIARIAS</h5>
            
           <p className="letra"  style={{color:"white"}}> para este tramo , contamos con modernos buses de 2 pisos diseñados para ofrecer un viaje conformados y seguro. Los buses estan equipados con asientos </p>
            
          
       </div>
     </div>
      
     <div className="col"  style={{background:"#c3003c",  width:"350px" ,height:"500px" , position:"relative", left:"150px"}}>
        <br/>
         <img  style={{position:'relative' ,height:"300px"}} src={tarija} className="card-img-top"   alt="..."/>
         <div className="card-body1">
           <h5 className="card-title" style={{color:"white"}}>SERVICIO DE TRANSPORTE TURISTICAS EN BOLIVIA</h5>
           <p className="letra" style={{color:"white"}}> En turismo boliviano srl contamos con una amplia variedar de vehiculos turisticos para brindar viajes dentro de la ciudad de La Paz .</p> 
         
       </div>
     </div>
     <div className="col"  style={{background:"#c3003c",  width:"350px" ,height:"500px" , position:"relative", left:"230px"}}>
      <br/>
         <img  style={{position:'relative' ,height:"300px"}} src={maravilla} className="card-img-top"   alt="..."/>
        
           <h5 className="card-title" style={{color:"white"}}>CONSEJOS UTILES ANTES DE VIAJAR A BOLIVIA</h5>
           <p className="letra" style={{color:"white"}} > Antes de emprender de su viaje a  nuestro pais de Bolivia , le comentamos tomar e cuenta estos e informaciones...
           Y venir a visitarnos .
            </p>
      
 
     </div>
   </div>
   </div>
 
</>
  )
}
