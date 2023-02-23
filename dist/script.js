const defaultShows = "cars";

const createRequest = function (search) {
  search = search || defaultShows;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.tvmaze.com/search/shows?q=${search}`);
  xhr.responseType = "json";

  return xhr;
};

const renderList = function (film) {
  const element = document.createElement("li");
  element.classList.add("list");
  element.innerHTML = `
    <a href="/preview.html">
      <img class="list-img" src="${film.show.image.original}" />
    </a>
    <p class="list-text">${film.show.name}</p>
    <p class="list-text">${
      film.show.rating.average
        ? "Rating " + film.show.rating.average
        : "Unrated"
    }</p>
  `;

  return element;
};

const renderTile = function (film) {
  const element = document.createElement("div");
  element.innerHTML = `
  <a href="/preview.html">
    <div
      class="grid"
      style="background-image: url('${film.show.image.original}');"
    >
      <p class="grid-text">Title: ${film.show.name} | ${
    film.show.rating.average ? "Rating " + film.show.rating.average : "Unrated"
  }</p>
    </div>
  </a>
  `;

  return element;
};

const clearClasses = function (iterator) {
  iterator.forEach(function (element) {
    element.classList.remove("active");
  });
};

document.addEventListener("DOMContentLoaded", (e) => {
  const listBoxElement = document.querySelector("#listbox");
  const tilesContainer = document.querySelector("#tiles-container");
  const tabs = document.querySelectorAll(".tab-name");
  const tabContentContainers = document.querySelectorAll(".tab-content");
  // const searchElement = document.querySelectorAll("#celines-search-input");
  // const submitButton = document.querySelectorAll("#celines-button");

  let xhr;
  xhr = createRequest();

  xhr.onload = function () {
    xhr.response.forEach(function (film) {
      listBoxElement.appendChild(renderList(film));
      tilesContainer.appendChild(renderTile(film));
    });
  };

  // submitButton.addEventListener('click', function () {
  // xhr = createRequest(pass it in here the value of the input);
  // xhr.send();
  // })

  xhr.send();

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      clearClasses(tabs);
      clearClasses(tabContentContainers);

      const contentElement = document.querySelector(
        `[data-content="${this.dataset.tab}"]`
      );

      contentElement.classList.add("active");

      this.classList.add("active");
    });
  });
});
