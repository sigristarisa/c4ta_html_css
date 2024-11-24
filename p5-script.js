const hi = document.createElement("input");
console.log("checkbox", hi);
const inputText = document.getElementById("text-input");
console.log("input", inputText);
//   const div = document.getElementById("container");
//   console.log("checkbox", checkbox);
//   console.log("div", div);

function setup() {
  createCanvas(100, 100);

  // Create a checkbox and place it beneath the canvas.
  checkbox = createCheckbox();
  checkbox.position(0, 100);

  describe(
    "A black square with a checkbox beneath it. The square turns white when the box is checked."
  );
}

function draw() {
  // Use the checkbox to set the background color.
  if (checkbox.checked()) {
    background(255);
  } else {
    background(0);
  }
}
