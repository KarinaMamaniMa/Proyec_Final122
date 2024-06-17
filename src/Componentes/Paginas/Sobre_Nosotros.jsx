import React from 'react'
import  avion from'../Imagenes/avion.jpeg'  
import ReactPlayer from 'react-player'
import { Foater } from './Foater';

export const  Sobre_Nosotros= () => {

  return (
    <div className=" holis container my-5">
    <div className=" row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" style={{backgroundColor:"#2f4858"}}>
    <h1 className= "titulo display-4 fw-bold h1" style={{backgroundColor:"#c3003c" , color:"white"}}>CONOCENOS</h1>
      <div className=" col-lg-7 p-3 p-lg-5 pt-lg-3">
        
        <p className="lead1" style={{color:"#c3003c"}}><strong><h2> ¿ QUIENES SOMOS ?</h2> </strong> 
        </p>
        <p className="lead" style={{color:"white" , textAlign: "justify"  }}>
            
            La empresa operadora TURISMO BOLIVIA S.R.L., es una agencia de viajes y turismo creada por dos jóvenes: Karina Mamani Mamani profesionales en turismo,  la agencia de viajes comenzó sus operaciones con recorridos dentro de la ciudad de La Paz y sus alrededores, posteriormente por todo Bolivia contamos con un personal con muchos años de experiencia, especializados en la organización  de viajes, trabajando siempre para que todos nuestros clientes tengan un viaje inolvidable y único, ofreciéndoles nuestra mejor calidad y eficiencia de servicio, brindándoles seguridad y responsabilidad, cumpliendo con todas sus expectativas.
       
        </p>
        <p className="lead" style={{textAlign:"justify" , color:"white"}}>
        Contamos con diferentes opciones de tours y programas a nivel Nacional para que usted pueda conocer cada lugar turístico de nuestro país, ofreciéndole una gran variedad de servicios para clientes individuales o grupales.
        </p>
      </div>
      <div className='video' style={{width:"200%" , height:"200%" , position:"absolute", left:"750px"}}>
        <ReactPlayer
            url={require('../Videos/turismo.mp4')}
            width={400}
            height={500}
            controls
            playing
            loop
        />
      </div>
     

    

      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      
        <p className="lead1" style={{color:"#c3003c"}}><strong><h2>NUESTRA MISION </h2> </strong> 
        </p>
        <p className="lead" style={{textAlign:"justify" , color:"white" ,}}>
            

             Es despertar y alimentar el espíritu aventurero del viajero mediante experiencias trascendentales en Bolivia, inspirándolo a ser la mejor versión de sí mismo. Nos comprometemos a promover prácticas turísticas responsables y sostenibles, protegiendo y conservando el medio ambiente de los destinos que visitamos. Además, ofrecemos un servicio personalizado que le brinda confianza, seguridad y puntualidad para cubrir todas sus necesidades de viaje, haciendo de esta una experiencia inolvidable.

 
            
        </p>
        <p className="lead" style={{textAlign:"justify" , color:"white"}}>
        Buscamos crear experiencias auténticas y memorables que fomenten la conexión entre nuestros clientes y los lugares que visitan, apoyando las iniciativas locales que promuevan el turismo sostenible y responsable. Nos esforzamos por ser líderes en la industria turística al ser una agencia de turismo comprometida con la sostenibilidad y la responsabilidad social corporativa, creando un impacto positivo en las comunidades y el medio ambiente en los que operamos.
  
        </p>
       
      
      
    </div> 
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
      <img src={avion} className="card-img-top"   alt="..." style={{alignSelf:"90px"}}/>
      </div>
    </div>
     <Foater/> 
  </div>
  
  
  )
}
