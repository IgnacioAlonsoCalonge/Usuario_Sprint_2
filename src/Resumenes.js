
import Card from './ComponentsResumen/Card';
import './Resumenes.css';
import foto from "./Img/websiteimg.jpg"
import foto2 from "./Img/oficina.jpg"
import foto3 from "./Img/imagenhola.png"
import foto4 from "./Img/empresas.jpg"
import foto5 from "./Img/felicidad.jpg"
import foto6 from "./Img/amigos.jpg"
import foto7 from "./Img/viajar.jpg"
import foto8 from "./Img/plandenegocio.jpg"
import Primerabarra from './ComponentsResumen/Primerabarra';
import React from 'react';
import axios from 'axios';


export default class Resumenes extends React.Component {

  constructor(props){
    super(props);
    this.downloadpdf = this.downloadpdf.bind(this);
    this.downloadaudio = this.downloadaudio.bind(this);
  }

  render(){
    
    return (
    <div className="resum">
      <Primerabarra/>
      <div className='catalogobutt'>
      <button id="catalogo01">Todo</button>
      <button id="catalogo02">Gratuito</button>
      <button id="catalogo03">Premium</button>
      <input id = "input_01" placeholder='Buscar'></input>
      </div>
      <div className='resumenesflex'>
      <Card leer = {this.downloadpdf} escuchar= {this.downloadaudio} foto1={foto} title="Cultura sobre el liderazgo empresarial" descripcion = "Liderazgo en equipos de trabajo de cultura empresarial"/>

      </div>

    </div>
  ); 
  }

  downloadpdf() {
     axios({
       url: "http://localhost:8080/resumenes/1/pdf",
       method: 'GET',
       responseType: 'blob'
     }).then((response) => {
       console.log(response);
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'resumen.pdf')
       document.body.appendChild(link)
       link.click()
     })
    
  }

  downloadaudio() {
    axios({
      url: "http://localhost:8080/resumenes/1/mp3",
      method: 'GET',
      responseType: 'blob'
    }).then((response) => {
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resumen.mp3')
      document.body.appendChild(link)
      link.click()
    })
   

  }
}


