import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import data from "./estudiando.json"

const Sugerencias = () => {
  return (
    <div className='sugerencias'>
        <div className='divsug'>
        <Player
            className="lottiex"
            autoplay={true}
            loop={true}
            src= {data}
            />
        </div>
            <div className= "textosug">
                <h1>¡Creemos que esto puede interesarte!</h1>
                <p>Acorde a tus gustos,
                    creemos que las siguientes recomendaciones
                    pueden resultar de tu agrado.
                </p>

                <p>
                    Si no sabes que contenido te gustaría ver, prueba y accede a ellas haciendo click en el siguiente botón de
                    sugerencias
                </p>

                <button>Sugerencias</button>    
            </div>

    </div>
  )
}

export default Sugerencias