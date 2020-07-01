export let randomValue = () => Math.floor(Math.random() * 256);
export let stringRgb = () =>
  `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;

let count = 0;

const btnList = document.querySelectorAll("a");

btnList.forEach((a) => {
  a.addEventListener("click", randomColor);
});

function randomColor(event) {
  count++;
  console.log("clicked", event.target.innerHTML, "count", count);

  btnList.forEach((a) => {
    a.style.backgroundColor = "#cccccc";
  });
  event.target.style.backgroundColor = stringRgb();
}
