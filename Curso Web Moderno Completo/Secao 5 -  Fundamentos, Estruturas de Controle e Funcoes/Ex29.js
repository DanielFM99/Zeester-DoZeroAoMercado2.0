function Intervalo(arr) {
    let cont = 0
    let cont2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10 && arr[i] <= 20) cont++
        else cont2++
    }
    return `No intervalo: ${cont}, Fora do intervalo: ${cont2}`
}

console.log(Intervalo([0, 2, 3, 10, 15, 16, 20, 25, 30]))