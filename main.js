//object called “DOMSelectors” to hold your DOM Selectors
const DOMSelectors = {
  container: document.querySelectorAll(`#container`),
  form: document.getElementById("form"),
};
//function that creates an object and calls the following functions
DOMSelectors.form.addEventListener("submit", function () {
  preventRefresh.preventDefault();
  let box = {};
  box.name = document.getElementById("name");
  box.artist = document.getElementById("artist");
  box.picture = document.getElementById("picture");
  console.log(box);

  //function that injects the newly created object into the document object model
  DOMSelectors.container.insertAdjacentHTML(
    "afterend",
    ` 
  <div class="card">
  <img class="title" src=${box.name}/> 
  <p class="name"> ${box.artist}/> 
  <p class="name"> ${box.picture}/> 
  <button class="remove"> remove </button>
  </div> 
  `
  );

  //a function that clears the input fields after injecting the object
  document.getElementById("name").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("picture").value = "";

  //function to remove an object after they have been created
  let remove = document.querySelectorAll("#remove");
  remove.forEach((button) => {
    button.addEventListener("click", function (remove) {
      remove.parentEelemt.remove();
    });
  });
  console.log(box);
});
