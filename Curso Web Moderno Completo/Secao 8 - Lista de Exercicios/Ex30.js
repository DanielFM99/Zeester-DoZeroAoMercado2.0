function MediaNota(obj) {
    let obj2 = {}
    let soma = 0
    let media = 0
    let maior = 0

    for (var i in obj) {
        for (let j = 0; j < obj[i].length; j++) {
            soma += obj[i][j]
            media = soma / obj[i].length
            if (media > maior) {
                maior = media
                obj2 = {
                    [i]: media
                }
            }
        }
        soma = 0
        media = 0
    }
    return obj2
}

console.log(MediaNota({
    Joao: [8, 7.6, 8.9, 6],     //7.625
    Mariana: [9, 6.6, 7.9, 8],  //7.875
    Carla: [7, 7, 8, 9]         //7.75
}))