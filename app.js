/* Created by Tivotal */

let textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", (e) => {
  //assigning default height
  textarea.style.height = "59px";
  //getting textarea scroll height
  let sHeight = textarea.scrollHeight;

  //passing scroll height as textarea height
  textarea.style.height = `${sHeight}px`;
});
