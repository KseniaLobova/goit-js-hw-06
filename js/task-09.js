function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color')
const bodyColor = document.body;
const spanColor = document.querySelector('.color')

changeColorBtn.addEventListener('click', changeColor)

function changeColor(evt) {
  console.log(evt.currentTarget.textContent)
  bodyColor.style.backgroundColor = getRandomHexColor()
  evt.currentTarget.textContent = bodyColor.style.backgroundColor
}