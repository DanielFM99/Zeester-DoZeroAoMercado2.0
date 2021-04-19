function PA(n, a1, r) {
    let nums = []
    let soma = 0

    for (let i = 0; i < n; i++) {
        nums[i] = (a1 + r * i)
        soma += (a1 + r * i)
    }

    return `Termos: ${nums}\nSoma PA: ${soma} `
}

function PG(n, a1, r) {
    let nums = []
    let soma = (a1 * (Math.pow(r, n) - 1)) / (r - 1)

    for (let i = 0; i < n; i++) {
        nums[i] = (a1 * (Math.pow(r, i)))
    }

    return `Termos: ${nums}\nSoma PA: ${soma} `
}

console.log(PA(10, 10, 10))
console.log(PG(5, 5, 5))