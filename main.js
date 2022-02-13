const btn = document.querySelector('.btn')
const inputText = document.querySelector('.input__text')
let list  = document.querySelector('.list')
let listArr

if (!localStorage.listArr){
    listArr = []
} else {
    listArr = JSON.parse(localStorage.getItem('listArr'))
}

btn.addEventListener('click' , () =>{
    let textValue = inputText.value
    listArr.push(textValue)
    inputText.value = ` `
    updateLocal()
    console.log(listArr)
    fillList()
})

const createElement = (text, index) =>{
    return `
        <li class="list__item"> ${text}
        <button class="list__btn" onclick="deleteItem(${index})   " class="deleteBtn btn">Delete</button>
        </li>
    `
}


const fillList = () => {
    list.innerHTML = ' '
    if (listArr.length > 0) {
        listArr.forEach((item, index) =>{
            list.innerHTML += createElement(item, index)  
        })
    }
}
const deleteItem = index =>{
    listArr.splice(index, 1)
    fillList()
    updateLocal()
}
const updateLocal = () =>{
    localStorage.setItem('listArr', JSON.stringify(listArr))
}
fillList()