/*
        Brute Force                 Memoization
       -------------              -----------------
       O(2^m+n) time               O(m*n) time
       O(m + n) space              O(m + n ) space
*/
// ***** General Solution ********************************
/*
                            (2,3)
                             / \
                           /     \
                         /         \
                      (1,3)        (2,2)
                      / \           / \
                    /   \          /     \
                  /     \         /        \
               (0,2)   (1,2)    (1,1)      (2,1)
                        / \                 / \
                       /   \             (1,0)  ......
                    (0,2)  (1,1)
*/
// Time complexity => O(2^m+n) Exponential time complexity
// Space complexity => O(m+n) 
// ----------------------------------------------------------------------------
/*
const gridTravel = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTravel(m - 1, n) + gridTravel(m, n - 1);
}
*/
// ------------------------------------------------------------------------
// *********** Dynamic Solution ****************************
/*
                            (2,3)
                             / \
                           /     \
                         /         \                      => memo = {
                      (1,3)        (2,2)                             1,3 : 1, 
                      / \           / \                              2,2 : 2, 
                    /   \          /     \                           1,2 : 1,
                  /     \         /        \                         2,1 : 1           
               (0,2)   (1,2)    (1,1)      (2,1)                     }
                        / \                 / \
                       /   \               ......
                    (0,2)  (1,1)
*/
// Time complexity => O(m*n) time complexity     m = { 0, 1, 2 }      n = { 0, 1, 2, 3 }
// Space complexity => O(m+n)
const gridTravel = (m, n, memo = {}) => {
    const key = `${m},${n}`;
    if (key in memo ) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTravel(m - 1 , n, memo) + gridTravel(m, n - 1, memo);
    return memo[key];
}

console.log(gridTravel(1,1))    // 1
console.log(gridTravel(1,2))    // 1
console.log(gridTravel(2,1))    // 1
console.log(gridTravel(3,3))    // 6
console.log(gridTravel(3,2))    // 3
console.log(gridTravel(18,15))  // 265182525