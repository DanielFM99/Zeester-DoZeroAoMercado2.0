function Trabalho(plano, salario) {
    switch (plano) {
        case "A":
            return `Novo salário: ${salario * 1.1}`
        case "B":
            return `Novo salário: ${salario * 1.15}`
        case "C":
            return `Novo salário: ${salario * 1.2}`
        default:
            let erro = new Error("Plano inválido")
            return erro.message
    }
}

console.log(Trabalho("A", 1500))