import './less/index.less'

// Your code goes here!


//click -1

document.body.addEventListener('click', event => {
    event.target.style.rotate = '3600deg'
    event.target.stopPropogation()
})

//mouseover -2 

document.body.addEventListener('mouseover', event => {
    event.target.style.translate = '15px'
    event.target.style.transition = '1s ease-in'
    event.stopPropogation()
})

// keydown - 3
window.addEventListener('keydown', event =>{
    document.querySelector('h1').textContent = 'Dont touch the keyboard'
})

// wheel - 4
window.addEventListener('wheel', event => {
    event.target.style.translate = '-15px'
    event.target.style.transition = '1s ease-in'
})

//copy - 5
window.addEventListener('copy', event => {
    event.target.style.backgroundColor = 'yellow'
    event.target.style.opacity = '80%'
    
})

//dblclick - 6

document.body.addEventListener('dblclick', event => {
    event.target.textContent = 'Please dont double click'
})

//resize - 7

window.addEventListener('resize', event => {
    document.querySelector('h1').textContent = 'window has been resized'
})

// click with alert -8

document.querySelector('.logo-heading').addEventListener('click', event => {
    alert(`a click happened on the h1`)
})

// select -9 

document.addEventListener('select', event => {
    event.target.style.color = 'red'
})

// focus -10 

document.addEventListener('focus', event => {
    event.target.style.translate = '5px'
})

// blur -11
document.addEventListener('blur', event => {
    event.target.style.translate = '-5px'
})

