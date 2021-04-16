function RemovePropriedade(obj, prop) {
    let obj2 = Object.assign({}, obj)
    delete obj2[prop]
    return obj2
}

console.log(RemoverPropriedade({
    a: 1,
    b: 2,
    c: 3,
    daniel: "daniel"
}, "a"))