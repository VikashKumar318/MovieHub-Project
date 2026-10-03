//   apikey ="http://www.omdbapi.com/?apikey=2bd3df80&s=avenger" 
  
  
let formInput = document.querySelector("#form-input");
let input = document.querySelector("#input");
let movieAppend = document.querySelector("#movie-append");
// console.log(movieAppend);


formInput.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = input.value.trim();

    if (!inputValue) {
        return
    }

    // console.log(inputValue);
    searchMovie(inputValue)
});


async function searchMovie(movieName){

    //   movieAppend.innerHTML = `<p>Searching movie...</p>`
      movieAppend.innerHTML = `<p class="loader"></p>`

let response = await fetch( `https://www.omdbapi.com/?apikey=2bd3df80&s=${encodeURIComponent(movieName)}`);
let data = await response.json()
console.log(data);

if (data.Response === "True") {
    displayMovies(data.Search);
    
}else{
    movieAppend.innerHTML =  `<p>${data.Error}</p>`
}

}

function displayMovies(data){

    movieAppend.innerHTML = "";

   data.forEach((movie) => {
     let div = document.createElement("div");
     div.dataset.id = movie.imdbID;
     div.setAttribute("class", "movie-card");

    div.innerHTML = ` <div>
            <img src=${movie.Poster} alt="">
        </div>
        <div>
            <p>${movie.Title}</p>
            <p>${movie.Type}</p>
            <p>${movie.Year}</p>
        </div>`

        movieAppend.append(div)

        // div.addEventListener("click", () => {
        //     console.log(movie.imdbID);
        // })
    
   });


}


 movieAppend.addEventListener("click", (e) => {
    e.preventDefault();
    const movieCard = e.target.closest(".movie-card");
    const imdbID = movieCard.dataset.id
    console.log(imdbID);

    location.href = `movie-details.html?id=${imdbID}`
 });
