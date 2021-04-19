function Dinheiro(valor) {
    return `R$${valor.toFixed(2).replace('.', ',')}`
}

console.log(Dinheiro(289.23565))