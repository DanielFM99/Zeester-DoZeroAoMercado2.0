function Idade(altura1, altura2, taxa1, taxa2) {
    let anos = 0

    if (altura1 > altura2 && taxa2 > taxa1) {
        for (let i = 0; altura1 > altura2; i++) {
            altura1 += taxa1
            altura2 += taxa2
            anos++
        }
        return anos
    }

    else if (altura2 > altura1 && taxa1 > taxa2) {
        for (let i = 0; altura2 > altura1; i++) {
            altura1 += taxa1
            altura2 += taxa2
            anos++
        }
        return anos
    }

    else return "cocô"

}

console.log(Idade(160, 185, 10, 5))