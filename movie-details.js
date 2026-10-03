let movieDetail = document.querySelector("#movie-detail");


const params = new URLSearchParams(location.search);
const imdbID = params.get("id")
console.log(params, imdbID);

if (imdbID) {
    searchMovie(imdbID.trim());
}



async function searchMovie(imdbID){

   
    //   movieAppend.innerHTML = `<p class="loader"></p>`

let response = await fetch( `https://www.omdbapi.com/?apikey=2bd3df80&i=${imdbID}&plot=full`,);
let data = await response.json();
console.log(data);

if (data.Response === "True") {
    displayMovie(data);
    
}else{
    movieAppend.innerHTML =  `<p>${data.Error}</p>`
}

}

function  displayMovie(data){
    movieDetail.innerHTML = `<div>
            <img src="${data.Poster}" alt="">
        </div>
        <div>
            <h2>${data.Title}</h2>
            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>IMDb:${data.imdbRating} / 10</p>
            </section>
            <div>
                 <p>plot.Overview</p>
                <p>${data.Plot}</p>
            </div>
            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>
            <p>Actors</p>
            <p>${data.Actors}</p>
            <div>
                 <div>
                <section>
                    <p>Language</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>
            </div>

            <button>
            <a href="https://www.imdb.com/title/${data.imdbID} target="_blanck">View on IMDb</a>

            </button>

            </div>
               </div>`
};