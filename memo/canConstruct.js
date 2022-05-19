const canConstruct = (target, arr, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return true

    for (let word of arr) {
        // Only take the first part of the word out
        if (target.indexOf(word) !== 0) continue

        const remains = target.slice(word.length)
        if (canConstruct(remains, arr, memo) === false) continue
        memo[target] = true
        return true
    }

    memo[target] = false
    return false
}

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['ee', 'e']))