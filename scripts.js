let Heroi = ["Capitão América", "Batman", "Mulher Maravilha", "Superman", "Jesus"];
let xpHeroi = [3950, 5030, 6000, 7500, 10000000000];
const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante", "Lendário"]; //Added "Lendário"


for (let index = 0; index < xpHeroi.length; index++) {
    const xp = xpHeroi[index];
    let levelIndex = 0;

    if (xp >= 1000 && xp <= 2000) {
        levelIndex = 1;
    } else if (xp >= 2001 && xp <= 3000) {
        levelIndex = 2;
    } else if (xp >= 3001 && xp <= 4000) {
        levelIndex = 3;
    } else if (xp >= 4001 && xp <= 5000) {
        levelIndex = 4;
    } else if (xp >= 5001 && xp <= 6000) {
        levelIndex = 5;
    } else if (xp >= 6001 && xp <= 7000) {
        levelIndex = 6;
    } else if (xp >= 7001 && xp <= 8000) {
        levelIndex = 7;
    } else if (xp > 8000) {
        levelIndex = 8; 
    } else {
      levelIndex = 0; 
    }


    console.log(`O Herói de nome ${Heroi[index]} está no nível de ${nivel[levelIndex]}`);
}