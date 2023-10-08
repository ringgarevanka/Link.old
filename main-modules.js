import main, links from "./index.js";

const mainContainer = document.getElementById("main");
const linkContainer = document.getElementById("links");

function addMain(profilepicture, name, username, hashtag) {
  return `
    <a id="profilePicture">
      <img src="${profilepicture}">
    </a>
    <div id="name">
      ${name}
    </div>
    <div id="username">
      ${username}
    </div>
    <div class="links" id="links"></div>
    <div id="hashtag">
      ${hashtag}
    </div>`;
}

function addLink(inputname, inputlink, inputicon) {
  return `
    <a class="link" href="${inputlink}" target="_blank">
      <i class="${inputicon}"></i> ${inputname}
    </a>`;
}

let allMain = "";
main.forEach((ele) => {
  allMain += addMain(ele.profilepicture, ele.name, ele.username, ele.hashtag);
});
mainContainer.innerHTML = allMain;

let allLinks = "";
links.forEach((ele) => {
  allLinks += addLink(ele.inputname, ele.inputlink, ele.inputicon);
});
linkContainer.innerHTML = allLinks;
