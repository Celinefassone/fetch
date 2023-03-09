export const renderDescription = function (film) {
  const element = document.createElement("div");
  element.innerHTML = `
  <p class="content-header">  ${film.name}</p>
  <p class="content-header"> ${
    film.rating.average ? "rating: " + film.rating.average : "Unrated"
  } </p>
  <div class="content-summary">
    <p>
      ${film.summary ? film.summary : "No description available"}
    </p>
  </div>
  `;
  return element;
};