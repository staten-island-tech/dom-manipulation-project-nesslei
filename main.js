const DOMSelectors = {
  Container: document.getElementById("container"),
  form: document.getElementById("form"), 
  Album: document.getElementById("album"),
  Artist: document.getElementById("artist"),
  Picture: document.getElementById("picture"),
  Button: document.getElementById("btn"),
};
DOMSelectors.form.addEventListener(`submit`, function (event) => {

  DOMSelectors.Container.insertAdjacentHTML(
    "beforeend",
    `
      <p class ='album'> ${Album} </p>
      <p class ='artist'> ${Artist} </p>
      <p class ='picture'> ${Picture} </p>
    `
  );
});

DOMSelectors.style.display 

console.log;(${Album} ${Artist} ${Picture})
DOMSelectors.container.insertAdjacentHTML;
