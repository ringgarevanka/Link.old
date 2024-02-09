import { main, links } from "./data.js";

const mainContainer = document.getElementById("main");
const linkContainer = document.getElementById("links");

const createProfile = (ele) => `
  <a id="profilePicture"><img src="${ele.profilepicture}"></a>
  <div id="name">${ele.name}</div>
  <div id="username">${ele.username}</div>
  <div id="description">${ele.description}</div>
  <div class="links" id="links">${createLinks(ele.links)}</div>
  <div id="bottom_text">${ele.bottom_text}</div>
`;

const createLinks = (links) => links.map(link => `
  <a class="link" href="${link.link}" target="${link.target}">
    <i class="${link.icon}"></i> ${link.name}
  </a>
`).join("");

const allMain = main.map(createProfile).join("");
mainContainer.innerHTML = allMain;

const allLinks = createLinks(links);
linkContainer.innerHTML = allLinks;
