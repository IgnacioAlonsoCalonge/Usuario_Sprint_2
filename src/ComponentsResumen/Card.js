import React from 'react'
import  { FcLike } from "react-icons/fc";
import  { BiAddToQueue } from "react-icons/bi";
import { BiCommentDetail } from 'react-icons/bi';

const Card = (props) => {
  return (
    <div className='cards'>
        <div className='cards2'>
        <img src={props.foto1}/>
        </div>
        <h4>{props.title}</h4>
        <p>{props.descripcion}</p>
        <div className='botonesdeCard'>
        <button id='ver_resumen' onClick={props.leer}>Leer</button>
        <button id='escu' onClick = {props.escuchar}>Escuchar</button>
        <FcLike className='like'/>
        <BiAddToQueue className="add"/>
        <BiCommentDetail className='comentarios'/>
        </div>
        
    </div>
  )
}

export default Card