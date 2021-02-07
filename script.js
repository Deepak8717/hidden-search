//select search container, button, and input
const search = document.querySelector(".search"),
  btn = document.querySelector(".btn"),
  input = document.querySelector(".input");

//add click listener on button &&  logic for on click
btn.addEventListener("click", () => {
  //on button click add active class on search element
  search.classList.add("active");
  //add focus on input element
  input.focus();
});

//Now if user click outside on the page input box should lose focus and remove the active class

//First lets detect the click anywhere on the page.
document.addEventListener("click", (e) => {
  // check if clicke was inside or outside of search container
  const clickedTarget = search.contains(e.target); // e.target return true if target element was clicked (search-container)
  // if target Element is not clicked
  if (!clickedTarget) {
    //remove the active class on search container
    search.classList.remove("active");
  }
});

//Author : Deepak pundir
//Twitter : @sendit2deepak
