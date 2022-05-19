const howSum = (target, numArr) => {
    const arr = Array(target + 1).fill(false)
    arr[0] = []

    for (let i in arr) {
        i = Number(i)
        if (!arr[i]) continue
        subLoop: for (let num of numArr) {
            if (i + num > target || arr[i + num]) continue subLoop
            arr[i + num] = [...arr[i], num]
        }
    }

    return arr[target]
}

console.log(howSum(10, [3, 5, 2]))
console.log(howSum(8, [2, 3, 5]))
console.log(howSum(7, [2, 3]))