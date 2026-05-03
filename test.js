let scores = [32, 55, 90, 45, 82, 30];
for (let score of scores){
  if(score >= 50){
    console.log("Passed:" + score);
  }
  else{
    console.log("Failed:" +  score);
  }
}
