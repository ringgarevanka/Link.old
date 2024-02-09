import {
	main
}
from "./data.js";
const mainContainer = document.getElementById("main");

function addmain(profilepicture, name, username, description) {
	return ` 
 <a id="profilePicture">
   <img src="${profilepicture}">
 </a>
 <div id="name"> ${name} </div>
 <div id="username"> ${username} </div>
 <div id="description"> ${description} </div>
 <div id="links"></div>
 <div id="bottom_text">©2022-${currentyear} ${name}. All rights reserved.</div>
 `
}
let allmain = "";
main.forEach((ele => {
	let profilepicture = ele.profilepicture,
		name = ele.name,
		username = ele.username,
		description = ele.description,
	allmain += addmain(profilepicture, name, username, description)
})), mainContainer.innerHTML = allmain;

import {
	links
}
from "./data.js";
const linkContainer = document.getElementById("links");

function addLink(name, link, icon, target) {
	return ` 
 <a class="link" href="${link}" target="${target}">
   <i class="${icon}"></i> ${name} </a>
 `
}
let allLinks = "";
links.forEach((ele => {
	let name = ele.name,
		link = ele.link,
		icon = ele.icon,
		target = ele.target;
	allLinks += addLink(name, link, icon, target)
})), linkContainer.innerHTML = allLinks;

const currentyear = new Date().getFullYear();