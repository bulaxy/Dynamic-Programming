const bestSum = (target, numArr, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return false

    let shortest

    for (let num of numArr) {
        const remainder = target - num;
        const combination = bestSum(remainder, numArr, memo)
        if (combination === false) continue

        const newCombination = [...combination, num]
        if (shortest?.length <= newCombination.length) continue
        shortest = newCombination
    }

    memo[target] = shortest
    return shortest
}

console.log(bestSum(100, [1, 25]))