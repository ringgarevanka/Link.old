import {
	main
} from "./index.js";
const mainContainer = document.getElementById("main");

function addmain(profilepicture, name, username, hashtag) {
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
`
}
let allmain = "";
main.forEach((ele => {
	let profilepicture = ele.profilepicture,
		name = ele.name,
		username = ele.username,
		hashtag = ele.hashtag;
	allmain += addmain(profilepicture, name, username, hashtag)
})), mainContainer.innerHTML = allmain;

import {
	links
} from "./index.js";
const linkContainer = document.getElementById("links");

function addLink(socialmedianame, socialmedialink, socialmediaicon) {
	return `
<a class="link" href="${socialmedialink}" target="_blank">
<i class="${socialmediaicon}"></i> ${socialmedianame}
</a>
`
}
let allLinks = "";
links.forEach((ele => {
	let socialmedialink = ele.socialmedialink,
		socialmedianame = ele.socialmedianame,
		socialmediaicon = ele.socialmediaicon;
	allLinks += addLink(socialmedianame, socialmedialink, socialmediaicon)
})), linkContainer.innerHTML = allLinks;