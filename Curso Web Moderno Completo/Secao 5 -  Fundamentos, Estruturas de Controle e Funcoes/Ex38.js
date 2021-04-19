function Impar(inicio, fim) {
    corrigido = [fim, inicio].sort()

    for (let i = corrigido[0]; i <= corrigido[1]; i++)
        if (i % 2 == 1) console.log(i)
}

Impar(100, 1)