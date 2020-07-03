
function computerPlay()
{
  const random = Math.floor(Math.random() * 3 )  ;
  if (random===0)
   {
      return ("rock")
  }
    else if(random===1)
  {
      return("paper")
  }
  else {return("scissors")}
}
function result(v){
    document.getElementById("result").textContent=v
}
function print(x){
    document.getElementById("dem").textContent = computerPlay();     
    document.getElementById("player").textContent = x; 
}


let player = document.querySelectorAll(".bt")
for(let i=0;i<player.length;i++){
    player[i].addEventListener('click',function (e){
        print(e.target.value)
       roundResult(e.target.value)
       round_no()
    }
    )

}

function roundResult(playerChoice){
    let comp = document.getElementById("dem").textContent 
    
    if (playerChoice==="paper"&&comp==="scissors" ||playerChoice==="scissors"&&comp==="rock" || playerChoice==="rock"&&comp==="paper")
{
 result("you lose")
 computerScores()
}
else if(playerChoice==="scissors"&&comp==="paper" ||playerChoice==="rock"&&comp==="scissors" || playerChoice==="paper"&&comp==="rock"){
      result("you win")
      playerScores()
}
else

{ result("it's a draw!")}



}
let round=0 
function round_no(){
 round+=1
    document.getElementById("round").textContent = round

}
function resetScore(){
    location.reload();

}
let playerPoint=0

function playerScores(){

playerPoint+=1
document.getElementById("playerscore").textContent=playerPoint

}
let computerPoint=0

function computerScores(){

computerPoint+=1
document.getElementById("compscore").textContent=computerPoint

}