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
destroyButton.addEventListener('click', destroyBoxes)

// let boxes = []
let boxSize = 20;

function creatBtn(evt) {
  
  const amount = Number(inputEl.value);
  console.log(amount)
  if (amount > 0 && amount <= 100) {
    creatBoxes(amount)
  }
}





function creatBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1){
  
    const creatEl = document.createElement('div')
    creatEl.style.width = `${boxSize}px`
    creatEl.style.height = `${boxSize}px`;
    boxSize += 10;
  
    creatEl.style.backgroundColor = getRandomHexColor()
    // boxes.push(creatEl)
     fragment.append(creatEl)
  }
 

  inputEl.value = 0;
  // container.append(...boxes)
  container.append(fragment)
 
}


function destroyBoxes() {
  container.innerHTML = '';
  boxSize = 20;
  inputEl.value = 0;
}





