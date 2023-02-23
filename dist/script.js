document.addEventListener("DOMContentLoaded", (e) => {
  // create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  // set the HTTP method and URL of the request
  xhr.open("GET", "https://api.tvmaze.com/search/shows?q=batman");
  // set the response type
  xhr.responseType = "json";
  // set up a function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // the request was successful
      console.log(xhr.response);
    } else {
      // there was an error with the request
      console.log("Error: " + xhr.status);
    }
  };
  // send the request
  xhr.send();
});
const clearClasses = function (iterator) {
  iterator.forEach(function (element) {
    element.classList.remove("active");
  });
};

document.addEventListener("DOMContentLoaded", (e) => {
  const tabs = document.querySelectorAll(".tab-name");
  const tabContentContainers = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      clearClasses(tabs);
      clearClasses(tabContentContainers);

      const contentElement = document.querySelector(
        `[data-content="${this.dataset.tab}"]`
      );

      contentElement.classList.add("active");

      this.classList.add("active");
    });
  });
});
