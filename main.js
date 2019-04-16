const apiKey = '789019a0'; // almacenando clave para obtener la data de la web OMDb API

const baseURL = 'http://www.omdbapi.com/?apikey=' + apiKey;
// almacenando en una constante la base de la URL mas la key para poder acceder al JSON

const searchMovies = async (searchBy, page) => {//creando una función para obtener las peliculas por titulo

  const url = baseURL + '&s=' + searchBy + '&p=' + page; //agregando parametros a la url

  const response = await fetch(url); //obteniendo la data json de forma asíncrona

  const json = await response.json();// convirtiendo la data a json, recien aca lo trato como json

  console.log(json);
}

searchMovies('action', 2)
