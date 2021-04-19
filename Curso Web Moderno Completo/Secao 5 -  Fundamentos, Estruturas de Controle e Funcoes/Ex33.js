function Concat1(arrInt, arrString, arrDouble) {
    let arrFinal = arrInt.concat(arrString, arrDouble)
    return arrFinal
}

let arrInt = [1, 2, 3, 4]
let arrString = ["Daniel", "Figueiredo", "Macedo", "123456"]
let arrDouble = [2.2, 3.3, 4.4, 5.5]

console.log(Concat1(arrInt, arrString, arrDouble))