let A = [-1, 0, 1, 3, 5]

function solution(A) {
    let positiveNumbers = A.filter(number => number > 0)
    let smallest = Math.min(...positiveNumbers)
    return smallest
}

console.log(solution(A))