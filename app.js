import { main, links } from "./data.js";

const mainContainer = document.getElementById("main");
const linkContainer = document.getElementById("links");

function addMain(profilepicture, name, username, description, hashtag) {
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
        <div id="description">
            ${description}
        </div>
        <div class="links" id="links"></div>
        <div id="hashtag">
            ${hashtag}
        </div>
    `;
}

function addLink(name, link, icon, target) {
    return `
        <a class="link" href="${link}" target="${target}">
            <i class="${icon}"></i> ${name}
        </a>
    `;
}

let allMain = main.reduce((accumulator, ele) => {
    const { profilepicture, name, username, description, hashtag } = ele;
    return accumulator + addMain(profilepicture, name, username, description, hashtag);
}, "");
mainContainer.innerHTML = allMain;

let allLinks = links.reduce((accumulator, ele) => {
    const { name, link, icon, target } = ele;
    return accumulator + addLink(name, link, icon, target);
}, "");
linkContainer.innerHTML = allLinks;