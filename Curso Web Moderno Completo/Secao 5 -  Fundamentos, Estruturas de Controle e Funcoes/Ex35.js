function AdicionarVetor(vetorPilha, vetorAdiciona) {
    for (i = 0; i < 5; i++) vetorPilha.push(vetorAdiciona[i])
    return vetorPilha
}

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

console.log(AdicionarVetor(vetorPilha, vetorAdiciona))