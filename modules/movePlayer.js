import { startBoard, deleteOldBoard, nextLevel} from "../src/script.js"

//a function to move the player aka change coordinates of S in the LEVEL array  . Move player, if new coordinates is not a wall

const movePlayerUp = (level,x,y) => {
    //this scenario if level[x-1][y] (new) != "*" (wall)
    if(level[x-1][y] != "*"){
        //check if its treasure and only make a move if its not
        if(level[x-1][y] == "T") {
            nextLevel()
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
const movePlayerDown = (level,x,y) => { 
    if(level[x+1][y] != "*") {
        if(level[x+1][y] == "T") {
            nextLevel()
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
const movePlayerRight = (level,x,y) => { 
    if(level[x][y+1] != "*") {
        if(level[x][y+1] == "T") {
            nextLevel()
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
const movePlayerLeft = (level,x,y) => { 
    if(level[x][y-1] != "*") {
        if(level[x][y-1] == "T") {
            nextLevel()
        } else {
            level[x][y] = "." 
            y = y-1  
            level[x][y] = "S"
            deleteOldBoard()
            startBoard(level)
        }   
    }
}

export { movePlayerUp, movePlayerDown, movePlayerRight, movePlayerLeft };