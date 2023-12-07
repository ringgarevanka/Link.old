/* Preload Files */
document.addEventListener("DOMContentLoaded", function () {
  console.log("All files loaded. Displaying the page!");
});

function preloadFiles() {
  var fileUrls = [
    './index.html',
    './style.css',
    './script.js',
    './app.js',
    './data.js',
    'https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
    'https://cdn.discordapp.com/attachments/1182294906421645464/1182295005298184232/compresed.png',
  ];

  var loadedFilesCount = 0;

  function fileLoaded() {
    loadedFilesCount++;

    if (loadedFilesCount === fileUrls.length) {
      var event = new Event("DOMContentLoaded");
      document.dispatchEvent(event);
    }
  }

  fileUrls.forEach(function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        fileLoaded();
      } else {
        console.error('Failed to load: ' + url);
      }
    };

    xhr.send();
  });
}

preloadFiles();