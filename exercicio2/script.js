let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

switch (nacionalidade) {
    case "brasileira", "brasileiro":
        console.log(nacionalidade);
        break;
    case "argentina", "argentino":
        console.log(nacionalidade);
        break;
    case "uruguaia", "uruguaio":
        console.log(nacionalidade);
        break;
    case "chilena", "chileno":
        console.log(nacionalidade);
        break;
    case "colombiana", "colombiano":
        console.log(nacionalidade);
        break;
    default:
        console.log("nacionalidade não encontrada");
}