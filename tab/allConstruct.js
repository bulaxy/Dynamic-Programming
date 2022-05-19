const allConstruct = (target, wordArr) => {
    const arr = Array(target.length + 1).fill().map(() => [])
    arr[0] = [[]];

    for (let i in arr) {
        i = Number(i)
        if (!arr[i].length) continue

        subLoop: for (let word of wordArr) {
            if (target.slice(i, i + word.length) !== word) continue subLoop
            arr[i + word.length] = [
                ...arr[i + word.length],
                ...arr[i].map(subArr => [...subArr, word])
            ]
        }
    }

    return arr[target.length]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('aaaaaaaaaaaaaaaa', ['a', 'aaa', 'aa', 'aaaa']))