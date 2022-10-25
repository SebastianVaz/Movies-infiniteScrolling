import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import ListaPeliculas from './Components/ListaPeliculas'
import Loader from './Components/Loader'

const cantidad_paginas = 1;

function App() {

  const [dataPeliculas, setDataPeliculas] = useState([]);
  const [pagina, setPagina] = useState(cantidad_paginas);
  const [cargando, setCargando] = useState(false);

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=ee53b85f2301bb4fc53cd3c44b9dea3c&language=en-US&page=${pagina}`


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(dataPeliculas.length < 1) {
          setDataPeliculas(() => {return [data]})
        } else {
          setDataPeliculas((prev) => {return [...prev, data] });
          setCargando(false);
        }
        // setDataPeliculas((prev) => {return [...prev, data] });
        // setCargando(false);
      })
      .catch(error => {
        console.log(error)
      })
  }, [pagina])

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  const handleScroll = async() => {
    if(
      window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
    ) {
      setCargando(true);
      setPagina((prev) => prev + 1);
    }
  }

  return (
    <div className="container">
      <h1>Peliculas. </h1>
      {!dataPeliculas.length && <h2>Cargando catalogo...</h2>}
      {dataPeliculas.length && <ListaPeliculas datos={dataPeliculas}/>}
      {cargando &&<Loader/>}
    </div>
  );
}

export default App;
