export const renderNotFound = function () {
  const element = document.createElement("div");
  element.innerHTML = `<h2 style="color: black; text-align: center;">No results</h2>`;

  return element;
};