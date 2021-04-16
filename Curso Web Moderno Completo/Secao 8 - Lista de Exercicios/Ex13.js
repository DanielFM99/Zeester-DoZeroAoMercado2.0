function FiltraNumero(arr) {
    let arr2 = []
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            arr2[j] = arr[i]
            j++
        }
    }
    return arr2
}

console.log(FiltraNumero([1, 2, "3", "Web", "Web", "Web", "Web", 5, 6]))