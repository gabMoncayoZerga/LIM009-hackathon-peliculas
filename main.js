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

// startButton.style.display="block";
// welcomePage.style.display="block"
// select.style.display="none";
// paragraph.style.display="none";
// footer.style.display="block";

const clickButtonStart = () => {
   pages(secondPage)
};

const clickButtonSecondPage = () => {
   pages(secondPage)
};

const apiKey = '789019a0';
const baseURL = 'http://www.omdbapi.com/?apikey=' + apiKey;

const searchMovies = async (searchBy, page) => {
   const url = baseURL + '&s=' + searchBy + '&page=' + page;
   const response = await fetch(url);
   const json = await response.json();
   const result = JSON.parse(JSON.stringify(json));
   return result.Search;
}

const printData = data => {
   let string = '';
   data.forEach(movie => {
      string += `<div>
           <p>Title:${movie.Title}</p>
           <img src="${movie.Poster}" alt="poster">
           </div>`
   })
   return document.getElementById('movies').innerHTML = string;
}



searchMovies('accion', 1).then(data => printData(data));

startButton.addEventListener('click', clickButtonStart);
secondPage.addEventListener('click', clickButtonSecondPage);