const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns= document.querySelectorAll(".choiceBtn");

let player ;
let computer ;
let result ;
var i=0;
var k=0;

// ini();

choiceBtns.forEach(button => button.addEventListener("click",  ()   =>  {

    player= button.textContent;
    computerTurn();
    playerText.textContent =`Player : ${player}`;
   computerText.textContent =`Computer:  ${computer}`;
   resultText.textContent = checkWinner();
   
}));

function computerTurn(){
    const randNum= Math.floor(Math.random () * 3)+1 ;
    
        switch( randNum){
                case 1:
                    computer = "ROCK";
                    break;
                case 2:
                    computer = "PAPER";
                    break;
                case 3:
                    computer = "SCISSORS";
                    break;
        }
}
// function ini(){
//       document.getElementById("kkk").style.opacity = 0;
// }
// function final(){
//     var y= document.getElementById("kkk").style.opacity = 100;
// }
function checkWinner(){
   
    if(player===computer){
        return "Draw !";
    }
    else if(computer=="ROCK"){
        return (player=="PAPER")?  PlayerWin() : computrWin()
       
    }
    else if(computer=="PAPER"){
        return (player=="SCISSORS")? PlayerWin() : computrWin()
    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK")? PlayerWin() : computrWin()
    } 
}
function PlayerWin(){
    ++i;
    console.log ("player  => "  +i);
    if(i==5){
        i=0;
        return  "player fainal win "
    }
    else{
       
        return "YOU Win !"
    }
}  
function computrWin(){
    ++k;
    console.log ("computer => "  +k);
    if(k==5){
        k=0;
        return "computer fainal win "
    }
    else{
       
        return "YOU Lose !"
    }
}  
