const bestSum = (target, numArr) => {
    const arr = Array(target + 1).fill(false)
    arr[0] = []

    for (let i in arr) {
        i = Number(i)

        if (!arr[i]) continue
        subLoop: for (let num of numArr) {
            if (i + num > target || arr[i + num].length < arr[i].length + 1) continue subLoop
            arr[i + num] = [...arr[i], num]
        }
    }
    return arr[target]
}

console.log(bestSum(10, [3, 5, 2]))