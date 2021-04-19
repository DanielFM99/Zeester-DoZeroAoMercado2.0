function Calculadora(x, op, y) {
    switch (op) {
        case "+":
            return `${x + y}`
        case "-":
            return `${x - y}`
        case "*":
            return `${x * y}`
        case "/":
            return `${x / y}`
        default:
            let erro = new Error("Erro")
            return erro.message
    }
}

console.log(Calculadora(2, "*", 3))