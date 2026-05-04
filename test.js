// 1. The "Knowledge Base" (Keywords recruiters look for)
const powerWords = ["implemented", "optimized", "led", "developed", "managed", "scaled"];
const techSkills = ["javascript", "python", "react", "git", "html", "css", "node"];

const analyzeBtn = document.getElementById("analyze-btn");
const resumeInput = document.getElementById("resume-text");
const feedbackContainer = document.getElementById("feedback-container");

analyzeBtn.addEventListener("click", () => {
    const text = resumeInput.value.toLowerCase(); // Convert to lowercase for easy searching
    let score = 0;
    let foundSkills = [];
    let foundPowerWords = [];

    // 2. Logic: Scanning for Tech Skills
    techSkills.forEach(skill => {
        if (text.includes(skill)) {
            score += 10;
            foundSkills.push(skill);
        }
    });

    // 3. Logic: Scanning for Power Words (Action Verbs)
    powerWords.forEach(word => {
        if (text.includes(word)) {
            score += 5;
            foundPowerWords.push(word);
        }
    });

    // 4. UI Rendering: Display the Result
    renderFeedback(score, foundSkills, foundPowerWords);
});

function renderFeedback(score, skills, words) {
    feedbackContainer.innerHTML = `
        <div style="margin-top: 20px; padding: 20px; border: 1px solid #30363d; border-radius: 8px; background: #161b22;">
            <h3>AI Analysis Score: ${score}/100</h3>
            <p><strong>Skills Detected:</strong> ${skills.join(", ") || "None detected"}</p>
            <p><strong>Action Verbs Used:</strong> ${words.join(", ") || "None detected"}</p>
            <p style="color: ${score > 30 ? "#238636" : "#da3633"}">
                ${score > 30 ? "Strong Resume! Ready to apply." : "Needs Improvement: Add more tech keywords."}
            </p>
        </div>
    `;
}