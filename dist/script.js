document.addEventListener("DOMContentLoaded", (e) => {
  // create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  // set the HTTP method and URL of the request
  xhr.open("GET", "http://api.tvmaze.com/search/shows?q=batman");
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
