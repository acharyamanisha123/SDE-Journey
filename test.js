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
    // 1. Calculate a color based on the score
    let scoreColor = score > 50 ? "#238636" : (score > 20 ? "#d29922" : "#da3633");

    feedbackContainer.innerHTML = `
        <div class="result-card" style="margin-top: 30px; padding: 25px; border-radius: 12px; background: #161b22; border: 1px solid #30363d; text-align: left;">
            <h2 style="margin-top: 0;">Resume Analysis Result</h2>
            
            <!-- 2. The Progress Bar -->
            <div style="background: #30363d; height: 10px; border-radius: 5px; margin: 15px 0;">
                <div style="background: ${scoreColor}; width: ${score}%; height: 100%; border-radius: 5px; transition: width 0.5s ease-in-out;"></div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 24px; font-weight: bold; color: ${scoreColor};">${score}/100</span>
                <span>${score > 30 ? "✅ Looking Good" : "⚠️ Needs More Keywords"}</span>
            </div>

            <hr style="border: 0; border-top: 1px solid #30363d; margin: 20px 0;">

            <p><strong>Technical Skills:</strong> ${skills.length > 0 ? skills.join(", ") : "None detected"}</p>
            <p><strong>Action Verbs:</strong> ${words.length > 0 ? words.join(", ") : "None detected"}</p>
        </div>
    `;
}