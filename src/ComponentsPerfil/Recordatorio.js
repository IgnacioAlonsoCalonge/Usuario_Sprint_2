import React from 'react'
import Card from '../ComponentsResumen/Card'
import foto from "../Img/websiteimg.jpg"
import foto7 from "../Img/viajar.jpg"
import foto8 from "../Img/plandenegocio.jpg"
import foto3 from "../Img/imagenhola.png"
import foto4 from "../Img/empresas.jpg"
import foto5 from "../Img/felicidad.jpg"


const Recordatorio = () => {
  return (
  
    <div>
        <div className='Verdespues'>
            <h3>Ver después :</h3>
        </div>           
        <div className='resumenesflex'>
            <Card foto1={foto} title="Organización de equipo" descripcion = "Orientación sobre la gestión de grupos en el ambiente empresarial"/>
            <Card foto1={foto7} title = "Perdiéndo el miedo a viajar" descripcion="Experiencias personales y como perdí el miedo a viajar"/>
        </div>

        <div className='Verdespues'>
            <h3>Me gusta :</h3>
        </div>
        <div className='resumenesflex'>
            <Card foto1={foto8} title = "Plan de negocio" descripcion="Metodología para la realización de un plan de negocio"/>
            <Card foto1={foto3} title = "Técnicas básicas" descripcion="Iniciación a las técnicas de estudio para aprobar"/>
            <Card foto1={foto4} title = "Planificación estratégica" descripcion="Cómo crear una estrategia a partir de una idea"/>
        </div>

        <div className='Verdespues'>
            <h3>Mis resúmenes</h3>
            <Card foto1={foto5} title="Buscando la felicidad" descripcion = "Hablamos de los distintos enfoques que tiene la felicidad y como seguirla"/>
        </div>
    </div>
  )
}

export default Recordatorio