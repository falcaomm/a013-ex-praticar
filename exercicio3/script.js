let nome = prompt("Nome:").toLowerCase()
let idade = Number(prompt("Idade:"))

console.log("Oi", (nome === "josé" ? "zé!" : nome));
console.log("Você", (idade >= 18 ? "pode tirar a carteira!" : "não pode tirar a carteira!"));