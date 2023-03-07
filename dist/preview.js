const createRequest = function () {
  var xhr = new XMLHttpRequest();
  console.log("USE THIS ID: ", window.location.search);
  xhr.open("GET", `https://api.tvmaze.com/lookup/shows?thetvdb=77871`);
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
  
  `;
  return element;
};

const renderDescription = function (film) {
  const element = document.createElement("div");
  element.innerHTML = `
  
  `;
  return element;
};

document.addEventListener("DOMContentLoaded", function () {
  let xhr;
  xhr = createRequest();

  xhr.onload = function () {
    if (xhr.response) {
      console.log("HEER IS YOUR FILM : ", xhr.response);
      // RENDER IMAGE AND PREVIEW THINGY
    }
  };

  xhr.send();
});
