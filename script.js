document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("startBtn").addEventListener("click", askForSurprise);
});

function askForSurprise() {
    let box = document.querySelector(".container");
    box.innerHTML = `
        <p>Would you like to see your surprise?</p>
        <button class="btn" id="yesBtn">Yes</button>
        <button class="btn" id="noBtn">No</button>
    `;

    document.getElementById("yesBtn").addEventListener("click", showHearts);
    document.getElementById("noBtn").addEventListener("click", noSurprise);
}

function showHearts() {
    let box = document.querySelector(".container");
    box.innerHTML = `<p>You are very special to me! ❤️</p>`;
    
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }

    setTimeout(showNextStep, 3000);
}

function showNextStep() {
    let box = document.querySelector(".container");
    box.innerHTML = `
        <p>Do you want to see what I made?</p>
        <button class="btn" id="showCreationBtn">Yes, show me!</button>
    `;

    document.getElementById("showCreationBtn").addEventListener("click", showCreation);
}

function showCreation() {
    let box = document.querySelector(".container");
    box.innerHTML = `
        <p>Here’s something special for you! 😊</p>
        <button class="btn" id="decorateBtn">Decorate</button>
    `;

    document.getElementById("decorateBtn").addEventListener("click", decorate);
}

function decorate() {
    let box = document.querySelector(".container");
    box.innerHTML = `
        <div class="ribbon">🎈🎉 Happy Birthday! 🎉🎈</div>
        <button class="btn" id="flyBalloonsBtn">Fly the Balloons</button>
        <button class="btn" id="cutCakeBtn">Let's Cut Cake</button>
    `;

    document.getElementById("flyBalloonsBtn").addEventListener("click", flyBalloons);
    document.getElementById("cutCakeBtn").addEventListener("click", cutCake);
}

function flyBalloons() {
    let container = document.getElementById("balloon-container");
    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = ["#ff4081", "#ff79b0", "#ffcc00", "#00ccff"][Math.floor(Math.random() * 4)];
        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 5000);
    }
}

function noSurprise() {
    let box = document.querySelector(".container");
    box.innerHTML = '<p>Okay! But you are still special. 💖</p>';
}
