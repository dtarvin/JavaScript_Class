const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function filterOdd(arr) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// console.log(filterOdd(arr));

function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}

function isOdd(x) {
    return x % 2 !== 0;
}

function isEven(x) {
    return x % 2 === 0;
}

function isGreaterThanFive(x) {
    return x > 5;
}

console.log(filterFunction(arr, isOdd));

console.log(filterFunction(arr, isEven));

console.log(filterFunction(arr, isGreaterThanFive));

console.log(filterFunction(arr, (x) => x % 3 === 0));