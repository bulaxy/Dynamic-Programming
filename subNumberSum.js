let set = [3, 34, 4, 12, 5, 2], sum = 9
// let set = [3, 34, 4, 12, 5, 2], sum = 6
// let set = [3, 34, 4, 12, 5, 2], sum = 30
// let set = [3, 4, 5, 2], sum = 6

// Attempt 1 Basic Recursion

// console.time('Attempt 1')
// const attempt1 = (subSet, sum) => {
//     if (subSet.length === 0) return false
//     let result = false

//     for (let i in subSet) {
//         let localSet = subSet
//         let remains = sum - localSet.splice(i, 1)
//         if (remains < 0) continue
//         if (remains === 0) {
//             result = true
//             continue
//         }
//         result = result || attempt1(localSet, remains)
//     }
//     return result
// }

// console.log(attempt1(set, sum))
// console.timeEnd('Attempt 1')

// Attempt 2 - Rewriting Solution's Recursive Solution

// console.time('Attempt 2')
// const attempt2 = (sum, n) => {
//     if (sum === 0) return true
//     if (n === 0) return false

//     if (set[n - 1] > sum) return attempt2(sum, n - 1)

//     return attempt2(n - 1, sum) || attempt2(n - 1, sum - set[n - 1])
// }

// console.log(attempt2(sum, set.length))
// console.timeEnd('Attempt 2')

// Performance seems to be slightly worst than my recursion attempt
// Might want to think about why

// Attemp 3 - 2D Array

// console.time('Attemp 3')

// const attempt3 = (set, sum) => {
//     let matrix = [
//         new Array(sum).fill(false),
//         ...new Array(set.length).fill(new Array(sum).fill(false))
//     ]
//     matrix = matrix.map(arr => [true, ...arr])


//     // Going upwards to see whether that number is creatable
//     for (let i = 1; i <= sum; i++) {
//         nestedLoop: for (let j = 1; j <= set.length; j++) {
//             // That number is already creatable

//             matrix[j][i] = matrix[j - 1][i]
//             // // if value (0 to sum one) greater than the current number
//             if (i >= set[j - 1]) {
//                 // take the true value, whether the value is already creatable or that number in the matrix is creatable 
//                 // (eg j = 5, 2 is in the set, and current value is 3, it will check 5-3 = 2, the matrix at  position 2)
//                 matrix[j][i] = matrix[j][i] || matrix[j - 1][i - set[j - 1]]
//             }
//         }
//     }
//     console.table(matrix)
//     return matrix[set.length][sum]
// }

// console.log(attempt3(set, sum))
// console.timeEnd('Attemp 3')



console.time('Solution 2')
// Solution - Reworded 2D Array with Memo, dont quite understand, need to have a look at it again

let matrix = new Array(set.length + 1).fill(new Array(sum + 1).fill(-1))

const solution2 = (n, sum) => {
    if (sum == 0) return 1
    if (n <= 0) return 0

    if (matrix[n - 1][sum] != -1) return matrix[n - 1][sum]

    if (matrix[n - 1] > sum) return matrix[n - 1][sum] = solution2(n - 1, sum)

    return matrix[n - 1][sum] = matrix[n - 1][sum] = solution2(n - 1, sum) || solution2(n - 1, sum - set[n - 1])
}
console.log(solution2(set.length, sum))
console.timeEnd('Solution 2')
