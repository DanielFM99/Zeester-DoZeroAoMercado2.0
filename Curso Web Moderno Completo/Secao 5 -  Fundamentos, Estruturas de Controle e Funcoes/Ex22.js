function Anuidade(mes, valor) {
    if (mes >= 0 && mes <= 12) {
        return valor * Math.pow((1 + 0.05), mes - 1)
    }

    else return "Inválido"
}

console.log(Anuidade(4, 100))