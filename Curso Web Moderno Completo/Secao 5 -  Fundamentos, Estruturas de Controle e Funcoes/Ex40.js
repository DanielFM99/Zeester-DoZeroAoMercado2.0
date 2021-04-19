function Notas(arr) {

    let conceito = []
    for (let i in arr) {
        if (arr[i] <= 4.9) conceito.push("Conceito D")
        else if (arr[i] > 4.9 && arr[i] <= 6.9) conceito.push("Conceito C")
        else if (arr[i] > 6.9 && arr[i] <= 8.9) conceito.push("Conceito B")
        else conceito.push("Conceito A")
    }
    return conceito
}

console.log(Notas([1, 2, 3, 4, 5, 6, 7, 1, 9, 10]))