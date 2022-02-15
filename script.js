import { LEVEL_1, LEVEL_2, LEVEL_3 } from "./mazes.js";

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
// CREATING THE FIRST GAME BOARD
const startBoard = (level) => {
    let board = document.createElement("div")
    board.classList.add("board")
    let boardWidth = 20 * level[currentLevel].length
    board.style.width = `${boardWidth}px`
    document.querySelector("main").appendChild(board)
    addGameDivs(level,board) 
}
// DELETE OLD BOARD
const deleteOldBoard = () => {
    let main = document.querySelector("main")
    main.innerHTML = ""
}
//create a function to move the player
//manipulate the array and rewrite the board? get the coordinates of the player?, check if new coordinates is a wall

const movePlayerUp = (level) => {
    //this scenario if level[x-1][y] (new) != "*" (wall)
    if(level[x-1][y] != "*"){
        //check if its treasure and only make a move if its not
        if(level[x-1][y] == "T") {
            alert("YOU WON")
            if(currentLevel<levelArray.length-1) {
                deleteOldBoard()
                currentLevel++
                startBoard(levelArray[currentLevel])
            }
        }
        else {
            level[x][y] = "." //the old player position becomes a path
            x = x-1  //new player coordinates
            level[x][y] = "S"
            deleteOldBoard()
            startBoard(level)
        }
    } 
}
const movePlayerDown = (level) => { 
    if(level[x+1][y] != "*") {
        if(level[x+1][y] == "T") {
            alert("YOU WON")
            if(currentLevel<levelArray.length-1) {
                deleteOldBoard()
                currentLevel++
                startBoard(levelArray[currentLevel])
            }
        }
        else {
            level[x][y] = "." 
            x = x+1  
            level[x][y] = "S"
            deleteOldBoard()
            startBoard(level)
        }
    }
}
const movePlayerRight = (level) => { 
    if(level[x][y+1] != "*") {
        if(level[x][y+1] == "T") {
            alert("YOU WON")
            if(currentLevel<levelArray.length-1) {
                deleteOldBoard()
                currentLevel++
                startBoard(levelArray[currentLevel])
            }
        }
        else {
            level[x][y] = "." 
            y = y+1  
            level[x][y] = "S"
            deleteOldBoard()
            startBoard(level)
            }
    }
}
const movePlayerLeft = (level) => { 
    if(level[x][y-1] != "*") {
        if(level[x][y-1] == "T") {
            alert("YOU WON")
            if(currentLevel<levelArray.length-1) {
                deleteOldBoard()
                currentLevel++
                startBoard(levelArray[currentLevel])
            }
        } else {
            level[x][y] = "." 
            y = y-1  
            level[x][y] = "S"
            deleteOldBoard()
            startBoard(level)
        }   
    }
}


//ad event listener to the page
document.body.addEventListener('keyup', (event) => {
    switch (event.code) {
        case "ArrowUp":
            movePlayerUp(levelArray[currentLevel])
            break;
        case "ArrowDown":
            movePlayerDown(levelArray[currentLevel])
            break;
        case "ArrowRight":
            movePlayerRight(levelArray[currentLevel])
            break;
        case "ArrowLeft":
            movePlayerLeft(levelArray[currentLevel])
            break;
        default:
            break;
    }
})

startBoard(levelArray[currentLevel])


