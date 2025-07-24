function createBuggle() {
  const section = document.querySelector("section");
  const createElement = document.createElement("span");
  var size = Math.random() * 60;

  createElement.style.width = size + "px";
  createElement.style.height = size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);
  setTimeout(() => {
    createElement.remove();
  }, 4000);
}

setInterval(createBuggle, 50);
