import {ClientDides} from './dides.js'
import {client} from './dides.js'


const nameR = document.getElementById('name')
const email = document.querySelector('.textt')
const password = document.getElementById('password')
const formR = document.querySelector('.container form')

function set(){
    localStorage.setItem('dides', JSON.stringify(client))
}

function addDides(n,em, pass){
    client.push(new ClientDides(n,em, pass))
    set()
}

formR.addEventListener('submit', function(){
    if(nameR.value && email.value && password.value){
         addDides(nameR.value, email.value, password.value)
         formR.setAttribute('action', 'login.html')
    }
})