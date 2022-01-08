const tutorial = document.getElementById('tutorial');
const t1 = document.getElementById('explanation');
const t2 = document.getElementById('tutorialContext');
const t3 = document.getElementById('goal');
const t4 = document.getElementById('ruleTitle');
const t5 = document.getElementById('firstRule');
const t6 = document.getElementById('secondRule');
const t7 = document.getElementById('grid4x4');
const t8 = document.getElementById('select');
const t9 = document.getElementById('insertNumber');
const t10 = document.getElementById('mistake');
const t11 = document.getElementById('verify');
const t12 = document.getElementById('moreExplanation');
const t13 = document.getElementById('playNow');

const nextBtn = document.getElementById('nextBtn');

grid = [1, 3, 4, 2, 
        4, 2, 1, 3,
        2, 4, 3, 1,
        3, 1, 2, 4]

//Creating the grid dynamically
var cell = []

function createCells(numCells){
    var idNumber = 0
    for(let i = 0; i < Math.sqrt(numCells); i++){
        for(let j = 0; j < Math.sqrt(numCells); j++){
            var div = document.createElement("div");
            //div.innerHTML = grid[idNumber]
            div.className = 'cell'
            div.id = 'cell-' + idNumber
            boldEverything(i, j, div)
            cell.push(div)
            idNumber++
        }
    }
    return cell;
}

let createdGrid = createCells(16)

//Makes border of certain cells thicker
function boldEverything(i, j, div){
    if(i == 0 || i == 2){
        div.style.borderTop = '.3vw black solid'
    }if(j == 0 || j == 2){
        div.style.borderLeft = '.3vw black solid'
    }if(j == 3){
        div.style.borderRight = '.3vw black solid'
    }if(i == 3){
        div.style.borderBottom = '.3vw black solid'
    }
    
}

//Brings the grid to the page
function addCellstoPage(arr){
    for(let i = 0; i < arr.length; i++){
        document.getElementById('grid').appendChild(arr[i])
    }
    
}

addCellstoPage(createdGrid)

console.log(createdGrid)

var tutorialNumber = 0;

function nextTutorial(){
    switch (tutorialNumber){
        case 0: 
            t1.classList.add('hidden');
            t2.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 1: 
            t2.classList.add('hidden');
            t3.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 2: 
            t3.classList.add('hidden');
            t4.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 3: 
            t5.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 4: 
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black')
            tutorialNumber++;
            break;
        case 5:
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            t6.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 6:
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black');
            tutorialNumber++;
            break;
        case 7:
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            t4.classList.add('hidden');
            t5.classList.add('hidden');
            t6.classList.add('hidden');
            t7.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 8:
            t7.classList.add('hidden');
            t8.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 9:
            t8.classList.add('hidden');
            t9.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black');
            tutorialNumber++;
            break;
        case 10:
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            tutorialNumber++;
            break;
        case 11:
            t9.classList.add('hidden');
            t10.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black');
            tutorialNumber++;
            break;
        case 12:
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            tutorialNumber++;
            break;
        case 13:
            t10.classList.add('hidden');
            t11.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black');
            tutorialNumber++;
            break;
        case 14:   
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            tutorialNumber++;
            break;
        case 15:
            t11.classList.add('hidden');
            t12.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black');
            tutorialNumber++;
            break;
        case 16: 
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            tutorialNumber++;
            break;
        case 17:
            t12.classList.add('hidden');
            t13.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            break;
    }
}

nextBtn.addEventListener('click', function(){nextTutorial()})