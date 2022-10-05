// Create Event Listener
const playButton =  document.querySelector('.play')
const pauseButton =  document.querySelector('.pause')
const resetButton =  document.querySelector('.reset')

playButton.addEventListener('click' , start)
pauseButton.addEventListener('click' , pause)
resetButton.addEventListener('click', reset)

//Declare Variable to use in our functions
let startTime
let elapsedTime = 0 
let timeInterval 

//conver time to a format of hours , min and milliseconds

function timeToString(time){
    let diffInHrs = time / 3600000
    let hh = Math.floor(diffInHrs)

    let diffInMin = (diffInHrs - hh) * 60
    let mm = Math.floor(diffInMin)

    let diffInSec = (diffInMin - mm) * 60
    let ss = Math.floor(diffInSec)

    let diffInMs = (diffInSec - ss) * 100
    let ms = Math.floor(diffInMs)

    let formatedMM = mm.toString().padStart(2,'0')
    let formatedSS = ss.toString().padStart(2,'0')
    let formatedMS = ms.toString().padStart(2,'0')

    return `${formatedMM}:${formatedSS}:${formatedMS}`

}

function showButton(buttonKey){
    const buttonToShow = buttonKey === 'play' ? playButton : pauseButton
    const buttonToHide = buttonKey === 'play' ? pauseButton : playButton
    buttonToShow.style.display = 'block'
    buttonToHide.style.display = 'none'
}   

// Function to modify innerHTML
function print(txt){
    document.getElementById('display').innerHTML = txt
}

// Function to Start , pause and reset 
function start(){
    startTime = Date.now() - elapsedTime
    timeInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime
        print(timeToString(elapsedTime))
    },10)
    showButton('pause')
}

function pause(){
    clearInterval(timeInterval)
    showButton('play')
}

function reset(){
    clearInterval(timeInterval)
    print('00:00:00')
    elapsedTime = 0
    showButton('play')
}