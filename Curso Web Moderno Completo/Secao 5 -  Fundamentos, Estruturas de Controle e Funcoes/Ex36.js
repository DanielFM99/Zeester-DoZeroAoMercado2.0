function Mult(arr, num) {
    let arrFinal = []

    for (let i = 0; i < arr.length; i++) arrFinal[i] = arr[i] * num

    return arrFinal
}

function Mult2(arr, num) {
    let arrFinal = []
    let cont = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            arrFinal[cont] = arr[i] * num
            cont++
        }
    }
    return arrFinal
}

console.log(Mult([10, 20, 30, 40, 50], 10))
console.log(Mult2([1, 2, 3, 10, 20, 6, 7, 8], 20))