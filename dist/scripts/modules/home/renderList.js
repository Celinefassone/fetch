export const renderList = function (film) {
  const element = document.createElement("li");
  element.classList.add("list");

  element.innerHTML = `
  <a class="list-anchor" href="/preview.html?thetvdb=${
    film.show.externals.thetvdb
  }">
    <div class="list-img-container">
      <img class="list-img" 
      src="${film.show.image.original}"/>
    </div>
    <div class="list-text-container">
      <p class="list-text"> ${film.show.name} </p>
      <p class="list-text"> ${
        film.show.rating.average
          ? "rating: " + film.show.rating.average
          : "unrated"
      } </p>
    </div>
  </a>`;

  return element;
};