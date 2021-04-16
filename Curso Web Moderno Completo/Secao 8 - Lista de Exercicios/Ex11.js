function PrintFirstLast(arr) {
    let arr2 = []
    arr2[0] = arr[0]
    arr2[1] = arr[arr.length - 1]

    return arr2
}

console.log(PrintFirstLast(["daniel", 2, 3]))