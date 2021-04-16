function FiltrarDigito(arr, num) {
    let arrFinal = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().length == num) {
            arrFinal.push(arr[i])
        }
    }

    return arrFinal
}

console.log(FiltrarDigito([38, 2, 365, 10, 125, 11, 20, 50, 235], 3))