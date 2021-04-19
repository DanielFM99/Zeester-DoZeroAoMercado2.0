function Media(arr) {
    let soma = 0

    for (let i = 0; i < arr.length; i++) {
        parseInt(arr[i])
        soma += arr[i]
    }

    return (soma / arr.length)
}

console.log(Media([1, 2, 3, 4, 5, 6, 7, 8, 9, 20]))