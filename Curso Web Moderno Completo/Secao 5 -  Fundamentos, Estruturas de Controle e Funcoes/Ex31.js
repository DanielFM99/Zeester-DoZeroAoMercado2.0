function NumNegativo(arr) {
    let contNegativo = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) contNegativo++
    }
    return contNegativo
}

console.log(NumNegativo([1, 5, 6, 3, -9, -7, -25, 6, 7]))