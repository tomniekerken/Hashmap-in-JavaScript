# JavaScript Hashmaps

In this repository, we will explore the use of hashmaps in JavaScript and the time complexity difference between two different implementations of the two-sum problem.

The first implementation uses nested loops to check each element of the input array and has a time complexity of O(n²) and a space complexity of O(1).

`let nums = [2, 7, 11, 18]
let target = 25

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum(nums, target))`

The second implementation uses a JavaScript Map object to store the elements of the input array as key-value pairs and has a time complexity of O(n) and a space complexity of O(n).

`const twoSumMap = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let targetValue = target - nums[i]
        let matchValue = map.get(targetValue)
        if (matchValue !== undefined) {
            return [matchValue,i]
        }
        map.set(nums[i], i)
    }
}

console.log(twoSumMap(nums, target))`

As you can see, using a hashmap data structure in JavaScript can lead to a much more efficient solution in terms of time complexity, while still having a reasonable space complexity.

It's worth noting that the specific implementation and use of hashmaps can vary depending on the problem and the specific requirements of the application. However, understanding the basic concepts and trade-offs of time and space complexity can help make informed decisions when designing and optimizing algorithms.

This repository serves as a simple example of the use of hashmaps in JavaScript and the time complexity difference between different implementations of the two-sum problem. You can use it as a starting point for further experimentation and learning.