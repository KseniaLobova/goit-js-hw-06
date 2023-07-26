
const counter = document.querySelector('#value');

let counterValue = 0;

console.log(counterValue)

const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action ="increment"]')

decrementBtn.addEventListener('click', (evt) => {
    counterValue -= 1;
    counter.textContent = counterValue
}

)
incrementBtn.addEventListener('click', (evt) =>{ counterValue += 1;
counter.textContent = counterValue})
console.log(decrementBtn)

