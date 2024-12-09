let xp = 1000;

let nome = "tyn1t";

const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

switch (xp){
    case 1000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[0]}`)
        break 
    case 1001 <= 2000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[1]}`)
        break 
    case 2001 <= 3000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[2]}`)
        break 
    case 3001 <= 4000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[3]}`)
        break 
    case 4001 <= 5000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[4]}`)
        break
    case 5001 <= 6000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[5]}`)
        break  
    case 6001 <= 7000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[6]}`)
        break 
    case 7001 <= 8000:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[7]}`)
        break     

    default:
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[8]}`)
        break
}
