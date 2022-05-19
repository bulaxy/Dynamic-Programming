const DEFAULT_BAG = {
    one: { tokenName: 'one', value: 1, count: 0 },
    zero: { tokenName: 'zero', value: 0, count: 0 },
    minusOne: { tokenName: 'minusOne', value: -1, count: 0 },
    minusTwo: { tokenName: 'minusTwo', value: -2, count: 0 },
    minusThree: { tokenName: 'minusThree', value: -3, count: 0 },
    minusFour: { tokenName: 'minusFour', value: -4, count: 0 },
    minusFive: { tokenName: 'minusFive', value: -5, count: 0 },
    minusSix: { tokenName: 'minusSix', value: -6, count: 0 },
    minusSeven: { tokenName: 'minusSeven', value: -7, count: 0 },
    minusEight: { tokenName: 'minusEight', value: -8, count: 0 },
    bless: { tokenName: 'bless', value: 2, count: 0, redraw: true },
    cultist: { tokenName: 'cultist', value: undefined, count: 0, customValue: true },
    curse: { tokenName: 'curse', value: -2, count: 0 },
    elderSign: { tokenName: 'elderSign', value: 1, count: 1, customValue: true },
    elderThing: { tokenName: 'elderThing', value: undefined, count: 0, customValue: true },
    frost: { tokenName: 'frost', value: -1, count: 0, redraw: true }, // 2 frost token = fail
    skull: { tokenName: 'skull', value: undefined, count: 0, customValue: true },
    tablet: { tokenName: 'tablet', value: undefined, count: 0, customValue: true },
    autoFail: { tokenName: 'autoFail', value: -999, count: 1 }
}

const getDrawCombinations = (index, bag = [], drewTokens = [], memo = {}) => {
    if (bag.length === 0) return []
    // Using memorisation to improve performance
    // If already have seen the same drawn token already, use the previous result
    const key = JSON.stringify(drewTokens.sort((a, b) => a.tokenName - b.tokenName))
    if (memo[key]) return memo[key]
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
    memo[key] = newBag.reduce((prev, curr, i) => [
        ...prev,
        ...getDrawCombinations(i, newBag, newDrewTokens, memo)]
        , [], memo)
    return memo[key]
}

