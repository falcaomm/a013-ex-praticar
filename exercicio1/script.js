let num = Number(prompt("Digite um número"))

if (num) {
    if (num % 2 === 0) {
        console.log("multiplo de 2");
        if (num % 3 != 0) {
            console.log("não é múltiplo de 3");
        }
    }
    if (num % 3 === 0) {
        console.log("multiplo de 3");
        if (num % 2 != 0) {
            console.log("não é múltiplo de 2");
        }
    }
    if (num % 2 != 0) {
        if (num % 3 != 0) {
            console.log("não é múltiplo de 2 nem 3");
        }
    }
} else {
    console.log("Digite um número");
}

// if (num % 2 === 0 && num % 3 === 0) {
//     console.log("multiplo de 2 e 3");
// } else if (num % 2 === 0 || num % 3 === 0) {
//     console.log("multiplo de 2 ou de 3");
// } else {
//     console.log("não é múltiplo de 2 nem 3");
// }