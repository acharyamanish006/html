let canvas = document.querySelector(".canvas");

const $ = (Parents, component, className) => {
  let Emt = document.createElement(component);
  Parents.appendChild(Emt);
  Emt.classList.add(className);
};
$(canvas, "h1", "div");

// function creating_NewNote(x, y) {
//   const textarea = document.createElement("textarea");
//   div.appendChild(textarea);
//   div.classList.add("NOTE");
//   div.setAttribute("draggable", true);
//   div.style.position = "fixed";
//   div.style.left = `${x}px`;
//   div.style.top = `${y}px`;
// }
