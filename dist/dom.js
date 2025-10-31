const ul = document.querySelector("ul")
//  console.log(ul)
// console.log(title.innerText)
// console.log(title.textContent)
// console.log(title.innerHTML)
const li = document.createElement('li')
ul.append(li)
li.innerText='Voste'
// li.setAttribute('class','list-items')
li.classList.add('list-items')
// title.style.color = 'red'
// const container = document.querySelector('div')
// console.log(container) 
const list = document.getElementsByClassName("list-items")
console.log(list.textContext)
 for (i=0;i<list.length;i++){
    list.style.color='red'
 }