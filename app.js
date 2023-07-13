const movieName = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-button");
const result = document.getElementById("result");

let getMovie = () => {
  let moviegot = movieName.value;
  movieName.value = "";
  let url = `https://www.omdbapi.com/?t=${moviegot}&apikey=${key}`;
  if (moviegot.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response == "True") {
          result.innerHTML = `
          <div class="info">
          <img src=${data.Poster} class="poster">

          <div><h2>${data.Title}</h2>

          <div class="rating">
          <h4>  Rating:${data.imdbRating}</h4>
          </div>

          <div class="details">
          <span> ${data.Rated}</span>
          <span> ${data.Year}</span>
          <span> ${data.Runtime}</span>
          </div>

          <div class="genre">
          <div> ${data.Genre.split(",").join("</div><div>")}</div>
          </div>
         </div>
         </div>
          <h3>Plot:</h3>
          <p>${data.Plot}</p>
          <h3>Cast:</h3>
          <p>${data.Actors}</p>
          </div>
          
          `;
        } else {
          result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg"> Error Occured</h3>`;
      });
  }
};

window.addEventListener("load", getMovie);
searchBtn.addEventListener("click", () => {
  getMovie();
  console.log("clicked");
});
