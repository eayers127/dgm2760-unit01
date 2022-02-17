
//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"
//document.getElementById('slogan').innerHTML = "Best Breakfast Around"

document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best Breakfast Around"


let person = prompt("Please enter your name")

if (person != null) {
    document.getElementById('demo').innerHTML = 
    `Hello ${person}, Welcome to Joe's`
}