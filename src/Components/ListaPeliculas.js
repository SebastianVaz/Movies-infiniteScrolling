import React from 'react'
import Pelicula from './Pelicula'
import './ListaPeliculas.css'

const ListaPeliculas = ({datos}) => {

  console.log(datos);
  return (
    <div className='listaPeliculas'>
      { datos.map((pagina,index) => {
      debugger;
      return pagina.results.map(pelicula => {
        return <Pelicula
        key={index}
        fecha={pelicula.relese_date}
        nombre={pelicula.title}
        rutaImagen={pelicula.poster_path}        
      />
      })
})}
    
    </div>
  )
}

export default ListaPeliculas