
// script.js
let names = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name !== "") {
        names.push(name);
        updateNamesList();
        nameInput.value = "";
    }
}

function updateNamesList() {
    const namesList = document.getElementById('namesList');
    namesList.innerHTML = "";

    names.forEach((name, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        namesList.appendChild(listItem);
    });
}

function drawWinner() {
    if (names.length === 0) {
        alert("No names entered!");
        return;
    }

    const winnerIndex = Math.floor(Math.random() * names.length);
    const winnerName = names[winnerIndex];

    document.getElementById('winnerName').textContent = winnerName;
}
