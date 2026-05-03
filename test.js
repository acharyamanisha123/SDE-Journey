let scores = [32, 55, 90, 45, 82, 30];
function evaluateMarks(score){
  if(score >= 50){
    return ("Passed");
  }
  else{
    return ("Failed");
  }

}
for (let score of scores){
  let result = evaluateMarks(score);
  console.log("Score " + score + " is a " + result);
}
