const textInput = document.querySelector('#font-size-control')
const textSpan = document.querySelector('#text')

textInput.addEventListener('input', onChangeFontSize)

// console.log(textInput)

function onChangeFontSize(evt) {
    textSpan.style.fontSize = evt.currentTarget.value + 'px';
    
  console.log(evt.currentTarget.value)
}