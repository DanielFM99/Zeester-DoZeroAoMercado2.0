function ComparaChar(str1, str2) {
    let cont = 0
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
                cont++
                break
            }
        }
    }
    return cont
}

console.log(ComparaChar("aeiou", "AEIOU"))