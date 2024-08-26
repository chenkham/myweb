const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const followUp = document.getElementById("followUp");
const funnyMessage = document.getElementById("funnyMessage");
const submitReason = document.getElementById("submitReason");
const reasonInput = document.getElementById("reasonInput");

yesButton.addEventListener("click", () => {
    followUp.style.display = "block";  // Show follow-up question
    noButton.style.display = "none";   // Hide the "No" button
});

noButton.addEventListener("click", () => {
    alert("Smart move!");  // Alert message for "No" option
    noButton.style.position = "absolute";  // Relocate the "No" button
    noButton.style.top = "10px";
    noButton.style.left = "10px";
});

submitReason.addEventListener("click", () => {
    const reason = reasonInput.value;
    if (reason) {
        followUp.style.display = "none";  // Hide follow-up input
        funnyMessage.style.display = "block";  // Show funny message
        funnyMessage.querySelector("p").textContent = `😂 You're truly a fool, but at least you're honest for saying: "${reason}"!`;
    } else {
        alert("Please enter a reason!");
    }
});
