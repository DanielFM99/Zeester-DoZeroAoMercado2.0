function Media(arr) {
    let soma = 0

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }

    return soma / arr.length
}

console.log(Media([1, 2, 3, 4, 5]))