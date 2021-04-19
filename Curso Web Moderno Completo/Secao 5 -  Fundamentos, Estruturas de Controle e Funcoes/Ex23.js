function MediaPonderada(cod, nota1, nota2, nota3) {
    if (cod >= 0) {
        let notas = [nota1, nota2, nota3].sort()
        let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

        if (media >= 5) {
            return `${cod}, ${notas[0]}, ${notas[1]}, ${notas[2]}, ${media}, Aprovado`
        }

        else if (media < 5) {
            return `${cod}, ${notas[0]}, ${notas[1]}, ${notas[2]}, ${media}, Reprovado`
        }
    }

    else return "Inválido"
}

console.log(MediaPonderada(12056, 6, 4, 5))