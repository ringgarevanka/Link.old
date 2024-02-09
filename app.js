import { main } from "./data.js";

const mainContainer = document.getElementById("main");

function createProfileElement(profile) {
  const element = document.createElement("div");
  element.innerHTML = `
    <a id="profilePicture">
      <img src="${profilepicture}" alt="${name}">
    </a>
    <div id="name">${name}</div>
    <div id="username">${username}</div>
    <div id="description">${description}</div>
    <div class="links" id="links"></div>
    <div id="bottom_text">${bottom_text}</div>
  `;
  return element;
}

const profileElements = main.map(createProfileElement);
mainContainer.append(...profileElements);

import { links } from "./data.js";
const linkContainer = document.getElementById("links");

function createLink(name, link, icon, target) {
  const linkElement = document.createElement("a");
  linkElement.href = link;
  linkElement.target = target;
  linkElement.classList.add("link");

  const iconElement = document.createElement("i");
  iconElement.classList.add(icon);
  linkElement.appendChild(iconElement);

  linkElement.textContent = name;

  return linkElement;
}

for (const ele of links) {
  const linkElement = createLink(ele.name, ele.link, ele.icon, ele.target);
  linkContainer.appendChild(linkElement);
}
