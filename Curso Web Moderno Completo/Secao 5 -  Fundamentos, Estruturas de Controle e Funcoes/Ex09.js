function NotasAluno(nota) {
    if (nota % 5 > 2) {
        nota = nota + (5 - (nota % 5))
    }

    if (nota >= 40) return `Aprovado, nota = ${nota}`
    else return `Reprovado, nota = ${nota}`
}

console.log(NotasAluno(38))