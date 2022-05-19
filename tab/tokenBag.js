const DEFAULT_BAG = {
    one: { tokenName: 'one', value: 1, count: 18 },
    bless: { tokenName: 'bless', value: 2, count: 2, redraw: true },
}

getNumCombination = (bag) => {
    const totalNonRedraw = bag.reduce((p, c) => c.count + p, 0)
    const totalRedraw = bag.reduce((p, c) => c.redraw ? c.count + p : p, 0)
    let result = 0
    for (let i = 0; i < totalRedraw + 1; i++) {
        result += totalNonRedraw - i
    }

}

getNumCombination(Object.keys(DEFAULT_BAG).map(key => DEFAULT_BAG[key]))

const getDrawCombinations = (index, bag = [], drewTokens = [], memo = {}) => {

    if (bag.length === 0) return []
    // Using memorisation to improve performance
    // If already have seen the same drawn token already, use the previous result
    if (memo[drewTokens.sort((a, b) => a.tokenName - b.tokenName)]) return memo[drewTokens.sort((a, b) => a.tokenName - b.tokenName)]
    let token = bag[index]

    let newDrewTokens = [...drewTokens, token]
    // Auto Fail
    if (token.tokenName === 'autoFail') {
        return [{ result: 'autoFail', token: newDrewTokens }]
    }
    // Frost Token from EotE
    if (token.tokenName == 'frost' && drewTokens.find(o => o.tokenName == 'frost')) {
        return [{ result: 'autoFail', token: newDrewTokens }]
    }
    // Standard Token
    if (!token.redraw) {
        return [{ result: sumArr(newDrewTokens, 'value'), token: newDrewTokens }]
    }

    // Token that require redraw token, appending
    const newBag = bag.filter((o, idx) => idx !== index)
    return newBag.reduce((prev, curr, i) => [...prev, ...getDrawCombinations(i, newBag, newDrewTokens)], [], memo)
}

