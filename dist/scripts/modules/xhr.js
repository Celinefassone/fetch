export const createRequest = function (id) {
  const url = id ? `/lookup/shows?thetvdb=${id}` : 'search/shows?q=batman'
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.tvmaze.com/${url}`);
  xhr.responseType = "json";
  return xhr;
};
