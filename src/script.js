import { LEVEL_1, LEVEL_2, LEVEL_3 } from "../modules/mazes.js";
import { movePlayerUp, movePlayerDown, movePlayerRight, movePlayerLeft } from "../modules/movePlayer.js"
//coordinates of the player
let x
let y

let levelArray = [LEVEL_1, LEVEL_2, LEVEL_3]
let currentLevel = 0

//function for creating the game divs
const addGameDivs = (level,board) => {
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            let boardSquare = document.createElement("div")
            if(level[i][j] == "*") {
                boardSquare.classList.add("wall")
            }
            else if(level[i][j] == ".") {
                boardSquare.classList.add("path")
            }
            else if(level[i][j] == "S") {
                //the current coordinates of the player
                x = i
                y = j
                boardSquare.classList.add("player")
            }
            else {
                boardSquare.classList.add("treasure")
            }
            board.appendChild(boardSquare)
        }
    }
} 
// Creating/updating the game board
const startBoard = (level) => {
    let board = document.createElement("div")
    board.classList.add("board")
    let boardWidth = 20 * level[currentLevel].length
    board.style.width = `${boardWidth}px`
    document.querySelector("main").appendChild(board)
    addGameDivs(level,board) 
}
// delete the board
const deleteOldBoard = () => {
    let main = document.querySelector("main")
    main.innerHTML = ""
}
// function for switching levels once the maze is completed
const nextLevel = () => {
    alert("YOU WON")
    if(currentLevel<levelArray.length-1) {
            deleteOldBoard()
            currentLevel++
            startBoard(levelArray[currentLevel])
            }
}




//ad event listener to the page
document.body.addEventListener('keyup', (event) => {
    switch (event.code) {
        case "ArrowUp":
            movePlayerUp(levelArray[currentLevel],x,y)
            break;
        case "ArrowDown":
            movePlayerDown(levelArray[currentLevel],x,y,)
            break;
        case "ArrowRight":
            movePlayerRight(levelArray[currentLevel],x,y)
            break;
        case "ArrowLeft":
            movePlayerLeft(levelArray[currentLevel],x,y)
            break;
        default:
            break;
    }
})

export { startBoard, deleteOldBoard, nextLevel}

startBoard(levelArray[currentLevel])


