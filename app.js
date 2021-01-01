//Color Controls

const redButton = document.getElementById('redBtn')
const blueButton = document.getElementById('blueBtn')
const greenButton = document.getElementById('greenBtn')


redButton.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'red'
})

blueButton.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'blue'
})

greenButton.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'green'
})



//Count Controls

var count = 0;
var subtractBtn = document.getElementById('subtract')
var addBtn = document.getElementById('add')





subtractBtn.addEventListener('click', () =>{
    count--
    document.getElementById('counter').innerText = count;
})


addBtn.addEventListener('click', () =>{
    count++
    document.getElementById('counter').innerText = count;
})










// Count controls
var count = 0;
var subtractBtn = document.getElementById("subtract")
var addBtn = document.getElementById("add")

subtractBtn.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})