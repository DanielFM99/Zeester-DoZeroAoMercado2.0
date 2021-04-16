function SalarioMes(horas, salario) {
    let ganhoMes = horas * salario
    return `Salário igual a R$ ${ganhoMes}`
}

console.log(SalarioMes(150, 40.5))