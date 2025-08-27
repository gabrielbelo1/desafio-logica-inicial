// 1️⃣ Criando variáveis para armazenar nome e XP do herói
let nome = prompt("Digite o nome do herói:");
let xp = parseInt(prompt("Digite a quantidade de XP do herói:"), 10);

let nivel; // Variável que vai armazenar o nível do herói

// 2️⃣ Estrutura de decisão para definir o nível
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else { // xp >= 10001
    nivel = "Radiante";
}

// 3️⃣ Exibindo a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
