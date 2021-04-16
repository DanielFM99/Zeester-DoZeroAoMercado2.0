function Soma(arr) {
    let soma = 0

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma
}

console.log(Soma([10, 20, 30]))