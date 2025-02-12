let word = "";
let guessedWord = [];
let attempts = 6;

async function fetchWord() {
    try {
        let response = await fetch("https://random-word-api.herokuapp.com/word?number=1");
        let data = await response.json();
        word = data[0].toUpperCase();
        guessedWord = Array(word.length).fill("_");
        document.getElementById("hidden-word").textContent = guessedWord.join(" ");
        document.getElementById("message").textContent = "Adivina la palabra";
        document.getElementById("hangman-img").src = `hangman0.png`;
    } catch (error) {
        document.getElementById("message").textContent = "Error al cargar la palabra.";
    }
}

fetchWord();

document.getElementById("guess-btn").addEventListener("click", function() {
    let input = document.getElementById("letter-input");
    let letter = input.value.toUpperCase();
    input.value = "";

    if (!letter.match(/[A-Z]/) || letter.length !== 1) {
        alert("Ingresa una letra válida.");
        return;
    }

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord[i] = letter;
            }
        }
    } else {
        attempts--;
        document.getElementById("hangman-img").src = `hangman${6 - attempts}.png`;
    }

    document.getElementById("hidden-word").textContent = guessedWord.join(" ");
    document.getElementById("attempts").textContent = attempts;

    if (!guessedWord.includes("_")) {
        document.getElementById("message").textContent = "¡Ganaste! La palabra era " + word;
        document.getElementById("guess-btn").disabled = true;
    } else if (attempts === 0) {
        document.getElementById("message").textContent = "Perdiste. La palabra era " + word;
        document.getElementById("guess-btn").disabled = true;
    }
});

document.getElementById("restart-btn").addEventListener("click", function() {
    attempts = 6;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("guess-btn").disabled = false;
    fetchWord();
});
