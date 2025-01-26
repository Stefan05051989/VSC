// opbouw veranderen naam in pagina : 
// identificeer h1 element en change link : 
const heading = document.querySelector(`h1`);
const changeNameLink = document.getElementById(`changeNameLink`);

// click functie op de link:
// change name link naar AEL (AEL = specifiek event dat een functie opzet wanneer een doel is gespecificeerd)
changeNameLink.addEventListener(`click`, function(event){
    //preventdefault : zorgt ervoor dat wanneer de functie niet wordt uitgevoerd de default actie niet wordt aangeroepen (stefan)
    event.preventDefault();
    // waarde hoeft niet verandert te worden, dus const ipv let. newname entry blijft hetzelfde
    const newName = prompt(`Enter your name : `);
    // if : nieuwe naam = textcontent na input, uitkomst + nieuwe naam.
    if(newName){
        heading.textContent = `Let's make sum drums ${newName}!`;
    }
});
function playSound(button){
    const soundPath = button.getAttribute("data-sound");
    const audio = new Audio(soundPath);
    audio.play();
}