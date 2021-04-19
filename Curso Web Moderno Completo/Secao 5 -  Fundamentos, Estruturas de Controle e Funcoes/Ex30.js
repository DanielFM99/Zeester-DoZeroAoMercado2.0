function MaiorMenor(arr) {
    parseInt(arr)
    arr.sort((a, b) => a - b)

    return `Menor: ${arr[0]}, Maior:${arr[arr.length - 1]}`

}

console.log(MaiorMenor([8, 7, 6, 5, 4, 3, 2, 1, 0, 25]))