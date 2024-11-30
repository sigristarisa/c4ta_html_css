const btnOne = document.getElementById("button-one");
const textContainer = document.querySelector(".text-container");
const btnContainer = document.querySelector(".button-container");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const btnTwo = document.getElementById("button-two");
const btnThree = document.getElementById("button-three");

let counter = 0;
let childIndex = 0;

const createLaughs = (version) => {
  const laugh = "ha ";
  const num = Math.floor(Math.random() * 5) + 1;
  switch (version) {
    case "version 1":
      return laugh.repeat(num);
    case "version 2":
      return laugh.toLocaleUpperCase().repeat(num / 2) + laugh.repeat(num / 2);
    case "version 3":
      return laugh.toLocaleUpperCase().repeat(num);
  }
};

const displayBtn = (btn, counterNum) => {
  if (counter === counterNum) btn.style.display = "block";
};

// const moveEmojis = () => {
//   const emojis = document.getElementsByClassName("emoji");
//   emojis.forEach((emoji) =>
//     emoji.addEventListner("hover", () => {
//       console.log("hi");
//     })
//   );
// };

const changeText = () => {
  const targetText = textContainer.children[childIndex];
  targetText.textContent = "😆";
  targetText.classList.add("emoji");
  childIndex++;
};

const clickBtn = (btn, version, nextBtn, counterNum) => {
  btn.addEventListener("click", () => {
    const text = document.createElement("p");

    text.textContent = createLaughs(version);
    text.style.position = "absolute";
    text.style.top = `${Math.floor(Math.random() * windowHeight)}px`;
    text.style.left = `${Math.floor(Math.random() * windowWidth)}px`;
    textContainer.appendChild(text);
    counter++;

    nextBtn && displayBtn(nextBtn, counterNum);
    if (counter === 20) {
      setInterval(changeText, 1000);
    }
    if (counter === childIndex) clearInterval(setInterval(changeText, 1000));
  });
};

clickBtn(btnOne, "version 1", btnTwo, 10);
clickBtn(btnTwo, "version 2", btnThree, 20);
clickBtn(btnThree, "version 3", null, null);
