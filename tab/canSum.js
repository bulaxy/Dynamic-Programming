const canSum = (target, numArr) => {
    const arr = Array(target + 1).fill(false)
    arr[0] = true

    for (let i in arr) {
        i = Number(i)
        if (!arr[i]) continue

        subLoop: for (let num of numArr) {
            if (i + num > target) continue subLoop
            arr[i + num] = true
        }
    }

    return arr[target]
}

console.log(canSum(10, [3, 6]))
console.log(canSum(10, [3, 2]))