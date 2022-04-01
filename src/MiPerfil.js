import React from 'react'
import { Link } from 'react-router-dom'
import Recordatorio from './ComponentsPerfil/Recordatorio'
import Sugerencias from './ComponentsPerfil/Sugerencias'
import { FiEdit } from 'react-icons/fi';

const MiPerfil = () => {
  return (
    <div className='MiPerfil'>
        <div>
            <Sugerencias/>
            <Recordatorio/>
            <div className='opcion_premium'>
              <h3>¿Aún no eres premium?</h3>
              <p>Si quieres acceder a todo el contenido e informarte de las
                mejoras que obtendrás para ser Premium haz click aquí
              </p>
              <Link to="/premium"><button>¡Quiero ser Premium!</button></Link>

              <div className='gestiondatospersonales'>
                <div className='gestionando'>
                <h3>Gestion de datos personales</h3>
                <FiEdit className='iconoEdit'/>
                </div>
              <p>Nombre: .....</p>
              <p>Cuenta bancaria: ..........</p>
              <p>Nombre de usuario: ...........</p>
              <p>Dirección de correo vinculada: .........</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MiPerfil