// 1. KNOWLEDGE BASE (Our "Database" of keywords)
const powerWords = ["implemented", "optimized", "led", "developed", "managed", "scaled", "designed"];
const techSkills = ["javascript", "python", "react", "git", "html", "css", "node", "sql", "aws"];

// 2. UI ELEMENTS
const analyzeBtn = document.getElementById("analyze-btn");
const resumeInput = document.getElementById("resume-text");
const feedbackContainer = document.getElementById("feedback-container");

// 3. ANALYSIS LOGIC
analyzeBtn.addEventListener("click", () => {
   
    const text = resumeInput.value.toLowerCase();
    const counts = getFrequency(text, techSkills);
    console.log("Skill Frequencies:", counts);
    // Finding the "Top Skill" (The Max Value Puzzle)
let topSkill = "None";
let maxCount = 0;

for (const skill in counts) {
    if (counts[skill] > maxCount) {
        maxCount = counts[skill];
        topSkill = skill;
    }
}

console.log("Your strongest skill is:", topSkill);
    
    // Variables to track our findings
    let score = 0;
    let foundSkills = [];
    let foundPowerWords = [];

    // Scan for Tech Skills (+10 points each)
    techSkills.forEach(skill => {
        if (text.includes(skill)) {
            score += 10;
            foundSkills.push(skill);
        }
    });

    // Scan for Power Words (+5 points each)
    powerWords.forEach(word => {
        if (text.includes(word)) {
            score += 5;
            foundPowerWords.push(word);
        }
    });

    // Cap the score at 100
    if (score > 100) score = 100;

    // Identify what's missing (Gap Analysis)
    let missingSkills = techSkills.filter(s => !foundSkills.includes(s));

    // Send everything to the UI Painter
    renderFeedback(score, foundSkills, foundPowerWords, missingSkills);
});

// 4. UI PAINTER (The Rendering Engine)
function renderFeedback(score, skills, words, missing) {
    // Dynamic color based on score
    let scoreColor = score > 60 ? "#238636" : (score > 30 ? "#d29922" : "#da3633");

    // Build the Suggestion HTML if there are missing skills
    let suggestionsHTML = "";
    if (missing.length > 0) {
        suggestionsHTML = `
            <div style="margin-top: 20px; padding: 15px; background: #0d1117; border-left: 4px solid #58a6ff; border-radius: 4px;">
                <p style="margin: 0; color: #58a6ff; font-weight: bold;">💡 AI Suggestion:</p>
                <p style="margin: 5px 0 0 0; font-size: 0.9em;">To boost your visibility, consider adding these keywords: 
                <span style="color: #e6edf3;">${missing.slice(0, 3).join(", ")}</span></p>
            </div>
        `;
    }

    // Update the Container with the Results Card
    feedbackContainer.innerHTML = `
        <div style="margin-top: 30px; padding: 25px; border-radius: 12px; background: #161b22; border: 1px solid #30363d; text-align: left; animation: fadeIn 0.5s ease-in;">
            <h2 style="margin-top: 0; font-size: 1.2em; color: #8b949e;">Analysis Report</h2>
            
            <!-- Progress Bar -->
            <div style="background: #30363d; height: 12px; border-radius: 6px; margin: 15px 0; overflow: hidden;">
                <div style="background: ${scoreColor}; width: ${score}%; height: 100%; transition: width 0.8s ease-out;"></div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <span style="font-size: 28px; font-weight: bold; color: ${scoreColor};">${score}/100</span>
                <span style="font-size: 0.9em; color: #8b949e;">${score > 50 ? "Ready to Apply! ✅" : "Keep Improving 🚀"}</span>
            </div>

            <p style="font-size: 0.95em;"><strong>Skills Detected:</strong> ${skills.length > 0 ? skills.join(", ") : "None detected"}</p>
            <p style="font-size: 0.95em;"><strong>Action Verbs:</strong> ${words.length > 0 ? words.join(", ") : "None detected"}</p>

            ${suggestionsHTML}
        </div>
    `;
}
document.getElementById("clear-btn").addEventListener("click", () => {
    resumeInput.value = "";
    feedbackContainer.innerHTML = "";
});
const wordCountDisplay = document.getElementById("word-count");

resumeInput.addEventListener("input", () => {
    const text = resumeInput.value.trim();
    // The "Puzzle" logic: Split the string by spaces and count the resulting array
    const words = text ? text.split(/\s+/).length : 0;
    wordCountDisplay.innerText = words;
});
function getFrequency(text, skillList) {
    let frequencyMap = {}; // This is our "Map"

    // Split text into an array of words
    const words = text.toLowerCase().split(/\W+/); 

    words.forEach(word => {
        // If the word is one of our tech skills...
        if (skillList.includes(word)) {
            // If it's already in our map, add 1. If not, start at 1.
            frequencyMap[word] = (frequencyMap[word] || 0) + 1;
        }
    });

    return frequencyMap;
}