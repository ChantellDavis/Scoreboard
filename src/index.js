let scoreLeft = document.getElementById("score-left")
let scoreRight = document.getElementById("score-right")
let startOver = document.getElementById("start-over")
let homeTitle = document.getElementById("home-title")
console.log(scoreRight)
let count = 0

function one() {
   count += 1
    scoreLeft.innerText = count
    if (count > 10) {
       alert("you're ahead LETS GO!")
         } else if (count === 100){
       alert("You Won!!🥳")
         }
}

function four() {
    count += 1
     scoreRight.innerText = count
     
 }

 function two() {
     count += 2
     scoreLeft.innerText = count
 }
 
 function five() {
      count += 2
      scoreRight.innerText = count
  }

  function three() {
   count += 3 
     scoreLeft.innerText = count
 }
 
 function six() {
     count += 3
      scoreRight.innerText = count
  }

  function over() {
    count = 0
    scoreRight.innerText = count
    scoreLeft.innerText = count
  }


  