function Despesa(arr) {
    let custo = 0
    let j = 0

    for (i in arr) {
        custo += arr[j].preco
        j++
    }

    return custo
}

console.log(Despesa([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]))