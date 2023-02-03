let selectCardBox = document.querySelectorAll(".container__guess-color__card");
let randomColorToGuess = document.querySelector(".set-random-color");
let selectHexOrRgbColor = document.querySelector("select");
let setName = document.querySelectorAll(".name");
let setScore = document.querySelectorAll(".score");
let inputName = document.querySelector("input");
let arrayName = [];
let arrayScore = [];
let counter = 1;
let index;

//HEXA RANDOM COLOR
const randomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};
//RGB RANDOM COLOR
const randomRGB = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let RGBColor = "rgb(" + x + "," + y + "," + z + ")";

  return RGBColor;
};

//select options Hexa or RGB
selectHexOrRgbColor.addEventListener("change", () => {
  selectCardBox.forEach((item) => {
    item.style.visibility = "visible";
    item.style.pointerEvents = "auto";
    counter = 1;
  });
  if (selectHexOrRgbColor.value === "HEXA") {
    let arrayColorHex = [];

    for (let i = 0; i < selectCardBox.length; i++) {
      arrayColorHex[i] = randomColor();
      selectCardBox[i].style.backgroundColor = arrayColorHex[i];
    }
    index = Math.floor(Math.random() * 6);
    randomColorToGuess.innerHTML = arrayColorHex[index];
  } else if (selectHexOrRgbColor.value === "RGB") {
    let arrayColor = [];
    for (let i = 0; i < selectCardBox.length; i++) {
      arrayColor[i] = randomRGB();
      selectCardBox[i].style.backgroundColor = arrayColor[i];
    }
    index = Math.floor(Math.random() * 6);
    randomColorToGuess.innerHTML = arrayColor[index];
  }
});

selectCardBox.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (index !== i) {
      item.style.visibility = "hidden";

      counter++;
    } else {
      arrayName.unshift(inputName.value);
      for (let i = 0; i < 6; i++) {
        if (arrayName[i] !== undefined) {
          setName[i].innerHTML = arrayName[i];
        }
      }
      arrayScore.unshift(counter);

      for (let i = 0; i < 6; i++) {
        if (arrayScore[i] !== undefined) {
          setScore[i].innerHTML = arrayScore[i];
        }
      }
      alert("win, select new game");
      disableCard();
    }
  });
});

let disableCard = () => {
  selectCardBox.forEach((element) => {
    element.style.pointerEvents = "none";
  });
};
