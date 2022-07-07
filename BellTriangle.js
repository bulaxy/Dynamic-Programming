// let n = 5;

// console.time('My Attempt')
// let arr = new Array(n).fill(undefined).map(() => new Array(n + 1))

// // If 0, set it to always 1
// if (n === 0) return 1
// // Init value
// arr[0][0] = 1

// // Start Loop from 1 since 0,0 is filled
// for (let i = 1; i < n; i++) {
//     // get lasts value to put on the current spot
//     arr[i][0] = arr[i - 1][i - 1]

//     // Start Loop from 1 since 0 should be prefilled  from the line above.
//     nestedLoop: for (let j = 1; j < i + 1; j++) {
//         //  Add the number from 1 above and 1 to the left and the number directly to it's left to get curr value
//         arr[i][j] = arr[i - 1][j - 1] + arr[i][j - 1]
//     }
// }
// // Return 6th Row (since 1st Row is really just a placeholder)
// console.log(arr[n - 1][n - 1])
// console.timeEnd('My Attempt')
// // No noticable different between my attempt and solution

// let n = 5;

// console.time('Solution')
// function bellNumber(n) {
//     let bell = new Array(n + 1);
//     for (let i = 0; i < n + 1; i++) {
//         bell[i] = new Array(n + 1);
//     }
//     bell[0][0] = 1;

//     for (let i = 1; i <= n; i++) {
//         // Explicitly fill for j = 0
//         bell[i][0] = bell[i - 1][i - 1];

//         // Fill for remaining values of j
//         for (let j = 1; j <= i; j++)
//             bell[i][j] = bell[i - 1][j - 1] + bell[i][j - 1];
//     }
//     return bell[n][0];
// }


// // for (let n = 0; n <= 5; n++) {
// console.log(bellNumber(n));
// // }


// console.timeEnd('Solution')


// Non DP Solution? 
let n=5;
console.time('Bad Example')
let s = new Array(n+1);
for(let i=0;i<n+1;i++){
    s[i] = new Array(n+1);
    for(let j=0;j<n+1;j++){
        if(j>i) s[i][j]=0;
        else if(i==j) s[i][j]=1;
        else if(i==0 || j==0) s[i][j]=0;
        else{
 
            s[i][j]= j*s[i-1][j] + s[i-1][j-1];
        }
 
    }
}
let ans=0;
for(let i=0;i<n+1;i++){
    ans += s[n][i];
}
console.log(ans)
console.timeEnd('Bad Example')
