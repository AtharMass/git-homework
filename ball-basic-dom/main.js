// Completing the Game
const playingField = document.getElementById("playing-field")
const playing_field_style = getComputedStyle(playingField)
const playing_field_width = playing_field_style.width
const playing_field_height = playing_field_style.height

let down =  document.getElementById("down")

const block = document.getElementById("block")
const block_style = getComputedStyle(block)
const box = document.getElementById("box")
block.style.backgroundColor = "yellow"

document.getElementById("block").style.left  = ""
document.getElementById("block").style.top  = ""

let left = parseInt(block.style.left)|| 0 
let topx = parseInt(block.style.top)|| 0 

const moveRight = function(){
    const block_width =  block_style.width
    const lessThan = parseInt(playing_field_width) -  parseInt(block_width)-15
    if(parseInt(block.style.left) < lessThan )
        left = left + 15
    block.style.left =  left + "px"
}

const moveLeft = function (){
    if(parseInt(block.style.left)>=15)
        left = left - 15
    block.style.left =  left + "px"
}

const moveUp = function (){
    if(parseInt(block.style.top)>=0)
        topx = topx -15
    block.style.top =  topx + "px"
}

const moveDown = function (){
    const block_height =  block_style.height
    const lessThan = parseInt(playing_field_height) -  parseInt(block_height)-40
    console.log(lessThan)
    if(parseInt(block.style.top)<=lessThan)
    topx = topx + 15
    block.style.top =  topx + "px"
}
