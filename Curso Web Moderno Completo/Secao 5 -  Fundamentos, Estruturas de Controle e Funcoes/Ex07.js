function Bhaskara(ax2, bx, c) {
    let resultado = []
    let delta = (Math.pow(bx, 2)) - 4 * ax2 * c

    if (delta < 0) return "Delta é negativo"

    else {
        resultado[0] = (-bx + Math.sqrt(delta)) / (2 * ax2)
        resultado[1] = (-bx - Math.sqrt(delta)) / (2 * ax2)
    }

    return resultado
}

console.log(Bhaskara(2, 3, -5))