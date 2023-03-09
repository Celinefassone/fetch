import { renderList } from "./renderList.js";
import { renderGrid } from "./renderGrid.js";
import { renderNotFound } from "./renderNotFound.js";
import { clearClasses } from "./clearClasses.js";
import { createRequest } from "./xhr.js";
import { request } from './request.js';


document.addEventListener("DOMContentLoaded", function() {
  const listboxElement = document.querySelector("#listbox");
  const contentgridElement = document.querySelector("#contentgrid");
  const tabs = document.querySelectorAll(".tab-name");
  const tabContent = document.querySelectorAll(".tab-content");

  request(listboxElement, contentgridElement, tabs, tabContent);
});
