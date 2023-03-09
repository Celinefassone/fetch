import { createRequest } from "/scripts/modules/xhr.js";
import { renderList } from "/scripts/modules/home/renderList.js";
import { renderGrid } from "/scripts/modules/home/renderGrid.js";
import { clearClasses } from "/scripts/modules/home/clearClasses.js";

document.addEventListener("DOMContentLoaded", function () {
  const listboxElement = document.querySelector("#listbox");
  const contentgridElement = document.querySelector("#contentgrid");
  const tabs = document.querySelectorAll(".tab-name");
  const tabContent = document.querySelectorAll(".tab-content");

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
});
