//TEMPORARY CODE
import { 
         main 
 } from "./data.js"; 
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
 } from "./data.js"; 
 const linkContainer = document.getElementById("links"); 
  
 function addLink(inputname, inputlink, inputicon) { 
         return ` 
 <a class="link" href="${inputlink}" target="_blank"> 
 <i class="${inputicon}"></i> ${inputname} 
 </a> 
 ` 
 } 
 let allLinks = ""; 
 links.forEach((ele => { 
         let inputlink = ele.inputlink, 
                 inputname = ele.inputname, 
                 inputicon = ele.inputicon; 
         allLinks += addLink(inputname, inputlink, inputicon) 
 })), linkContainer.innerHTML = allLinks;
