const bodyElement = document.querySelector("body")
const page1h1Element = document.createElement("h1")
const pageh2Element = document.createElement("h2")
const inputElement = document.createElement("input")
const addNameButton = document.createElement("button")
const h3Question = document.createElement('h3')
const optionButton1 = document.createElement('button')
const optionButton2 = document.createElement('button')
const buttonContainer = document.createElement('div')
    



/*-------------------------------- Constants --------------------------------*/
let userName = ""
let secondScreenh1 = "The Crash"
let answerToTheFirstOption = '';
let answerToTheSecondOption = '';
let answerToTheThirdOption = '';


/*-------------------------------- Variables --------------------------------*/

page1h1Element.textContent = "Cadet what is you name?: "
addNameButton.textContent = "Next"





/*------------------------ Cached Element References ------------------------*/
buttonContainer.classList.add = 'options'







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
    //this is to remove everything inside the body
    document.body.innerHTML = ""
} 
const isNameAdded = () => {
    if (inputElement.value ) {
        clearPage()
        secondScreen()
    }
};

const handleFirstAnswer = (event) => {
    
    const selectedOptionValue = event.target.id
    
    if(selectedOptionValue === 'firstOption1') {
        answerToTheFirstOption = selectedOptionValue
        isFirstQuestionAnswered(selectedOptionValue)
    } else if(selectedOptionValue === 'secondOption1') {
        answerToTheFirstOption = selectedOptionValue
        isFirstQuestionAnswered(selectedOptionValue)
    }
    
}

const handleSecondAnswer = (event) => {
    
    const selectedOptionValue = event.target.id
    console.log(selectedOptionValue)
    if(selectedOptionValue === 'firstOption2') {
        answerToTheSecondOption = selectedOptionValue
        isSecondQuestionAnswered(selectedOptionValue)
    } else if(selectedOptionValue === 'secondOption2') {
        answerToTheSecondOption = selectedOptionValue
        isSecondQuestionAnswered(selectedOptionValue)
    }
    
}

const handleThirdAnswer = (event) => {
    
    const selectedOptionValue = event.target.id
    console.log(selectedOptionValue)
    if(selectedOptionValue === 'firstOption3') {
        answerToTheThirdOption = selectedOptionValue
        isThirdQuestionAnswered(selectedOptionValue)
    } else if(selectedOptionValue === 'secondOption3') {
        answerToTheThirdOption = selectedOptionValue
        isThirdQuestionAnswered(selectedOptionValue)
    }
    
}

const isFirstQuestionAnswered = (answerToTheFirstOptionParameter) => {
    
    if(answerToTheFirstOptionParameter ===  'firstOption1') {
        clearPage()
        //go the next step
        page1h1Element.innerText = `Search for Oxygen`
        
        pageh2Element.innerText = 
        `${userName} you find the oxygen tank, but night is approaching faster than expected
        do you leave the wreckage to search for shelter or stay inside ?`
        


        h3Question.innerHTML = 'What do you do second ? leave to find shelter stay in the wreckage'


        

        bodyElement.appendChild(page1h1Element)
        bodyElement.appendChild(pageh2Element)
        bodyElement.appendChild(h3Question)

        handleOptionCreation('leave shelter', 'stay in Wreckage', 'firstOption2', 'secondOption2')


    }
}

const isSecondQuestionAnswered = (answerToTheSecondOptionParameter) => {

    console.log(answerToTheSecondOptionParameter)
    if(answerToTheSecondOptionParameter ===  'firstOption2') {
        clearPage()
        //go the next step
        page1h1Element.innerText = `Alien Creature`
        
        pageh2Element.innerText = 
        `${userName} You encounter dangerous alien creatures in the distance but find a cave.`
        


        h3Question.innerHTML = 'Enter the cave(leads to new challenges inside). or Search for a new spot(danger of exposure to elements).'


        

        bodyElement.appendChild(page1h1Element)
        bodyElement.appendChild(pageh2Element)
        bodyElement.appendChild(h3Question)

        handleOptionCreation('Enter cave', 'Search for new spot', 'firstOption3', 'secondOption3')


    }
}



const isThirdQuestionAnswered = (answerToTheThirdOptionParameter) => {
    console.log(answerToTheThirdOptionParameter, "test test")
    if(answerToTheThirdOptionParameter ===  'firstOption3') {
        clearPage()
        // go the next step
        page1h1Element.innerText = `The Encounter`
        
        pageh2Element.innerText = 
        `${userName} You encounter dangerous alien creatures in the distance but find a cave.`
        


        h3Question.innerHTML = 'Enter the cave(leads to new challenges inside). or Search for a new spot(danger of exposure to elements).'


        

        bodyElement.appendChild(page1h1Element)
        bodyElement.appendChild(pageh2Element)
        bodyElement.appendChild(h3Question)

        handleOptionCreation('Enter cave', 'Search for new spot', 'firstOption4', 'secondOption4')
        

    }
}

const handleOptionCreation = (optionButton1Text, optionButton2Text, firstChoice, secondChoice) => {
    


    //optionButton1.innerText = 'Search the Wreckage'
    optionButton1.innerText = optionButton1Text
    //optionButton2.innerText = 'Exit Wreckage'
    optionButton2.innerText = optionButton2Text

    optionButton1.setAttribute('id', firstChoice)
    optionButton2.setAttribute('id', secondChoice)

    buttonContainer.appendChild(optionButton1)
    buttonContainer.appendChild(optionButton2)

    bodyElement.appendChild(buttonContainer)

}

const secondScreen = () => {
 page1h1Element.innerText = secondScreenh1   
bodyElement.appendChild(page1h1Element)
const secondScreenPara = document.createElement("p")
secondScreenPara.innerText = `You wake up in your wrecked spaceship ${userName}, alarms blaring,
with limited time to act.`
bodyElement.appendChild(secondScreenPara)
bodyElement.append(h3Question.innerHTML = 'What do you do first \n')


handleOptionCreation('Search the Wreckage', 'Exit Wreckage', 'firstOption1', 'secondOption1')





buttonContainer.addEventListener('click', handleFirstAnswer)
console.log(buttonContainer)
buttonContainer.addEventListener('click', handleSecondAnswer)
buttonContainer.addEventListener('click', handleThirdAnswer)
}



// game progression

firstScreen()
handleGetUserName()
// clearPage()
isNameAdded()
isFirstQuestionAnswered()
isSecondQuestionAnswered()
isThirdQuestionAnswered()