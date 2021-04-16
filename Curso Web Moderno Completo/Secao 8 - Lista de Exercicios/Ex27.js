function ObjInverted(obj) {
    var obj2 = {};

    Object.keys(obj).forEach(function (key) { obj2[obj[key]] = key });

    return obj2
}

console.log(ObjInverted({
    a: 1,
    b: 2,
    c: 3
}))