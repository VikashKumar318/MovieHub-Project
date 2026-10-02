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

let response = await fetch(`http://www.omdbapi.com/?apikey=2bd3df80&s=${movieName}`);
let data = await response.json()
console.log(data);
displayMovies(data.Search);

}

function displayMovies(data){

    movieAppend.innerHTML = "";

   data.forEach((movie) => {
     let div = document.createElement("div")

    div.innerHTML = ` <div>
            <img src=${movie.Poster} alt="">
        </div>
        <div>
            <p>${movie.Title}</p>
            <p>${movie.Type}</p>
            <p>${movie.Year}</p>
        </div>`

        movieAppend.append(div)
    
   });


}
// displayMovies(data)