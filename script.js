/* Preload Files */
function preloadFiles() {
  var fileUrls = [
    './index.html',
    './style.css',
    './script.js',
    './app.js',
    './data.js',
    'https://avatars.githubusercontent.com/u/99320495',
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
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load: ' + url);
        }
        fileLoaded();
      })
      .catch(error => {
        console.error(error.message);
      });
  });
}

preloadFiles();