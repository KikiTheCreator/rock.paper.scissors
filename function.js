const opciones = ["piedra", "papel", "tijera"];

let userChoice = prompt("Elige: piedra, papel o tijera").toLowerCase();

let computerChoice = getComputerChoice(opciones);

function getComputerChoice(opciones) {
  let computerSelecting = Math.floor(Math.random() * opciones.length);

  return opciones[computerSelecting];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(userChoice, computerChoice) {
      
    if (!opciones.includes(userChoice)) {
      alert("opcion no valida, por tramposo tendras que empezar de nuevo");
    }

    alert(`Elegiste ${userChoice} y la computadora elegio ${computerChoice}`);

    if (userChoice === computerChoice) {
      alert(`EMPATE ${computerChoice} con ${userChoice} se besan`);
      alert(`Humano lleva ${humanScore} y la IA ${computerScore}`)
    } else if (
      (userChoice === "piedra" && computerChoice === "tijera") ||
      (userChoice === "tijera" && computerChoice === "papel") ||
      (userChoice === "papel" && computerChoice === "piedra")
    ) {
      humanScore++;
      alert("GANASTE");
      alert(`Humano lleva ${humanScore} y la IA ${computerScore}`)
    } else {
      computerScore++;
      alert(`Perdiste ${computerChoice} le gana a ${userChoice}`);
      alert(`Humano lleva ${humanScore} y la IA ${computerScore}`)
    }
    if (humanScore === 5) {
      return alert("felicidades, quizas no te reenplacen por la ia")
    } else if (computerScore == 5) {
      return alert("lamento ser quien te lo diga, pero te gano la ia, no apagues el cerebro, mientras... seras reemplazado")
    } else {
      let newComputerAnswer = getComputerChoice(opciones);
      let newAnswer = prompt("Elige: piedra, papel o tijera").toLowerCase();
      playRound(newAnswer, newComputerAnswer);
    }
  }
  playRound(userChoice, computerChoice);
}
playGame();
