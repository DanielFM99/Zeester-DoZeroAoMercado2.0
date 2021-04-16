function Compara(num, max, min, incl = false) {
    if (incl == true) {
        if (num <= max && num >= min) {
            return true
        }

        else {
            return false
        }
    }

    else if (incl == false) {
        if (num < max && num > min) {
            return true
        }

        else {
            return false
        }
    }
}

console.log(Compara(75, 100, 50))