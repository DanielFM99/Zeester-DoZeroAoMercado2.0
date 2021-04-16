function RemoveVogal(palavra) {

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == "a" || palavra[i] == "e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u") {
            palavra = palavra.replace(palavra[i], '')

        }
    }
    return palavra
}

console.log(RemoveVogal("Cod3r"))