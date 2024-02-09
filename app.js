import { main, links } from "./data.js";

const mainContainer = document.getElementById("main");
const linkContainer = document.getElementById("links");

function addmain(profilepicture, name, username, description, bottom_text) {
  return `
    <a id="profilePicture">
      <img src="${profilepicture}">
    </a>
    <div id="name">${name}</div>
    <div id="username">${username}</div>
    <div id="description">${description}</div>
    <div class="links" id="links"></div>
    <div id="bottom_text">${bottom_text}</div>
  `;
}

function addLink(name, link, icon, target) {
  return `
    <a class="link" href="${link}" target="${target}">
      <i class="${icon}"></i> ${name}
    </a>
  `;
}

let allmain = "";
main.forEach(({ profilepicture, name, username, description, bottom_text }) => {
  allmain += addmain(profilepicture, name, username, description, bottom_text);
});
mainContainer.innerHTML = allmain;

let allLinks = "";
links.forEach(({ name, link, icon, target }) => {
  allLinks += addLink(name, link, icon, target);
});
linkContainer.innerHTML = allLinks;
