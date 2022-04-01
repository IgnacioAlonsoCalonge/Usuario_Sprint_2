import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Novedades } from './Novedades'
import data from "./writing.json"

const Primerabarra = () => {
  return (
    <div className='primerabarra'>
        <Novedades/>
        <Player
          className="lottiex"
          autoplay={true}
          loop={true}
          src= {data}
        />
    </div>
  )
}

export default Primerabarra