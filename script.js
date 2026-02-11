// FORM SUBMIT + REDIRECT
document.getElementById("supportForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let message = document.getElementById("message").value.toLowerCase();

    // AI / Automation (priority detection)
    let priority = "Normal";
    if (message.includes("emergency") || message.includes("urgent")) {
        priority = "High Priority";
    }

    // Save data
    localStorage.setItem("userName", name);
    localStorage.setItem("userType", type);
    localStorage.setItem("priority", priority);

    // REDIRECT TO SECOND HTML
    window.location.href = "success.html";
});


// CHATBOT
function chatBot() {
    let input = document.getElementById("chatInput").value.toLowerCase();
    let reply = "";

    if (input.includes("appointment")) {
        reply = "You can book appointments by contacting our support team.";
    } else if (input.includes("emergency")) {
        reply = "Please visit the nearest hospital immediately.";
    } else if (input.includes("volunteer")) {
        reply = "You can register as a volunteer using the form.";
    } else {
        reply = "Sorry, I can answer only basic healthcare questions.";
    }

    document.getElementById("chatResponse").innerText = reply;
}
