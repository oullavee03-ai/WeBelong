// ======== CHAT ========
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
    const msg = chatInput.value;
    if(msg.trim() === "") return;
    const messageElement = document.createElement("div");
    messageElement.textContent = `Oullavee: ${msg}`;
    chatBox.appendChild(messageElement);
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    // Future: sync with Firebase for real-time chat
});

// ======== DAILY QUESTIONS ========
const questionCards = [
    "What's your favorite memory of us?",
    "Describe your perfect date with me",
    "What's something you want to try together?"
];

const questionContainer = document.getElementById("question-cards");
questionCards.forEach(q => {
    const card = document.createElement("div");
    card.textContent = q;
    card.style.margin = "10px 0";
    card.style.padding = "10px";
    card.style.background = "rgba(255,255,255,0.2)";
    card.style.borderRadius = "10px";
    questionContainer.appendChild(card);
});

// ======== PET ========
const petDisplay = document.getElementById("pet-display");
document.getElementById("feed-btn").onclick = () => petDisplay.textContent = "You fed your pet! 🥰";
document.getElementById("bath-btn").onclick = () => petDisplay.textContent = "Pet is clean and happy! 🛁";
document.getElementById("dress-btn").onclick = () => petDisplay.textContent = "Pet is stylish 😎";
document.getElementById("sleep-btn").onclick = () => petDisplay.textContent = "Pet is sleeping 💤";

// ======== DRAWING ========
const canvas = document.getElementById("draw-canvas");
const ctx = canvas.getContext("2d");
let painting = false;

canvas.addEventListener("mousedown", () => painting = true);
canvas.addEventListener("mouseup", () => painting = false);
canvas.addEventListener("mousemove", draw);

function draw(e){
    if(!painting) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#fff";
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

document.getElementById("clear-canvas").onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

// ======== CALENDAR ========
const calendarDisplay = document.getElementById("calendar-display");
const startDate = new Date("2025-11-27");
const today = new Date();
const diffDays = Math.floor((today - startDate)/(1000*60*60*24));
calendarDisplay.textContent = `Days since we started: ${diffDays}`;
