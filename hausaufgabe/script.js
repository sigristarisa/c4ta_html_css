const spans = document.querySelectorAll(".wavy span");
const slider = document.getElementById("slider");
const stopSwitch = document.getElementById("stop-switch");

const updateBasePosition = (sliderValue) => {
  spans.forEach((span) => {
    span.style.setProperty("--baseY", `-${sliderValue}px`);
  });
};
stopSwitch.addEventListener("input", (event) => {
  event.target.checked
    ? updateBasePosition(0)
    : updateBasePosition(slider.value);
});

slider.addEventListener("input", (event) => {
  const translateValue = event.target.value;

  stopSwitch.checked
    ? updateBasePosition(0)
    : updateBasePosition(translateValue);
});

updateBasePosition(slider.value);
