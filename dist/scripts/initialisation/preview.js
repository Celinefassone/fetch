import { renderImage } from "/scripts/modules/preview/renderImage.js";
import { renderDescription } from "/scripts/modules/preview/renderDescription.js";
import { createRequest } from "/scripts/modules/xhr.js";

document.addEventListener("DOMContentLoaded", function () {
  let xhr;

  const idString = window.location.search;
  const idValue = idString.split("=")[1];
  xhr = createRequest(idValue);

  xhr.onload = function(){ 
   const imageElement = document.querySelector("#image-box");
   const descriptionElement = document.querySelector("#second-content");
    if (xhr.response) {
      const film = xhr.response;
      imageElement.appendChild(renderImage(film));
      descriptionElement.appendChild(renderDescription(film));

    }
  }

  xhr.send();
});

