let students = [
  {
  name: "Rahul",
  score : 45},
  
  {
    name: "Priya",
    score:90
  }];

function evaluateMarks(score){
  if(score>=50){
    return "Passed";
  }
  else{
    return "Failed";
  }
}
for(let student of students){
  let marks = evaluateMarks(students.score);
  console.log(student.name + " scored " + student.score +  " and " + marks);
}
