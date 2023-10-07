import { main, links } from "./index.js";

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
    </div>
  `;
}

function addLink(inputname, inputlink, inputicon) {
  return `
    <a class="link" href="${inputlink}" target="_blank">
      <i class="${inputicon}"></i> ${inputname}
    </a>
  `;
}

mainContainer.innerHTML = main.map(ele => addMain(ele.profilepicture, ele.name, ele.username, ele.hashtag)).join('');
linkContainer.innerHTML = links.map(ele => addLink(ele.inputname, ele.inputlink, ele.inputicon)).join('');