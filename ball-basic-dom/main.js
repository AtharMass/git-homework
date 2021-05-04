// Completing the Game
const playingField = document.getElementById("playing-field")
const playingFieldStyle = getComputedStyle(playingField)
const playingFieldWidth = playingFieldStyle.width
const playingFieldHeight = playingFieldStyle.height

const block = document.getElementById("block")
const blockStyle = getComputedStyle(block)
const box = document.getElementById("box")
block.style.backgroundColor = "yellow"

block.style.left  = ""
block.style.top  = ""

let left = parseInt(block.style.left)|| 0 
let topx = parseInt(block.style.top)|| 0 

let step = 15
let margin = 20

const moveRight = function(){
    const blockWidth =  blockStyle.width
    const lessThan = parseInt(playingFieldWidth) -  parseInt(blockWidth)-15
    if(parseInt(block.style.left) < lessThan )
        left = left + step
    block.style.left =  left + "px"
}

const moveLeft = function (){
    if(parseInt(block.style.left)>=0)
        left = left - step
    block.style.left =  left + "px"
}

const moveUp = function (){
    if (parseInt(block.style.top) >= 0)
        topx = topx -step
    block.style.top =  topx + "px"
}

const moveDown = function (){
    const blockHeight =  blockStyle.height
    const lessThan = parseInt(playingFieldHeight) -  parseInt(blockHeight) - margin

    if (parseInt(block.style.top) <= lessThan)
        topx = topx + step
    block.style.top =  topx + "px"
}
