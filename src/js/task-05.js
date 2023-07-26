const textInput = document.querySelector('#name-input')
const textSpan = document.querySelector('#name-output')
textInput.addEventListener('input', onInput)

function onInput(evt) {
    // console.log(textInput.currentTarget.value)
    textSpan.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value === '') {
        textSpan.textContent = "Anonymous"
    }
}
    


