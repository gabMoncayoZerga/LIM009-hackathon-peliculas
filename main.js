//ALMACENAMOS LAS SECCIONES EN CONSTANTES //
const welcomePage = document.getElementById("welcome-page");
const startButton = document.getElementById("start-button");
const secondPage = document.getElementById("second-page");
const paragraph = document.getElementById("paragraph");
const select = document.getElementById("select");
const footer = document.getElementById("footer");

const pages = (pageToShow) => {
   [welcomePage, secondPage].forEach(page => {
      page.classList.remove('show');
      page.classList.add('hide');
   });
   pageToShow.classList.add('show');
   pageToShow.classList.remove('hide');
}

const clickButtonStart = () => {
   pages(secondPage)
};

const clickButtonSecondPage = () => {
   pages(secondPage)
};

const movies = document.getElementById('movies');

const apiKey = '789019a0';
const baseURL = 'https://www.omdbapi.com/?apikey='+apiKey;

const searchMovies = async(searchBy,page) => {
const url = baseURL +'&s='+ searchBy +'&page='+ page;
   const response = await fetch(url);
   const json = await response.json();
   return json.Search;
   }

   const printData = (data) => {
       let string = '';
       data.forEach(movie => {
           string += `<div>
           <p class="info">Title:${movie.Title}</p>
           <p class="info">Tipo: ${movie.Type}</p>
           <img src="${movie.Poster}" alt="poster">
           </div>`
       })
       return document.getElementById('movies').innerHTML = string;
    };

  const selectOption = () => {
    let word = select.value;
    switch(word) {
      case 'Acción':
        searchMovies('kill',1).then(data => printData(data))
      break;
      case 'Guerra':
        searchMovies('war',1).then(data => printData(data))
      break;
      case 'Humor':
        searchMovies('comedy',1).then(data => printData(data));
      break;
    }
  }

  select.addEventListener('change', selectOption);

startButton.addEventListener('click', clickButtonStart);
secondPage.addEventListener('click', clickButtonSecondPage);


window.searchMovies = searchMovies;
