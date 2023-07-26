function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const creatButton = document.querySelector('button[data-create')
const destroyButton = document.querySelector('button[data-destroy')
const container = document.querySelector('#boxes')
const div = document.querySelector('#controls')
const inputEl = div.firstElementChild




creatButton.addEventListener('click', creatBtn)

let boxes = []
let boxSize = 30;

function creatBtn(evt) {
  
  const amount = Number(inputEl.value);
  console.log(amount)
  if (amount > 0 && amount <= 100) {
    creatBoxes(amount)
  }
}





function creatBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
  
    let creatEl = document.createElement('div')
    creatEl.style.width = `${boxSize}px`
    creatEl.style.height = `${boxSize}px`;
    boxSize += 10;
  
    creatEl.style.backgroundColor = getRandomHexColor()
    boxes.push(creatEl)
  }

  container.append(...boxes)
  console.log(container)
}

destroyButton.addEventListener('click', destroyBoxes)
function destroyBoxes(evt) {
  container.innerHTML = '';
  inputEl.value = ''
}