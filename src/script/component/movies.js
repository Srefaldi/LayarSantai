import "./movies-item.js";

class Movies extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this.className =
      "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6 g-4";

    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }
}

customElements.define("movie-list", Movies);
