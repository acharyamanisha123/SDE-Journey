// 1. DATA (Our "Database")
let students = [
    { name: "Rahul", score: 45 },
    { name: "Priya", score: 90 }
];

// 2. LOGIC (The "Machine")
function evaluateMarks(score) {
    if (score >= 50) {
        return "Passed";
    } else {
        return "Failed";
    }
}

// 3. UI RENDERING (The "Painter")
function renderTable() {
    const container = document.getElementById("table-container");
    
    let tableHTML = `<table>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Status</th>
                        </tr>`;

    for (let s of students) {
        let status = evaluateMarks(s.score);
        let color = s.score >= 50 ? "#238636" : "#da3633"; // Green for pass, Red for fail
        
        tableHTML += `<tr>
                        <td>${s.name}</td>
                        <td>${s.score}</td>
                        <td style="color: ${color}; font-weight: bold;">${status}</td>
                      </tr>`;
    }

    tableHTML += `</table>`;
    container.innerHTML = tableHTML;
}

// 4. INTERACTION (The "Listener")
const nameInput = document.getElementById("student-name");
const scoreInput = document.getElementById("student-score");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const score = parseInt(scoreInput.value);

    if (name && !isNaN(score)) {
        // Add new data to our list
        students.push({ name: name, score: score });
        
        // Redraw the table with the new data
        renderTable();

        // Clear the inputs for the next entry
        nameInput.value = "";
        scoreInput.value = "";
    } else {
        alert("Please enter a valid name and score!");
    }
});

// Initial call to show the starting data
renderTable();