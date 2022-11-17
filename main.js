//object called “DOMSelectors” to hold your DOM Selectors
const DOMSelectors = {
  container: document.querySelectorAll(`#container`),
  form: document.getElementById("form"),
};

//function that creates an object  VYDFTVHDWMABCJYDUVJYATVYCJNQBYVAUGBFUCBK somebody 

DOMSelectors.form.addEventListener("submit", function () {
  preventRefresh.preventDefault();
  let bruh = {};
  bruh.Name = document.getElementById("Name");
  bruh.Artist = document.getElementById("Artist");
  bruh.Picture = document.getElementById("Picture");
  console.log(bruh);

  //function that injects the newly created object into the document object model i tried to scream but my head was underwater 
  DOMSelectors.container.insertAdjacentHTML(
    "afterend",
    ` 
  <div class="card">
  <img class="title" src=${bruh.name}/> 
  <p class="name"> ${bruh.artist}/> 
  <p class="name"> ${bruh.picture}/> 
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
  console.log(bruh);
});
