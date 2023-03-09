import { renderImage } from "/scripts/modules/preview/renderImage.js";
import { renderDescription } from "/scripts/modules/preview/renderDescription.js";

import { createRequest } from "/scripts/modules/xhr.js";

document.addEventListener("DOMContentLoaded", function () {
  let xhr;
  xhr = createRequest();

  console.log("Preview ready");

  // xhr.send();
});

// document.addEventListener("DOMContentLoaded", function () {
//   const imageElement = document.querySelector("#image-box");
//   const descriptionElement = document.querySelector("#second-content");

//   xhr.onload = function () {
//     if (xhr.response) {
//       const film = xhr.response;
//       imageElement.appendChild(renderImage(film));
//       descriptionElement.appendChild(renderDescription(film));
//     }
//   };
// });
