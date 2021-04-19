function PontosBasquete(arr) {
    let maior = arr[0]
    let menor = arr[0]
    let menorIndex = 0
    let recorde = 0

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > maior) {
            recorde++
            maior = arr[i]
        }

        if (arr[i] < menor) {
            menorIndex = i
            menor = arr[i]
        }
    }
    return [recorde, menorIndex + 1]
}

console.log(PontosBasquete([10, 50, 12, 2, 30, 65, 5, 78, 3]))