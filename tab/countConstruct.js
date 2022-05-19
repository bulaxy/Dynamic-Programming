const countConstruct = (target, wordArr) => {
    const arr = Array(target.length + 1).fill(0)
    arr[0] = 1

    for (let i in arr) {
        i = Number(i)
        if (!arr[i]) continue
        subLoop: for (let word of wordArr) {
            if (target.slice(i, i + word.length) !== word) continue subLoop
            arr[i + word.length] += arr[i]
        }
    }
    return arr[target.length]
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))