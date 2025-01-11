
function playGame(playerChoice){
    const choices = ["Rock","Paper","Scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    // math.floor vanwege oneven getal, math.random om random keuze te maken.
    console.log(computerChoice);
    let.result;
    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }else if( 
        (playerChoice === "Rock" && computerChoice === "Scissors")||
        (playerChoice === "Paper" && computerChoice === "Rock")||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        result = "You Win";
    } else {
        result = "You Lose";
    }
    resultDisplay.textContent = `Result: ${result}`;
}
