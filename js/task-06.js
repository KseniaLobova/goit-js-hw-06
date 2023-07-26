const blurInput = document.querySelector('#validation-input')
// console.log(blurInput)
blurInput.addEventListener('blur', onBlureInput);


function onBlureInput(evt) {
    
    if (evt.currentTarget.value.length === Number(blurInput.dataset.length) ) {
      blurInput.classList.remove('invalid')
        blurInput.classList.add('valid')
    } else {
        blurInput.classList.remove('valid')
        blurInput.classList.add('invalid')
        
    }
}