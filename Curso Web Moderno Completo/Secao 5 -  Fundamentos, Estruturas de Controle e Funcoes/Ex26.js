function Pares() {
    let strValue = ""
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0){
            strValue += `${i} `
        }
    }
    console.log(strValue)
}

Pares()