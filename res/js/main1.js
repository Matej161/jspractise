const point = document.getElementById("point");
const startButton = document.getElementById("startButton");
let gameInterval;
startButton.onclick = () => {
  hideElement(startButton);
  startGameInterval(point);
};

point.onclick = () => {
  hideElement(startButton);
  movePoint(point, getRandomNumber(50, 1200), getRandomNumber(50, 600));
};
const movePoint = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};

const hideElement = (element) => {
  element.style.display = "none";
};

const startGameInterval = (element) => {
  clearInterval(gameInterval);

  gameInterval = setInterval(() => {
    movePoint(element, getRandomNumber(50, 1200), getRandomNumber(50, 600));
  }, 550);
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
