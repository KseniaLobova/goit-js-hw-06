const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault();

   
const { email, password } = evt.currentTarget.elements;
    console.log(email.value);

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповненні')
    }
    const data = {
        email: email.value,
        password : password.value
    }
    console.log(data)
    formEl.reset()
}