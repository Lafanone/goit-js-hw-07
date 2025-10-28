const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const emailInput = form.elements.email
    const passwordIput = form.elements.password
    const emailValue = emailInput.value.trim()
    const passwordValue = passwordIput.value.trim()
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in')
        return
    }
    const formData = {
        email: emailValue,
        password: passwordValue,
    }
    console.log(formData)
    form.reset()
}
