const bodyElement = document.querySelector("body")
const h1Element = document.createElement("h1")
const  inputElement = document.createElement("input")
const addNameButton = document.createElement("button")




/*-------------------------------- Constants --------------------------------*/
let userName = inputElement.value






/*-------------------------------- Variables --------------------------------*/

h1Element.textContent = "Cadet what is you name?: "
addNameButton.textContent = "Next"





/*------------------------ Cached Element References ------------------------*/








/*----------------------------- Event Listeners -----------------------------*/

addNameButton.addEventListener("click", handleGetUserName)





/*-------------------------------- Functions --------------------------------*/
const firstScreen = () => {
    bodyElement.appendChild(h1Element)
    h1Element.append(inputElement)
    bodyElement.appendChild(addNameButton)
}

function handleGetUserName() {
    console.log(inputElement.value)
}
const clearPage = (...elements) => {
elements.forEach(element => {
    bodyElement.removeChild(element)
});
} 









// game progression

firstScreen()
handleGetUserName()
clearPage(h1Element, inputElement, addNameButton)
