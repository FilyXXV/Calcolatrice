const display = document.getElementById("display")
 

function action(input){
    display.value += input
}

function calculate(){
    display.value = eval(display.value)
}

function deletetext(){
    display.value=""
}