function Sorte(num) {
    let numRand = Math.floor(Math.random() * 10) + 1

    if (num == numRand) {
        return `Parabéns! O número sorteado foi o ${numRand}`
    }

    else {
        return `Que pena! O número sorteado foi o ${numRand}`
    }
}

console.log(Sorte(5))