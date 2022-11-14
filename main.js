//an object called “DOMSelectors” to hold your DOM Selectors
const DOMSelectors = {
  container: document.querySelectorId("#container"),
  form: document.getElementById("form"),
};
//function that creates an object and calls the following functions
DOMSelectors.form.addEventListener("submit", function (preventRefresh) {
  preventRefresh.preventDefault();
  let box = {};

  box.artist = document.getElementById("artist"); 
  box.picture = document.getElementById("picture"); 
  console.log(box); 

  //function that injects the newly created object into the document object model
  DOMSelectors.container.insertAdjacentHTML(
    "afterend",
    ` 
  <div class="card">
  <img class="title" src=${box.Album}/> 
  <p class="name" src=${box.artist}/> 
  <p class="name" src=${box.picture}/> 
  </div> 
  `
  );

  //a function that clears the input fields after injecting the object
  DOMSelectors.foreach((container) => {
    DOMSelectors.name = "";
    DOMSelectors.artist = "";
    DOMSelectors.pictre = "";
  });

  //function to remove an object after they have been created
  let remove = document.querySelectorAll("#remove");
  remove.forEach((button) => {
    button.addEventListener("click", function (remove) {
      remove.parentEelemt.remove();
    });
  });
});
