function Lanchonete(codigo, quant) {
    switch (codigo) {
        case "100":
            return `R$${(quant * 3).toFixed(2)}`
        case "200":
            return `R$${(quant * 4).toFixed(2)}`
        case "300":
            return `R$${(quant * 5.5).toFixed(2)}`
        case "400":
            return `R$${(quant * 7.5).toFixed(2)}`
        case "500":
            return `R$${(quant * 3.5).toFixed(2)}`
        case "600":
            return `R$${(quant * 2.8).toFixed(2)}`
        default:
            return "Produto não existente"
    }
}

console.log(Lanchonete("200", 5))