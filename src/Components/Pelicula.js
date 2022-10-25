import React from 'react'
import './Pelicula.css'

const Pelicula = ({fecha,nombre,rutaImagen}) => {
  debugger;

  let fuentaImgen = "https://image.tmdb.org/t/p/w300/" + rutaImagen;
  return (
    <div className='Pelicula'>
      <div className='pelicula_imagen'>
        <img src={fuentaImgen} alt="poster pelicula"/>
      </div>
      <div className='pelicula_informacion'>
        <h2>{nombre}</h2>
        <h3>{fecha}</h3>
      </div>
    </div>
  )
}

export default Pelicula