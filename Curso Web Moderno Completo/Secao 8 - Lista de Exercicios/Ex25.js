function BuscaPalavra(palavra, arr) {
    let arrFinal = []

    for (i of arr) {
        if (i.includes(palavra) == true) {
            arrFinal.push(i)
        }
    }
    return arrFinal
}

console.log(BuscaPalavra("pro", ["programação", "aproximacao", "profissional"]))