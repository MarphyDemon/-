/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let result = 0;
    if (height.length <= 1) {
        return result;
    }
    for (let i = 0, j = i+1; i < height.length, j < height.length;) {
        
        if (result < (Math.min(height[i], height[j]) * (j - i))) {
            result = (Math.min(height[i], height[j]) * (j - i));
            j++;
        } else {
            j++;
        }
        if (j >= height.length) {
            i++;
            j = i + 1;
        }
    }
    return result
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1