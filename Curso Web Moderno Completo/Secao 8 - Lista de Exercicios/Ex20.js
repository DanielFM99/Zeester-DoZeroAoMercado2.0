function AreaTriangulo(base, altura){
    let area = (base * altura) / 2

    return area.toPrecision(2)
}

console.log(AreaTriangulo(10, 15))