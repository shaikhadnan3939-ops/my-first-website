console.log("Hello Adnan! JavaScript is working.");
 let a = 15;
 let c = 2;

 console.log(a*c);
   

let hobbies = ["ANIME","TRAVEL","MOVIES"];

console.log(hobbies[1]);

let age=22;
if (age >=18) {
    console.log("HE IS TEEN")
} 
function changeText() {
    document.getElementById("welcome").innerText = "Welcome Adnan! JavaScript changed this text!";
}

function changeColor() {
    document.getElementById("welcome").style.color = "blue";
}
function greetUser() {
    // 1. Get the input element
    let nameInput = document.getElementById("nameInput");

    // 2. Read its value
    let name = nameInput.value;

    // 3. Get the greeting message element
    let messageElement = document.getElementById("greetingMessage");

    // 4. If name is empty, show error. Else, show greeting.
    if (name === "") {
        messageElement.innerText = "Please enter your name first!";
        messageElement.style.color = "red";
    } else {
        messageElement.innerText = "Hello " + name + "! 👋";
        messageElement.style.color = "green";
    }
}
function setColor(color) {
    let box = document.getElementById("colorBox");
    let label = document.getElementById("colorLabel");

    box.style.backgroundColor = color;
    label.innerText = "Current color: " + color;
}

function setRandomColor() {
    let box = document.getElementById("colorBox");
    let label = document.getElementById("colorLabel");

    // Create random RGB color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    box.style.backgroundColor = color;
    label.innerText = "Current color: " + color;
}
