function ParImpar(arr) {
    let contPar = 0
    let contImpar = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) contPar++
        else contImpar++
    }
    return `Par:${contPar}, ímpar:${contImpar}`
}

console.log(ParImpar([5, 3, 1, 2, 0, 3, 10, 25, 60]))