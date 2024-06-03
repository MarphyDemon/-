var arr = [
  [1, 2, 3],
  [2, 4, 5],
  [1, 3, 6, 7],
  [0, 3, 5, 9],
];
// 解法一
// function getResult(arr) {
//   let result = [];
//   if (!Array.isArray(arr)) {
//     throw new Error("params is not an Array");
//   }
//   if (arr.length === 1) return arr;
//   for (let item of arr) {
//     result = result.concat(item);
//   }
//   result.sort((a, b) => a - b);
//   return result;
// }

// 解法二
// function getResult(arr) {
//   let result = [];
//   let i = (c = j = 0);
//   while (c <= arr.length) {
//     if (i > arr.length - 1) {
//       c = c + 1;
//       i = 0;
//       j = j + 1;
//     }
//     if (isNaN(arr?.[i]?.[j])) {
//       i++;
//       continue;
//     }
//     if (!result.length) {
//       result.push(arr[i][j]);
//       i++;
//     } else {
//       for (let k = result.length - 1; k >= 0; k--) {
//         if (arr[i][j] >= result[k]) {
//           result.splice(k + 1, 0, arr[i][j]);
//           i++;
//           break;
//         } else if (arr[i][j] <= result[0]) {
//           result.unshift(arr[i][j]);
//           i++;
//           break;
//         }
//       }
//     }
//   }
//   return result;
// }

// 解法三
function getResult(arr) {
  var result = [];
  for (let subArr of arr) {
    for (let item of subArr) {
      const findIndex = result.findIndex((resultItem) => resultItem >= item);
      if (findIndex === -1) {
        result.push(item);
      } else {
        result.splice(findIndex, 0, item);
      }
    }
  }
  return result;
}

console.log(getResult(arr));
