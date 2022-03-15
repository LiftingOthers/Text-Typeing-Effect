const arrayTexts = ["Lifting Others", "Youtube", "Channel"];
let count = 0;
let index = 0;
let currentText = "";
let position = "";

function textType() {
  if (arrayTexts.length == count) {
    count = 0;
  }

  currentText = arrayTexts[count];
  position = currentText.slice(0, index++);
  document.getElementById("text").textContent = position;
  if (currentText.length == position.length) {
    count++;
    index = 0;
  }
}

setInterval(textType, 1000);
