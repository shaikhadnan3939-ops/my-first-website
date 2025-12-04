// ==============================
//  Portfolio – UI Interactions
//  Author: Adnan Shaikh
//  Description: Client-side behavior for the personal website
// ==============================



// ===== 1. WELCOME TEXT CONTROLS =====

function changeText() {
    const welcomeEl = document.getElementById("welcome");
    if (!welcomeEl) return; // safety check

    welcomeEl.innerText = "Welcome! This text was updated with JavaScript.";
}

function changeColor() {
    const welcomeEl = document.getElementById("welcome");
    if (!welcomeEl) return;

    // nicer blue tone
    welcomeEl.style.color = "#2563eb";
}



// ===== 2. GREETING FORM =====

function greetUser() {
    const nameInput = document.getElementById("nameInput");
    const messageElement = document.getElementById("greetingMessage");

    if (!nameInput || !messageElement) return;

    const name = nameInput.value.trim();

    if (!name) {
        messageElement.innerText = "Please enter your name first.";
        messageElement.style.color = "crimson";
        return;
    }

    messageElement.innerText = `Hello ${name}! 👋`;
    messageElement.style.color = "green";
}



// ===== 3. COLOR CHANGER APP =====

function setColor(color) {
    const box = document.getElementById("colorBox");
    const label = document.getElementById("colorLabel");

    if (!box || !label) return;

    box.style.backgroundColor = color;
    label.innerText = `Current color: ${color}`;
}

function setRandomColor() {
    const box = document.getElementById("colorBox");
    const label = document.getElementById("colorLabel");

    if (!box || !label) return;

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b})`;

    box.style.backgroundColor = color;
    label.innerText = `Current color: ${color}`;
}



// ===== 4. TO-DO LIST APP =====

function addTask() {
    const input = document.getElementById("todoInput");
    const list = document.getElementById("todoList");

    if (!input || !list) return;

    const taskText = input.value.trim();
    if (!taskText) {
        // In a real app, you might show a small validation message instead of console.log
        console.log("No task entered");
        return;
    }

    // Create the list item
    const li = document.createElement("li");

    // Span for the task text
    const span = document.createElement("span");
    span.innerText = taskText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.padding = "3px 8px";

    // Toggle completed state when clicking on the text
    span.onclick = function () {
        li.classList.toggle("completed");
    };

    // Remove task when clicking the delete button
    deleteBtn.onclick = function (event) {
        event.stopPropagation(); // prevent also toggling completed
        list.removeChild(li);
    };

    // Assemble the list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add to the list
    list.appendChild(li);

    // Clear the input
    input.value = "";
}
