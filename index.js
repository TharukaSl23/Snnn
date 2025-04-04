const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get("movieId"));

const movies = [
  {
    title: "Jurassic World: Dominion (2022)",
    img: "https://m.media-amazon.com/images/M/MV5BZGExMWU2NWMtNzczYi00NjQ4LTk2YzctZGZkYmRmMDdhMjllXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Dinosaurs roam the Earth once again in this epic conclusion to the Jurassic saga.",
    download1080p: "https://example.com/jurassic-1080p",
    download720p: "https://example.com/jurassic-720p"
  }
];

const movie = movies[movieId];
if (movie) {
  document.getElementById("moviePoster").src = movie.img;
  document.getElementById("movieDescription").innerText = movie.description;
  document.getElementById("download1080p").href = movie.download1080p;
  document.getElementById("download720p").href = movie.download720p;
} else {
  document.getElementById("movieDescription").innerText = "Movie not found!";
}
