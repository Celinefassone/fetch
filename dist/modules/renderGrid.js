export const renderGrid = function (film) {
  const element = document.createElement("div");
  element.innerHTML = `
  <a class="list-anchor" href="/preview.html?thetvdb=${
    film.show.externals.thetvdb
  }">
    <div
      class="grid"
      style="background-image: url('${film.show.image.original}');"
    >
    <p class="grid-text">Title: ${film.show.name} | ${
    film.show.rating.average ? "Rating " + film.show.rating.average : "Unrated"
  } </p>
    </div>
  </a>`;

  return element;
};