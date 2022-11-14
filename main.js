const DOMSelectors = {
  container: document.querySelectorAll("#container"),
  form: document.getElementById("form"), 
};
  //to hold the information input 
DOMSelectors.form.addEventListener("submit", function (preventRefresh) {
  preventRefresh.preventDefault(); 
  //declare the varaible to contain the stuff 
  let box = {}; 

  box.name= document.getElementById("album"); 
  box.artist = document.getElementById("artist"); 
  box.picture = document.getElementById("picture"); 
  console.log(box); 

  //Let JavaScript make changes to HTML
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

//remove button 

let remove = document.querySelectorAll("#remove"); 
remove.forEach((button) => {
  button.addEventListener("click", function (remove){
    remove.parentEelemt.remove(); 

  });

});

});
