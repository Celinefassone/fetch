export const createRequest = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.tvmaze.com/search/shows?q=${defaultShows}`);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log("Error: " + xhr.status);
    }
  };

  return xhr;
};
