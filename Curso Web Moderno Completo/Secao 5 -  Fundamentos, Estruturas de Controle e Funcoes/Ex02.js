function Triangulo(x, y, z) {
    if (x == y && y == z) {
        return "Triângulo Equilátero"
    }

    else if (x != y && y != z && x != z) {
        return "Triângulo Escaleno"
    }

    else {
        return "Triângulo Isósceles"
    }
}

console.log(Triangulo(3, 3, 3))