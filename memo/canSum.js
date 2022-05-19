const canSum = (target, numArr, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return true
    if (target < 0) return false

    for (let num of numArr) {
        const remainder = target - num
        if (canSum(remainder, numArr, memo) === false) continue
        memo[target] = true
        return memo[target]
    }
    memo[target] = false
    return memo[target]
}

console.log(canSum(700, [3]))