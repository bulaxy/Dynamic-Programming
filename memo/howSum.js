const howSum = (target, numArr, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return false

    for (let num of numArr) {
        const remainder = target - num
        const subResult = howSum(remainder, numArr, memo)
        if (subResult === false) continue
        memo[target] = [...subResult, num]
        return memo[target]
    }
    memo[target] = false
    return memo[target]
}

console.log(howSum(7, [4, 2, 3, 5]))