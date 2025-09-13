let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userS = document.querySelector("#user-score");
let compS = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin === true){
        userScore++;
        userS.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compS.innerText = compScore;
        console.log("you Lose!");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice = gencompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice === compChoice){
        console.log("Game was Draw.");
        msg.innerText = "Game was Draw. Play Again.";
        msg.style.backgroundColor="#80727B";
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener(("click"), ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was made",userChoice);
        playGame(userChoice);
    })

});
