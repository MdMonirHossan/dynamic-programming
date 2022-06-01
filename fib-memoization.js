
// General solution
/**
                            7
                           / \
                          6   5
                         / \  ...
                        /   \
                       /     \   
                      /       \
                     5         4
                    /   \      / \
                   /     \    3   2
                  4      3    ...
                 / \     /\
                /   \    2 1
               3     2
              / \
             /   \
            2     1
*/
// Time complexity => O(2^n) ====> Exponential time complexity =>
// Space complexity => O(n) 
// const fib = (n) => {
//   if (n <= 2) return 1;     // Best case 
//   return fib(n - 1) + fib(n - 2);
// };

// ------------------------------------------------------------------------------------------

// Dynamic solution
/**
                      7
                     / \
{                   6   5 
7 : 13             / \
6 : 8             5   4
5 : 5            / \
4 : 3           4   3
3 : 2          / \
}             3   2
             / \
            2   1
*/
// Time complexity => O(2n) which is O(n) ======> Linear time complexity
// Space complexity => O(n)
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]; // Return from the stored object if found
    if (n <= 2) return 1; // Best case
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);  
    return memo[n];
}



console.log(fib(3));  // 2
console.log(fib(4));  // 3
console.log(fib(7));  // 13
console.log(fib(50)); // 12586269025
