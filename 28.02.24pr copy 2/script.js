const header = document.querySelector('.header')
const box = document.querySelector('.box')
const boxItem = document.createElement('.div')


boxItem.classList.add('.box_item')
boxItem.innerText = 'This Is box Item'
box.append(boxItem)