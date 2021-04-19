function Troca(arrA, arrB) {
    let aux = []
    aux = arrA
    arrA = arrB
    arrB = aux
    return [arrA, arrB]
}

console.log(Troca([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]).join(" e "))