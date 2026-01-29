// Time complexity is O(n²)
// Space complexity is O(1)



const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// console.log(twoSum(nums, target))

// Much more effective way in the time complexity
// Time complexity is O(n)
// Space complexity is O(n)

let nums = [2, 7, 11, 18]
let target = 25

const twoSumMap = (nums, target) => {

    // Map Variable instanziieren
    let map = new Map();

    // For-loop durch nums[]
    // Zuerst wird die Differenz zwischen target und aktuellem nums[i] berechnet

    for (let i = 0; i < nums.length; i++) {

        let targetValue = target - nums[i]

        console.log("targetvalue: ", targetValue)

        let matchValue = map.get(targetValue)

        console.log("matchvalue: ", matchValue)

        if (matchValue !== undefined) {
            return [matchValue,i]
        }

        map.set(nums[i], i)

        console.log("new map", map)
    }
}

twoSumMap(nums, target)