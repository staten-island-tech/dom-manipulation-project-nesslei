//object called “DOMSelectors” to hold your DOM Selectors
const DOMSelectors = {
  container: document.getElementById("container"),
  form: document.getElementById("form"),
};

//function that creates an object  VYDFTVHDWMABCJYDUVJYATVYCJNQBYVAUGBFUCBK somebody 

DOMSelectors.form.addEventListener("submit", function (preventRefresh) {
  preventRefresh.preventDefault();
  let bruh = {};
  bruh.Name = document.getElementById("Name").value;
  bruh.Artist = document.getElementById("Artist").value;
  bruh.Picture = document.getElementById("Picture").value;
  console.log(bruh);  

  //function that injects the newly created object into the document object model i tried to scream but my head was underwater 
  DOMSelectors.container.insertAdjacentHTML(
    "afterend",
    ` 
  <div class="container" id="output">
  <img class="picture" id="cardpicture" src=${bruh.Picture}/>
  <p class="artist" id="cardartist" > ${bruh.Artist}</p> 
  <p class="name" id="cardname" > ${bruh.Name} </p> 
  <button id="remove" class="Remove" > remove </button>
  </div> 
  `
  );

  //a function that clears the input fields after injecting the object
  document.getElementById("Name").value = "";
  document.getElementById("Artist").value = "";
  document.getElementById("Picture").value = "";

  //function to remove an object after they have been created
    function myFunction() {
      const element = document.getElementById("container");
      element.remove();
    }
}); 
