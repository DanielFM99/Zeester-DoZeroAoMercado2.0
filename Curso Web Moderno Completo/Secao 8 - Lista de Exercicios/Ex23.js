function RemoveEspaco(frase) {
    let cont = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == ' ') {
            cont++
        }

    }

    return cont
}

console.log(RemoveEspaco("A sorte favorece os audazes"))