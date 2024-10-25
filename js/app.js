const bodyElement = document.querySelector("body")
const pageH1Header = document.createElement("h1")
const pageh2Element = document.createElement("h2")
const inputElement = document.createElement("input")
const addNameButton = document.createElement("button")
const h3Header = document.createElement('h3')
const optionButton1 = document.createElement('button')
const optionButton2 = document.createElement('button')
const buttonContainer = document.createElement('div')
const screenParagraph = document.createElement("p")

const goodByText = document.createElement('p')
/*-------------------------------- Constants --------------------------------*/
let userName = ""
let secondScreenh1 = ""
let answerToTheFirstOption = '';
let answerToTheSecondOption = '';
let answerToTheThirdOption = ''

let win = 0
let lose = 0

/*-------------------------------- Variables --------------------------------*/

pageH1Header.textContent = "Cadet what is you name?: "
addNameButton.textContent = "Next"


//'searchWreckage', 'exitWreckage'
const searchWreckage = 'searchWreckage'
const exitWreckage = 'exitWreckage'

//'Leave and find Shelter', 'Stay inside'
const leaveToFindShelter = 'leaveToFindShelter'
const stayInside = 'stayInside'

//'Enter the cave', 'Search for new spot'
const enterTheCave = 'enterTheCave'
const searchForNewSpot = 'searchForNewSpot'

//playAgain, stopPlaying
const playAgain = 'playAgain'
const stopPlaying = 'stopPlaying'

//confrontThem, hide
const confrontThem = 'confronThem'
const hide = 'hide'

const returnToWreckage = 'returnToWreckage'
const stayHidden = 'stayHidden'

//'repairTheSystem', 'exploreFurther'
const repairTheSystem = 'repairTheSystem'
const exploreFurther = 'exploreFurther'

let answerToPlayAgain = true

/*------------------------ Cached Element References ------------------------*/
buttonContainer.classList.add = 'options'



/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
const clearPage = () => {
    //this is to remove everything inside the body
    bodyElement.innerHTML = null
}

function handleGetUserName() {
    const inputTextName = inputElement.value

    //check first what you want to happen
    if(inputTextName === "") {
        console.log('username is required')
        alert("username is required")
    } else {
        userName = inputTextName
        console.log(`${userName} has been assign to variable userName`)
        
        //clear the Page
        clearPage()
        secondScreen()
    }
}


//buttons
const handleCrash = event => {
    
    const option = event.target.id
    //'searchWreckage', 'exitWreckage'
    if(option === searchWreckage) {
        answerToTheFirstOption = searchWreckage
        console.log(answerToTheFirstOption)
        clearPage()
        thirdScreen()
    } else if (option === exitWreckage) {
        answerToTheFirstOption = exitWreckage
        clearPage()
        thirdScreen()
    }
}
const handleWreckage = event => {
    const option = event.target.id
    //'leaveToFindShelter', 'stayInside'
    //confrontThem, hide
    //returnToWreckage, stayHidden
    
    if(option === leaveToFindShelter) {
        answerToTheSecondOption = leaveToFindShelter
        console.log(answerToTheSecondOption)
        clearPage()
        fourthScreen()
    } else if (option === stayInside) {
        answerToTheSecondOption = stayInside
        console.log(answerToTheSecondOption)
        clearPage()
        fourthScreen()
    } else if (option === exitWreckage) {
        answerToTheSecondOption = stayInside
        clearPage()
        fourthScreen()
    } else if(option === confrontThem) {
        answerToTheSecondOption = confrontThem
        console.log(answerToTheSecondOption)
        clearPage()
        fourthScreen()
    }else if(option === hide) {
        answerToTheSecondOption = hide
        console.log(answerToTheSecondOption)
        clearPage()
        fourthScreen()
    } else if(option === returnToWreckage) {
        answerToTheThirdOption = returnToWreckage
        console.log(answerToTheThirdOption)
        clearPage()
        fifthScreen()
    } else if (option === stayHidden) {
        answerToTheThirdOption = stayHidden
        console.log(answerToTheThirdOption)
        clearPage()
        fifthScreen()
    }
}

const handleStayInsideOrExploreFurther = event => {
    const option = event.target.id
    
    //repairTheSystem,exploreFurther

   
    if(option === repairTheSystem) {
        answerToTheThirdOption = repairTheSystem
        console.log(answerToTheThirdOption)
        clearPage()
        fifthScreen()
    } else if (option === exploreFurther) {
        answerToTheThirdOption = exploreFurther
        console.log(answerToTheThirdOption)
        clearPage()
        fifthScreen()
    }
}

const handleEnterCave = event => {
    const option = event.target.id
    //enterTheCave, searchForNewSpot

    if(option === enterTheCave) {
        answerToTheThirdOption = enterTheCave
        console.log(answerToTheSecondOption)
        clearPage()
        fifthScreen()
    } else if (option === searchForNewSpot) {
        answerToTheThirdOption = searchForNewSpot
        clearPage()
        fifthScreen()
    }
}

const handlePlayAgain = (event) => {
    const option = event.target.id
    console.log(option)
    if(option === playAgain) {
        answerToPlayAgain = true
        window.location.reload()
    } else {
        answerToPlayAgain = false
        alert('Ok Goodbye!')
        clearPage()

        goodByText.innerText = `Game Still on development... Thank You for playing`
        bodyElement.append(goodByText)
    }
}

const handleOptionCreation = (optionButton1Text, optionButton2Text, choice, choice2) => {
    


    //optionButton1.innerText = 'Search the Wreckage'
    optionButton1.innerText = optionButton1Text
    //optionButton2.innerText = 'Exit Wreckage'
    optionButton2.innerText = optionButton2Text

    optionButton1.setAttribute('id', choice)
    optionButton2.setAttribute('id', choice2)

    buttonContainer.appendChild(optionButton1)
    buttonContainer.appendChild(optionButton2)

    bodyElement.appendChild(buttonContainer)

}

const updateConversation = (h1, paragraph, h3) => {
    //update title
    bodyElement.appendChild(h1)
    //update the paragraph
    bodyElement.appendChild(paragraph)
    //update question
    bodyElement.appendChild(h3)
}

const firstScreen = () => {

    //add the title
    bodyElement.appendChild(pageH1Header)
    //add the input text
    bodyElement.appendChild(inputElement)
    //addNameButton
    bodyElement.appendChild(addNameButton)

    //added the first event
    addNameButton.addEventListener("click", handleGetUserName)

}


const secondScreen = () => {
    
    //will only execute if userName value is not equals to false
    
    if(userName !== "") {
        //update the title
        pageH1Header.innerText = 'The Crash'
        screenParagraph.innerText = 
            `You wake up in your wrecked spaceship ${userName}, alarms blaring,
            with limited time to act.`
            h3Header.innerText = 'What do you do first ?'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        
        handleOptionCreation('Search the Wreckage', 'Exit Wreckage', searchWreckage, exitWreckage)
        
        
        const doIt = [optionButton1, optionButton2].forEach( button => {
            button.addEventListener('click', handleCrash)
        })
        doIt()

    } else {
        alert('name cannot be empty')
    }
   
}

const thirdScreen = () => {
    if(answerToTheFirstOption === searchWreckage) {
        //user select searchWreckage
        pageH1Header.innerText = `Search the Wreckage`
        screenParagraph.innerText = 
        `${userName} you find the oxygen tank, but night is approaching faster than expected
        do you leave the wreckage to search for shelter or stay inside ?`
        
        h3Header.innerText = 'What do you do second ?'

        updateConversation(pageH1Header, screenParagraph, h3Header)

        handleOptionCreation('Leave to find Shelter', 'Stay inside', leaveToFindShelter, stayInside)

        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handleWreckage))
        doIt()

    } else if (answerToTheFirstOption === exitWreckage) {
        //user select exitWreckage
        pageH1Header.innerText = `Leave the Wreckage`
        screenParagraph.innerText = 
        `${userName} you see alien creatures approaching. Do you confront the creatures or hide ?`
        
        h3Header.innerText = 'What do you do second ?'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        handleOptionCreation('Confront them', 'Hide', confrontThem, hide)

        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handleWreckage))
        doIt()
    } else {
        //do nothing
        console.log('test')
    }
}

const fourthScreen = () => {

    
    if(answerToTheSecondOption === leaveToFindShelter) {
        
        //user select leaveToFindShelter
        pageH1Header.innerText = `Leave to find Shelter`
        screenParagraph.innerText = 
        `${userName} You encounter dangerous alien creatures in the distance but find a cave.`
        
        h3Header.innerText = 'What do you do third ?'

        updateConversation(pageH1Header, screenParagraph, h3Header)

        handleOptionCreation('enter the cave', 'Search for a new spot', enterTheCave, searchForNewSpot)

        //optionButton1.addEventListener('click', handleEnterCave)
        
        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handleEnterCave))
        doIt()

    } else if (answerToTheSecondOption === stayInside) {
        //user select leaveToFindShelter
        pageH1Header.innerText = `Stay Inside`
        screenParagraph.innerText = 
        `${userName} You survived the night but the risk long term exposure to the environment..`
        
        h3Header.innerText = 'What do you do third ?'

        updateConversation(pageH1Header, screenParagraph, h3Header)

        handleOptionCreation('Repair the System', 'Explore Further', repairTheSystem, exploreFurther)

        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handleStayInsideOrExploreFurther))
        doIt()

    }else if (answerToTheSecondOption === exitWreckage) {
        console.log(leaveToFindShelter, 'this is the fourth screen exitWreckage')
    } else if(answerToTheSecondOption === confrontThem){
        
        //user select leaveToFindShelter
        pageH1Header.innerText = `Confront Them`
        screenParagraph.innerText = 
        `${userName} You scare them off but sustain injuries. after 2 hours the creatures poison killed you`
        
        h3Header.innerText = 'You Lose ! Do you want to play again'

        updateConversation(pageH1Header, screenParagraph, h3Header)

        handleOptionCreation('Play Again', 'Stop Playing', playAgain, stopPlaying)

        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handlePlayAgain))
        doIt()

    }else if(answerToTheSecondOption === hide){
        
        //user select leaveToFindShelter
        pageH1Header.innerText = `Hide`
        screenParagraph.innerText = 
        `${userName} You find a safe hiding spot but lose track of the time`
        
        h3Header.innerText = 'What do you do third ?'

        updateConversation(pageH1Header, screenParagraph, h3Header)

        handleOptionCreation('Return to Wreckage', 'Stay Hidden', returnToWreckage, stayHidden)

        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handleWreckage))
        doIt()

    } else {
        console.log('test fourth')
    }
}


const fifthScreen = () => {
    if(answerToTheThirdOption === enterTheCave) {
        
        //user select leaveToFindShelter
        pageH1Header.innerText = `Enter the Cave`
        screenParagraph.innerText = 
        `${userName} after a year.. search and rescue team found you in the cave and brought you back to your planet`
        
        h3Header.innerText = 'You Survived ! Do you want to play again'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        

        handleOptionCreation('Play Again', 'Stop Playing', playAgain, stopPlaying)

        
        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handlePlayAgain))
        doIt()
    } else if (answerToTheThirdOption === searchForNewSpot) {
        
        //user select leaveToFindShelter
        pageH1Header.innerText = `Searching for New Spot`
        screenParagraph.innerText = 
        `${userName} while searching for new spot you found a glowing mushroom and you ate it then you die`
        
        h3Header.innerText = 'You Lose ! Do you want to play again'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        

        handleOptionCreation('Play Again', 'Stop Playing', playAgain, stopPlaying)

        
        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handlePlayAgain))
        doIt()

    } else if (answerToTheThirdOption === returnToWreckage) {
        //user select returnToWreckage
        pageH1Header.innerText = `Return to Wreckage`
        screenParagraph.innerText = 
        `${userName} you went to the wreckage and millions of creatures are there but rescue team is there as well after almost 2 hours of war the creatures were eradicated and you return to your home planet safely`
        
        h3Header.innerText = 'You Survived ! Do you want to play again'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        

        handleOptionCreation('Play Again', 'Stop Playing', playAgain, stopPlaying)

        
        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handlePlayAgain))
        doIt()
    }else if (answerToTheThirdOption === stayHidden) {
        //user select stayHidden
        pageH1Header.innerText = `Stay Hidden`
        screenParagraph.innerText = 
        `${userName} You survived for the next 4 days but died on the fifth`
        
        h3Header.innerText = 'You Lose ! Do you want to play again'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        

        handleOptionCreation('Play Again', 'Stop Playing', playAgain, stopPlaying)

        
        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handlePlayAgain))
        doIt()
    } else if (answerToTheThirdOption === repairTheSystem) {
        //user repaired the system
        pageH1Header.innerText = `Repair The System`
        screenParagraph.innerText = 
        `${userName} After repairing the system you established connection with your planet and sent the rescue team `
        
        h3Header.innerText = 'You Survived ! Do you want to play again'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        

        handleOptionCreation('Play Again', 'Stop Playing', playAgain, stopPlaying)

        
        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handlePlayAgain))
        doIt()
    } else if (answerToTheThirdOption === exploreFurther) {
        //user exploredFurther
        pageH1Header.innerText = `Explore Further`
        screenParagraph.innerText = 
        `${userName} after 2 months of exploring an asteroid hits the planet.. and you die`
        
        h3Header.innerText = 'You Lose ! Do you want to play again'

        updateConversation(pageH1Header, screenParagraph, h3Header)
        

        handleOptionCreation('Play Again', 'Stop Playing', playAgain, stopPlaying)

        
        const doIt = [optionButton1, optionButton2].forEach( button => button.addEventListener('click', handlePlayAgain))
        doIt()
    } else {
        console.log(answerToTheThirdOption)
        console.log('test fifth')
    }
}

firstScreen()
