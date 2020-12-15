// Create a function that takes an array of arrays with numbers. 
// Return a new (single) array with the largest numbers of each.

//you code here
const findLargestNums = function(arr) {
    let resultArr = [];

    for (i = 0; i < arr.length; i++) {
        let tmpMax = arr[i][0];

        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > tmpMax) {
                tmpMax = arr[i][j];
            }
        }

        resultArr.push(tmpMax);
    }

    return resultArr;
}


console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
// ➞ [7, 90, 2]

console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); 
// ➞ [-34, -2, 7]

console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); 
// ➞ [0.7634, 9.32, 9]