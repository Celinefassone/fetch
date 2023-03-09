export const renderImage = function (film) {
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