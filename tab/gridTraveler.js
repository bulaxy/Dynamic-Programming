const gridTraveler = (m, n) => {
    const matrix = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))
    matrix[1][1] = 1

    for (let i in matrix) {
        i = Number(i)
        subLoop: for (let j in matrix) {
            j = Number(j)
            const current = matrix[i][j]

            if (j + 1 <= n) {
                matrix[i][j + 1] += current
            }

            if (i + 1 <= m) {
                matrix[i + 1][j] += current
            }
        }
    }
    return matrix[m][n]
}

console.log(gridTraveler(18, 18))