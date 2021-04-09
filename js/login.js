const loginEmail = document.querySelector('.login-email')
const loginPassword = document.getElementById('login-password')
const form2 = document.querySelector('.container2 form')

let getIt = localStorage.getItem('dides')
getIt = JSON.parse(getIt)

let checkEmail = getIt.map(e => e.email)
let checkPassword = getIt.map(p => p.password)

form2.addEventListener('submit', function(){

    if(loginEmail.value == checkEmail && loginPassword.value == checkPassword){
        form2.setAttribute('action', 'chat.html')
    } else {
        alert('email and password must be the same registered')
    }
})