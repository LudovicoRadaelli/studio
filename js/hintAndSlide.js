/* HTML Hint 
        <button id="hint3-button" onclick="showHint(3)">Svolgimento n° 163</button>
        <div id="hint3" class="hint" style="display: none;">     
            <b class="gray">Svolgimento n° 163</b> 
        </div>
*/

/* HTML slide

    <div id="slide-container1" class="slide-container grayBorder">
        <div class="slide1">
            
        </div>
    </div>
    <div style="display: flex; flex-direction:row; justify-content: space-evenly; align-items: center;">
        <button id="previousSlide-button1" onclick="previousSlide(1)">Indietro</button>
        <button id="nextSlide-button1" onclick="nextSlide(1)">Avanti</button>
    </div> 

*/



//in questa var inserisco il parametro della slide che sto scorrendo
let currentSlide = 0;

function showHint(i) {
    for(let j = 1; j <= document.getElementsByClassName("hint").length; j++) {
        document.getElementById("hint"+j+"-button").style.display = "block";
        document.getElementById("hint"+j).style.display = "none";    
    }
    document.getElementById("hint"+i+"-button").style.display = "none";
    document.getElementById("hint"+i).style.display = "block";
    document.location.href = `#hint${i}`    
}  

let slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//inizializzo tutte le slide presenti
let slideContainer = document.getElementsByClassName(`slide-container`);
for(let i = 1; i <= slideContainer.length; i++) {
    inizialize(i);
}

//aggiungo la possibilità di scorrere le slide tramite frecce
document.addEventListener("keydown", (event) => {
    if(currentSlide !== 0) {
        if(event.key === "ArrowRight" && document.getElementById(`nextSlide-button${currentSlide}`).disabled === false) {
            nextSlide(currentSlide);
            console.log("hey")
        } else if(event.key === "ArrowLeft" && document.getElementById(`previousSlide-button${currentSlide}`).disabled === false) {
            previousSlide(currentSlide);
        }
    }
})


//funzione per passare alla slide successiva
function nextSlide(n) {
    
    //una volta spinto il button registro qual è il parametro delle slide che sto scorrendo
    currentSlide = n;

    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#slide-container${n}`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName(`slide${n}`)
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    slideIndex[n]++;

    if(slideIndex[n] !== 0 ) {
        //pulsante previous abiliatato
        document.getElementById(`previousSlide-button${n}`).disabled = false;
    }

    //se ci sono ancora slide da mostrare passo alla successiva
    if(slideIndex[n] < slide.length) {
        slide[slideIndex[n]].style.display = "block";
    }

    //le slide da mostrare sono finite. rendo nuovamente visibile l'ultima slide (altimenti sparisce)
    //e scrollo la vista al riquadro conclusiovo
    if(slideIndex[n]  === slide.length -1) {
        slide[slide.length-1].style.display = "block";
        document.getElementById(`nextSlide-button${n}`).disabled = true;  
    }

}
    
//funzione per passare alla slide successiva
function previousSlide(n) {

    //una volta spinto il button registro qual è il parametro delle slide che sto scorrendo
    currentSlide = n;

    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#slide-container${n}`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName(`slide${n}`)
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    slideIndex[n]--;


    //passo alla precedente. se è la prima slide disattivo il tasto previous
    slide[slideIndex[n]].style.display = "block";
    //slide[slideIndex[n]].style.fontSize = "1.1rem";
    if(slideIndex[n] === 0) {
        document.getElementById(`previousSlide-button${n}`).disabled = true;        
    } 

    //nel caso in cui il pulsante next sia disabilitato lo riattivo
    if(document.getElementById(`nextSlide-button${n}`).disabled === true) {
        document.getElementById(`nextSlide-button${n}`).disabled = false;  
    }
}


function inizialize(n) {

    slideIndex[n] = 0

    let slide = document.getElementsByClassName(`slide${n}`)

    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }

    //rendo visibile la prima slide
    slide[0].style.display = "block"

    //pulsante next disabled
    document.getElementById(`nextSlide-button${n}`).disabled = false;

    //pulsante previous disabled
    document.getElementById(`previousSlide-button${n}`).disabled = true;

}
