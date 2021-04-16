function Multiplicar(x, y) {
    let soma = 0
    for (let i = 0; i < y; i++) {
        soma += x
    }
    return soma
}

console.log(Multiplicar(5, 5))