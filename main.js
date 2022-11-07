const DOMSelectors = {
  Container: document.getElementById("container"),
  Album: document.getElementById("album"),
  Artist: document.getElementById("artist"),
  Picture: document.getElementById("picture"),
  Button: document.getElementById("btn"),
};

DOMSelectors.Button.addEventListener("click", function () {
  let input = DomSelectorsinput.value;

  DOMSelectors.Container.insertAdjacentHTML(
    "beforeend",
    `
      <p class ='album'> ${Album} </p>
      <p class ='artist'> ${Artist} </p>
      <p class ='picture'> ${Picture} </p>
    `
  );
});

console.log;(${Album} ${Artist} ${Picture})
DOMSelectors.container.insertAdjacentHTML;
