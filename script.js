//https://stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript/6840399

//Dynamically creating divs test

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

//calling all html elements
const facile = document.getElementById('facile-stats');
const normal = document.getElementById('normal-stats');
const difficile = document.getElementById('difficile-stats');
const statsBtn = document.getElementById('statsBtn');
const stats = document.getElementById('statistiques');

//stats
if(!localStorage.getItem('PB difficile') && !localStorage.getItem('difficile')){
    localStorage.setItem('PB difficile', 'N/D');
    localStorage.setItem('difficile', '0');
}if(!localStorage.getItem('PB normal') && !localStorage.getItem('normal')){
    localStorage.setItem('PB normal', 'N/D');
    localStorage.setItem('normal', '0');
}if(!localStorage.getItem('PB facile') && !localStorage.getItem('facile')){
    localStorage.setItem('PB facile', 'N/D');
    localStorage.setItem('facile', '0');
}

facile.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB facile') + '<br>Nombre de Sudokus terminés: ' + localStorage.getItem('facile');
normal.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB normal') + '<br>Nombre de Sudokus terminés: ' + localStorage.getItem('normal');
difficile.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB difficile') + '<br>Nombre de Sudokus terminés: ' + localStorage.getItem('difficile');

statsBtn.addEventListener('click', function(){
    if(stats.classList.contains('none'))stats.classList.remove('none');
    if(stats.classList.contains('hidden'))stats.classList.remove('hidden');
    else if(!stats.classList.contains('hidden'))stats.classList.add('hidden');
});

//moving image in home page
const image = document.getElementById('image');

//function to make it move with scrollY
function trackScrollPosition() {
  var y = parseFloat(window.scrollY);
  let position = y/15 + 20;
  image.style.objectPosition = `0 ${position}%`;
}

window.addEventListener('scroll', function(){trackScrollPosition()});

//Easter egg
var easterEgg = 0;
document.getElementById('easterEgg').addEventListener('click', function(){
    easterEgg++;
    if(easterEgg>=2022){
        localStorage.setItem('facile', '2022');
        localStorage.setItem('normal', '2022');
        localStorage.setItem('difficile', '2022');
        localStorage.setItem('easterEgg', 'true');
        document.body.style.backgroundImage = 'url("")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.width = 'calc(100vw - 17px)';
        document.body.style.heigth = '100vh';
        document.body.style.objectFit = 'cover';
    }
})

if(localStorage.getItem('easterEgg') == 'true'){
    document.body.style.backgroundImage = 'url("")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.width = 'calc(100vw - 17px)';
    document.body.style.heigth = '100vh';
    document.body.style.objectFit = 'cover';
}
