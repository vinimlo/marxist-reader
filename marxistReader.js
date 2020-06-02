var i = 0
var textWidth = "50%";
var ulWidth = "50%";
var textSize = "1.8em";

var posInt = 0;
var posStr = posInt.toString();
var position = posStr + "%";

var posElement = document.createElement("position");
document.body.appendChild(posElement);
var displayedPos = document.getElementsByTagName("position")[0];
displayedPos.style.position = "fixed";
displayedPos.style.bottom = "25px";
displayedPos.style.right = "25px";
displayedPos.style.fontWeight = "bold";

displayedPos.textContent=position;

var tagP = document.getElementsByTagName("p");
var tagA = document.getElementsByTagName("a");
var tagUl = document.getElementsByTagName("ul");

var pNum = tagP.length;
var aNum = tagA.length;
var ulNum = tagUl.length;

tagH1 = document.getElementsByTagName("h1")[0];
tagH2 = document.getElementsByTagName("h2")[0];
tagH3 = document.getElementsByTagName("h3")[0];
info = document.getElementsByClassName("info")[0];

document.body.style.backgroundColor = "#111";
document.body.style.color = "#EEE";
tagH1.style.color = "#FFF";
tagH1.style.fontSize = "4em";
tagH2.style.color = "#EEE";
tagH2.style.fontSize = "3.5em";
tagH3.style.color = "#DDD";
tagH3.style.fontSize = "3em";

info.style.fontSize = "1.6em";

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
}

for (i=0; i < pNum; i++) {
	tagP[i].style.width = textWidth;
  tagP[i].style.fontSize = textSize;
}


for (i=0; i < aNum; i++) {
	tagA[i].style.color = "#FFF";
  tagA[i].style.fontWeight = "bold";
}


for (i=0; i < ulNum; i++) {
	tagUl[i].style.width = ulWidth;
}

document.body.onscroll = function(){
  for (i=0; i < pNum; i++) {
    posInt = Math.round((i/pNum)*100)+1;
    posStr = posInt.toString();
    position = posStr + "%";

		if (isElementInViewport(tagP[i])) displayedPos.textContent=position;
	}

};
