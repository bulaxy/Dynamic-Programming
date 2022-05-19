const countConstruct = (target, arr, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return 1

    let totalCnt = 0
    for (let word of arr) {
        // Only take the first part of the word out
        if (target.indexOf(word) !== 0) continue
        const remains = target.slice(word.length)
        const subCnt = countConstruct(remains, arr, memo)
        totalCnt += subCnt
    }

    memo[target] = totalCnt
    return totalCnt
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))