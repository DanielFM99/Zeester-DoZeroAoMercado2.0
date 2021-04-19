function Fatorial(num) {
    if (num == 0 || num == 1) {
        return 1
    }

    else {
        return num * Fatorial(num - 1)
    }
}

console.log(Fatorial(6))