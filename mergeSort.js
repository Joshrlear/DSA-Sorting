function mergeSort(array) {
    // array is empty or only one index
    if (array.length <= 1) { return array }
    // declare middle, left and right of array
    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)
    // recurrsive calls on the left and right side
    left = mergeSort(left)
    right = mergeSort(right)
    count ++
    // array has been split into pairs of two and is ready to be merged
    return merge(left, right, array)
}

function merge(left, right, array) {
    console.log('left:', left, 'right:', right)
    // set left, right and output indexes to 0
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0
    // while left and right indexes are less than left and right length
    while (leftIndex < left.length && rightIndex < right.length) {
    // this is where the sorting happens
    // if left index is less than array index, set left as array index
    // on first run array index is the first value (left side of array)
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        // if the right index is less than array index, set right as array index
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        console.log('array[outputIndex]',array[outputIndex],'left[i]',left[i])
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        console.log('array[outputIndex]',array[outputIndex],'right[i]',right[i])
        array[outputIndex++] = right[i];
    }
    console.log('merge, array:', array, 'count:', count)
    return array;
}
let count = 0
mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])