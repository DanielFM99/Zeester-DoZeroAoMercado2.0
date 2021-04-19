function EmiteCedula(valor) {
    strValue = "";
    if (valor > 0) {
        let nota100 = Math.trunc(valor / 100)
        let resto100 = valor % 100
        let nota50 = Math.trunc(resto100 / 50)
        let resto50 = resto100 % 50
        let nota10 = Math.trunc(resto50 / 10)
        let resto10 = resto50 % 10
        let nota5 = Math.trunc(resto10 / 5)
        let resto5 = resto10 % 5
        let nota1 = Math.trunc(resto5 / 1)

        if (nota100 >= 1) strValue += `${nota100} nota(s) de R$100, `

        if (nota50 >= 1) strValue += `${nota50} nota(s) de R$50, `

        if (nota10 >= 1) strValue += `${nota10} nota(s) de R$10, `

        if (nota5 >= 1) strValue += `${nota5} nota(s) de R$5, `

        if (nota1 >= 1) strValue += `${nota1} nota(s) de R$1`

        return strValue;
    }

    else return "Inválido"
}

console.log(EmiteCedula(50))