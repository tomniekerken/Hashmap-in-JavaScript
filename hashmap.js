// Time complexity is O(n²)
// Space complexity is O(1)

let nums = [2, 7, 11, 18]
let target = 25

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return console.log([i, j])
            }
        }
    }
}

twoSum(nums, target)