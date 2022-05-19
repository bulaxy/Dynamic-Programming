const canConstruct = (target, wordArr) => {
    const arr = Array(target.length + 1).fill(false)
    arr[0] = true

    for (let i in arr) {
        i = Number(i)
        if (!arr[i]) continue
        subLoop: for (let word of wordArr) {
            if (target.slice(i, i + word.length) !== word) continue subLoop
            arr[i + word.length] = true
            if (target.length === i + word.length) break
        }
    }

    return arr[target.length]
}

console.log(canConstruct('abcdef', ['abc', 'def']))