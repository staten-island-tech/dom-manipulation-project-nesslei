const DOMSelectors = {
  Container: document.getElementById("container"),
  Album: document.getElementById("album"),
  Artist: document.getElementById("artist"),
  Picture: document.getElementById("picture"),
  Button: document.getElementById("btn"),
};

DOMSelectors.Button.addEventListener("click", function () {
  let input = DomSelectorsinput.value;

  console.log(input);

  DOMSelectors.Container.insertAdjacentHTML(
    "beforeend",
    `
      <p class ='album'> ${Album} </p>
      <p class ='artist'> ${Artist} </p>
      <p class ='picture'> ${Picture} </p>
    `
  );
});

DOMSelectors.container.insertAdjacentHTML;
