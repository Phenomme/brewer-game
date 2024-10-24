const bodyElement = document.querySelector("body")
const page1h1Element = document.createElement("h1")
const  inputElement = document.createElement("input")
const addNameButton = document.createElement("button")




/*-------------------------------- Constants --------------------------------*/
let userName = ""
let secondScreenh1 = "The Crash"





/*-------------------------------- Variables --------------------------------*/

page1h1Element.textContent = "Cadet what is you name?: "
addNameButton.textContent = "Next"





/*------------------------ Cached Element References ------------------------*/








/*----------------------------- Event Listeners -----------------------------*/

addNameButton.addEventListener("click", handleGetUserName)





/*-------------------------------- Functions --------------------------------*/
const firstScreen = () => {
    bodyElement.appendChild(page1h1Element)
    page1h1Element.append(inputElement)
    bodyElement.appendChild(addNameButton)
}

function handleGetUserName() {
    userName = inputElement.value
    isNameAdded()
}
const clearPage = () => {
    document.body.innerHTML = ""
} 
const isNameAdded = () => {
    if (inputElement.value ) {
        clearPage()
        secondScreen()
    }
};
const secondScreen = () => {
 page1h1Element.innerText = secondScreenh1   
bodyElement.appendChild(page1h1Element)
const secondScreenPara = document.createElement("p")
secondScreenPara.innerText = `You wake up in your wrecked spaceship ${userName}, alarms blaring,
with limited time to act.`
bodyElement.appendChild(secondScreenPara)
console.log(userName, "dvsv")

}



// game progression

firstScreen()
handleGetUserName()
// clearPage()
isNameAdded()