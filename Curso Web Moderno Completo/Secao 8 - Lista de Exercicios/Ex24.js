function ContaChar(char, frase) {
    let cont = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == char) {
            cont++
        }
    }
    return cont
}

console.log(ContaChar("c", "Conhece-te a ti mesmo"))