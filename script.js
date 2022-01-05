//https://stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript/6840399

/*function createElements(numElements){
    var arr = [];
    for(let i = 0; i < numElements; i++){
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "white";
        div.innerHTML = i;
        arr.push(div);
    }
    return arr;
}

let arr = createElements(10);

console.log(arr);

function addElementsToPage(arr){
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('main').appendChild(arr[i]);
    }
}

addElementsToPage(arr)*/

console.log('Sorry , developers tools are blocked here....');

const facile = document.getElementById('facile-stats');
const normal = document.getElementById('normal-stats');
const difficile = document.getElementById('difficile-stats');

if(!localStorage.getItem('PB difficile') && !localStorage.getItem('difficile')){
    localStorage.setItem('PB difficile', 'N/D')
    localStorage.setItem('difficile', '0')
}if(!localStorage.getItem('PB normal') && !localStorage.getItem('normal')){
    localStorage.setItem('PB normal', 'N/D')
    localStorage.setItem('normal', '0')
}if(!localStorage.getItem('PB facile') && !localStorage.getItem('facile')){
    localStorage.setItem('PB facile', 'N/D')
    localStorage.setItem('facile', '0')
}

facile.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB facile') + '<br>Nombre de Sudokus Terminés: ' + localStorage.getItem('facile')
normal.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB normal') + '<br>Nombre de Sudokus Terminés: ' + localStorage.getItem('normal')
difficile.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB difficile') + '<br>Nombre de Sudokus Terminés: ' + localStorage.getItem('difficile')