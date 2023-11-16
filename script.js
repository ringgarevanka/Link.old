  window.onload = function() {
  var ipAddress = window.location.hostname;
  var browser = navigator.userAgent;
  var device = navigator.platform;
  var system = navigator.appVersion;
  var language = navigator.language;

  var message = "Detected!" + "\n" +
                " " + "\n" +
                "Web: " + ipAddress + "\n" +
                "Browser type: " + browser + "\n" +
                "Device platform: " + device + "\n" +
                "OS: " + system + "\n" +
                "Language: " + language + "\n" +
                " " + "\n" +
                "Click 'OK' To Continue" + "\n";

  alert(message);
};