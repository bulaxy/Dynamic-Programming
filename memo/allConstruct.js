const allConstruct = (target = String, arr = Array, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return [[]]

    let result = []

    for (let word of arr) {
        if (target.indexOf(word) !== 0) continue
        const remains = target.slice(word.length)
        const remainsCombination = allConstruct(remains, arr, memo)

        const combinations = remainsCombination.map(subArr => [word, ...subArr])
        result = [...result, ...combinations]
    }

    memo[target] = result
    return result
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))