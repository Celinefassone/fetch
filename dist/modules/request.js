import { createRequest } from "./xhr.js";
import { renderList } from "./renderList.js";
import { renderGrid } from "./renderGrid.js";
import { clearClasses } from "./clearClasses.js";

export const request = function(listboxElement, contentgridElement, tabs, tabContent) {
  let xhr;
  xhr = createRequest();

  xhr.onload = function () {
    if (xhr.response.length) {
      xhr.response.forEach(function (film) {
        listboxElement.appendChild(renderList(film));
        contentgridElement.appendChild(renderGrid(film));
      });
    } else {
      listboxElement.appendChild(renderNotFound());
      contentgridElement.appendChild(renderNotFound());
    }
  };

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      clearClasses(tabs);
      clearClasses(tabContent);

      const contentElement = document.querySelector(
        `[data-content="${this.dataset.tab}"]`
      );

      contentElement.classList.add("active");

      this.classList.add("active");
    });
  });

  xhr.send();
}
