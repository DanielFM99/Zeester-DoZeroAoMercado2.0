function JurosSimples(capital, taxa, tempo) {
    return `${(capital * taxa * tempo) + capital}`
}

function JurosCompostos(capital, taxa, tempo) {
    return `${capital * (Math.pow((taxa + 1), tempo))}`
}

console.log(JurosSimples(1000, 0.02, 12), JurosCompostos(1000, 0.02, 12))