function VetorDeVetor(obj) {
    let arr = []
    arr = Object.values(obj)

    let arr2 = []
    arr2 = Object.getOwnPropertyNames(obj)

    let arr3 = []

    for (let i = 0; i < Infinity; i++) {
        if (arr[i] == undefined) {
            break
        }
        else {
            arr3[i] = [arr2[i], arr[i]]
        }
    }

    return arr3
}

console.log(VetorDeVetor({
    nome: "daniel",
    a: 2,
    b: 3

}))