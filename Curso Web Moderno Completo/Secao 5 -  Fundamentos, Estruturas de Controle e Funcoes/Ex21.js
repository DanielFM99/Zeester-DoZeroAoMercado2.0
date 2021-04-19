function PlanoDeSaude(idade) {
    if (idade < 10) {
        return `R$${100 + 80}`
    }

    else if (idade >= 10 && idade <= 30) {
        return `R$${100 + 50}`
    }

    else if (idade > 30 && idade <= 60) {
        return `R$${100 + 95}`
    }

    else if (idade > 60) {
        return `R$${100 + 130}`
    }

    else return "Inválido"
}

console.log(PlanoDeSaude(50))