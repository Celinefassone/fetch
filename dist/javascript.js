const defaultShows = "batman";
const searchElement = document.querySelector(".input");

const createRequest = function (search) {
  search = searchElement || defaultShows;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.tvmaze.com/search/shows?q=batman");
  // xhr.open("GET", `https://api.tvmaze.com/search/shows?q=${search}`);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log("Error: " + xhr.status);
    }
  };
  xhr.send();
  return xhr;
};

const renderList = function (film) {
  const element = document.createElement("li");
  element.classList.add("list");
  element.innerHTML = `
  <a class="list-anchor" href="/preview.html">
  <div class="list-img-container">
  <img class="list-img" 
  src="${film.show.image.original}"/>
</div>
<div class="list-text-container">
  <p class="list-text"> ${film.show.name} </p>
  <p class="list-text"> ${
    film.show.rating.average ? "rating: " + film.show.rating.average : "unrated"
  } </p>
  </div>
  </a>
  `;
  return element;
};

const renderGrid = function (film) {
  const element = document.createElement("div");
  element.innerHTML = `
<a href="/preview.html">
            <div
              class="grid"
              style="
                background-image: url('${film.show.image.original}');
              "
            >
              <p class="grid-text">Title: ${film.show.name} | ${
    film.show.rating.average ? "Rating " + film.show.rating.average : "Unrated"
  } </p>
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

document.addEventListener("DOMContentLoaded", function () {
  const listboxElement = document.querySelector("#listbox");
  const contentgridElement = document.querySelector("#contentgrid");
  const tabs = document.querySelectorAll(".tab-name");
  const tabContent = document.querySelectorAll(".tab-content");
  const searchElement = document.querySelector(".input");
  const submitButton = document.querySelector("#submitButton");

  let xhr;
  xhr = createRequest();

  xhr.onload = function () {
    xhr.response.forEach(function (film) {
      listboxElement.appendChild(renderList(film));
      contentgridElement.appendChild(renderGrid(film));
    });
  };

  submitButton.addEventListener("click", function () {
    xhr = createRequest(searchElement.value);
    xhr.send();
  });

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      clearClasses(tabs);
      clearClasses(tabContent);

      const contentElement = document.querySelector(
        `[data-content="${this.dataset.tab}"]`
      );

      contentElement.classList.add("active");

      this.classList.add("active");
    });
  });
});
