const newGameBtn = document.getElementById('newGameBtn')
const hintBtn = document.getElementById('hintBtn')

let cell0 = document.getElementById('cell-0')
let cell1 = document.getElementById('cell-1')
let cell2 = document.getElementById('cell-2')
let cell3 = document.getElementById('cell-3')

let cell4 = document.getElementById('cell-4')
let cell5 = document.getElementById('cell-5')
let cell6 = document.getElementById('cell-6')
let cell7 = document.getElementById('cell-7')

let cell8 = document.getElementById('cell-8')
let cell9 = document.getElementById('cell-9')
let cell10 = document.getElementById('cell-10')
let cell11 = document.getElementById('cell-11')

let cell12 = document.getElementById('cell-12')
let cell13 = document.getElementById('cell-13')
let cell14 = document.getElementById('cell-14')
let cell15 = document.getElementById('cell-15')

const cell = [
    [cell0, cell1, cell2, cell3], 
    [cell4, cell5, cell6, cell7],
    [cell8, cell9, cell10, cell11],
    [cell12, cell13, cell14, cell15]
]

const grid = [
    [
        [3, 2, 4, 1],
        [4, 1, 2, 3],
        [2, 3, 1, 4],
        [1, 4, 3, 2]       
    ],
    [
        [2, 3, 1, 4],
        [1, 4, 3, 2],
        [3, 2, 4, 1],
        [4, 1, 2, 3]       
    ],
    [
        [1, 4, 3, 2], 
        [2, 3, 1, 4],
        [4, 1, 2, 3], 
        [3, 2, 4, 1]
    ],
    [
        [4, 1, 2, 3], 
        [3, 2, 4, 1], 
        [1, 4, 3, 2], 
        [2, 3, 1, 4]
    ]
    
]

newGameBtn.addEventListener('click', startGame)


function startGame(){
    let newGrid = randomGrid(grid)
    for(let i = 0; i < 4 ; i++){
        for(let j = 0; j < 4; j++){
            cell[i][j].innerText = newGrid[i][j]
            cell[i][j].classList.add('show')
        }
    }randomRemoveGrids()
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var number = 0

function randomGrid(grid){
    let newGrid = []
    let number = getRndInteger(1, 4) 
    if(number === 1){
        newGrid = grid[0]
    }else if(number === 2){
        newGrid = grid[1]
    }else if(number === 3){
        newGrid = grid[2]
    }else{
        newGrid = grid[3]
    }
    
    return newGrid
}

function randomRemoveGrids(){
    for(let i = 0; i < 4; i++){
        var oldNumbers = []
        for(let j = 0; j < 2; j++){
            let number = getRndInteger(0,3)
            while(oldNumbers.includes(number)){
                number = getRndInteger(0,3)
            }
            cell[i][number].innerHTML = '';
            cell[i][number].classList.remove('show')
            hintBtn.innerHTML = i +' '+ number
            console.log(i + ' ' + number)
            oldNumbers.push(number)
            
        }
    }
}

function notSameNumber(newNum, oldNum){
    if(newNum === oldNum){
        return true
    }else {
        return false
    }
}






