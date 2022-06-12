/*
--------------- General Solution -------------------------
                                  (7)
                               /  | \  \
                            -2/ -3| -4\-7\
                             /    |    \   \
                           5     4    3    0
                       /  | \    |    \     \
                    -2/ -3|-4\ -2|      \     \ 
                     3    2   1
                    ...   ..      ..     ...  ...  ..
Time complexity => O(n^m) Exponential time complexity where m = targetSum & n = length of numbers
space complexity => O(m)
*/
/*
const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0 ) return false;

    for(let num of numbers) {
        const reminder = targetSum - num;
        if(canSum(reminder, numbers) === true){
            return true;
        }
    }
    return false;

}
*/
/*
--------------- Dynamic Solution -------------------------
                                  (7)
                               /  | \  \
                            -2/ -3| -4\-7\
                             /    |    \   \
                           5     4    3    0
                       /  | \    |    \     \
                    -2/ -3|-4\ -2|      \     \ 
                     3    2   1
                    ...   ..      ..     ...  ...  ..
Time complexity => O(m * n)  where m = targetSum & n = length of numbers
space complexity => O(m)
*/
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0 ) return false;

    for(let num of numbers) {
        const reminder = targetSum - num;
        if(canSum(reminder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;

}


console.log(canSum(5, [1,2,3,4,5])); // true
console.log(canSum(7, [2,3,4,7])); // true
console.log(canSum(5, [2,4])); // false
console.log(canSum(300, [7,14])); // false