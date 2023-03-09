import { createRequest } from "./xhr.js";
import { renderImage } from "./renderImage.js";
import { renderDescription } from "./renderDescription.js";




document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.querySelector("#image-box");
  const descriptionElement = document.querySelector("#second-content");


  xhr.onload = function () {
    if (xhr.response) {
      const film = xhr.response;
      imageElement.appendChild(renderImage(film));
      descriptionElement.appendChild(renderDescription(film));
    }
  };


});
