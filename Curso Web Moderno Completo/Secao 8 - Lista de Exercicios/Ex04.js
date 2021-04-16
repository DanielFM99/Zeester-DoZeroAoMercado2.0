function NomeMes(num) {
    let nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return nomeMes[num - 1]
}

console.log(NomeMes(12))