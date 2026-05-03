const students = [
  {name:"Rahul",score:45},
  {name:"Priya",score:90},
  {name:"Amit",score:72}
];

const button = document.getElementById("load-btn");
const container = document.getElementById("table-container");

button.addEventListener("click",()=>{
  //Start building a string in  HTML
  let tableHTML = `<table border = "1" style="width:100%; text-align:left; margin-top:20px;">
  <tr>
  <th>Name</th>
  <th>Score</th>
  <th>Status</th>
  </tr>`;
//Loop through data and rows

for(let student of students){
  let status = student.score >=50 ? "Passed":"Failed";
  let color =student.score >=50 ? "green":"red";


  tableHTML += `<tr>
        <td>${student.name}</td>
        <td>${student.score}</td>
        <td style="color : ${color}">${status}</td>
  </tr>`;
}

tableHTML += `</table>`;

// Inject the string into the website
container.innerHTML = tableHTML;

// Clean up: hide the button after loading
button.style.display="none";
});