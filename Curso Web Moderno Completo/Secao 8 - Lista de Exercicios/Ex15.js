function NumPar(arr) {
    let arr2 = []
    let j = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && i % 2 == 0) {
            arr2[j] = arr[i]
            j++
        }
    }

    return arr2
}

console.log(NumPar([10, 70, 22, 43]))