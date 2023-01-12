
let input = document.querySelectorAll('input')
let mensage = document.querySelector('textarea')
let button = document.querySelector('button')
let verificação = 0

input[0].addEventListener('input', function(){
    if(input[0].value.length == 0){
        input[0].style.borderColor = 'red'
    } else if(input[0].value.length >= 2){
        input[0].style.borderColor = 'green'
    }
})


input[1].addEventListener('input', function(){
    if(input[1].value.length == 0){
        input[1].style.borderColor = 'red'
    } else if(input[1].value.length > 1){
        input[1].style.borderColor = 'green'
    }
})

input[2].addEventListener('input', function(){
    if(input[2].value.length <= 10){
        input[2].style.borderColor = 'red'
    } else if(input[2].value.length >= 11){
        input[2].style.borderColor = 'green'
    }
})

mensage.addEventListener('input', function(){
    if(mensage.value.length >= 1){
        mensage.style.borderColor = 'green'
    } else if(mensage.value.length == 0){
        mensage.style.borderColor = 'red'
    }
})











