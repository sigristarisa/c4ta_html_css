const spans = document.querySelectorAll(".wavy span");
const slider = document.getElementById("slider");

const updateBasePosition = (sliderValue) => {
  spans.forEach((span) => {
    // Update the CSS variable for base Y translation
    span.style.setProperty("--baseY", `-${sliderValue}px`);
  });
};

// Add event listener for slider input
slider.addEventListener("input", (event) => {
  const translateValue = event.target.value;
  updateBasePosition(translateValue);
});

// Set the initial base position
updateBasePosition(slider.value);
