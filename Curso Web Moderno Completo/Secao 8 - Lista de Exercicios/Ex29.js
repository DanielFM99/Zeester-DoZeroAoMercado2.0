function SegundoMaior(arr) {
    let numMaior = 0
    let numSegundoMaior = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > numMaior) {
            numSegundoMaior = numMaior
            numMaior = arr[i]
        }

        if (arr[i] > numSegundoMaior && arr[i] < numMaior) {
            numSegundoMaior = arr[i]
        }
    }

    return numSegundoMaior
}

console.log(SegundoMaior([12, 16, 1, 5]))