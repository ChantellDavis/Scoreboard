let scoreLeft = document.getElementById("score-left")
let scoreRight = document.getElementById("score-right")
console.log(scoreRight)
let count = 0

function one() {
   let countUp = count + 1
    scoreLeft.innerText = countUp
}

function four() {
    let countUp = count + 1
     scoreRight.innerText = countUp
 }

 function two() {
    let countUp2 = count + 2
     scoreLeft.innerText = countUp2
 }
 
 function five() {
     let countUp2 = count + 2
      scoreRight.innerText = countUp2
  }

  function three() {
    let countUp3 = count + 3 
     scoreLeft.innerText = countUp3
 }
 
 function six() {
     let countUp3 = count + 3
      scoreRight.innerText = countUp3
  }