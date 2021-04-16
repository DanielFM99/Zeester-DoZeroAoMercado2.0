function Inverter(x) {
    if (typeof x == "boolean") {
        if (x == true) return false
        else {
            return true
        }
    }

    else if (typeof x == "number") {
        return x * (-1)
    }

    else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof x}`
    }
}

console.log(Inverter("25"))