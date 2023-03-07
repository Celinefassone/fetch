const createRequest = function () {
  var xhr = new XMLHttpRequest();
  const idString = window.location.search;
  const idValue = idString.split("=")[1];
  xhr.open("GET", `https://api.tvmaze.com/lookup/shows?thetvdb=${idValue}`);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log("Error: " + xhr.status);
    }
  };

  return xhr;
};

const renderImage = function (film) {
  const element = document.createElement("div");
  element.innerHTML = `
  <div class="image-box" id="image-box">
        <img
          class="image-img"
          src="${film.image.medium}"
      </div>
  `;
  return element;
};

const renderDescription = function (film) {
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

document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.querySelector("#image-box");
  const descriptionElement = document.querySelector("#second-content");

  let xhr;
  xhr = createRequest();

  xhr.onload = function () {
    if (xhr.response) {
      const film = xhr.response;
      imageElement.appendChild(renderImage(film));
      descriptionElement.appendChild(renderDescription(film));
    }
  };

  xhr.send();
});
