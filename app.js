import {
   main
}
from "./data.js";
const mainContainer = document.getElementById("main");

function addmain(profilepicture, name, username, description, bottom_text) {
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
 <div id="bottom_text"> 
 ${bottom_text} 
 </div> 
 `
}
let allmain = "";
main.forEach((ele => {
   let profilepicture = ele.profilepicture,
      name = ele.name,
      username = ele.username,
      description = ele.description,
      bottom_text = ele.bottom_text;
   allmain += addmain(profilepicture, name, username, description, bottom_text)
})), mainContainer.innerHTML = allmain;

import {
   links
}
from "./data.js";
const linkContainer = document.getElementById("links");

function addLink(name, link, icon, target) {
   return ` 
 <a class="link" href="${link}" target="${target}"> 
 <i class="${icon}"></i> ${name} 
 </a> 
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