function Repetir(x, y) {
    let vet = []
    for (let i = 0; i < y; i++) {
        vet[i] = x
    }

    return vet
}

console.log(Repetir(7, 3))