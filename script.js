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
preload("https://avatars.githubusercontent.com/u/99320495");
preload("https://cdn.discordapp.com/attachments/1182294906421645464/1182295005298184232/compresed.png");
preload("https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap");
preload("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
/*
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
preload("url");
*/