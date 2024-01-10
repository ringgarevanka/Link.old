/* Preload Files */
function preload(src) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.responseType = "arraybuffer";
  xhr.onload = () => {
    // Store resources in cache
    const cache = window.localStorage;
    cache.setItem(src, xhr.response);
  };
  xhr.send();
}

preload("/app.js");
preload("/data.js");
preload("/style.css");
