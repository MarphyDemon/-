var arr = [12, 30, 22, 31, 32, 53, 56, 75, 84, 54, 76, 87, 98, 69, 70, 99, 93];

// function getSortArr(arr, digInt) {
//   arr.forEach((ele) => {
//     const value = ele % digInt;
//     obj[value].push(ele);
//   });
//   var result = [];
//   Object.keys(obj).forEach((key) => {
//     result = result.concat(obj[key]);
//     obj[key] = [];
//   });
//   result.forEach((ele) => {
//     const value = parseInt(ele / digInt);
//     obj[value].push(ele);
//   });
//   var result1 = [];
//   Object.keys(obj).forEach((key) => {
//     result1 = result1.concat(obj[key]);
//   });
//   console.log(result1);
// }

function getSortArr(arr, digInt) {
  var obj = {};
  if (digInt <= 0) return arr;
  arr.forEach((ele) => {
    const value = String(ele).slice(digInt - 1, digInt);
    if (!obj[value]) {
      obj[value] = [];
    }
    obj[value].push(ele);
  });
  var result = [];
  Object.keys(obj).forEach((key) => {
    result = result.concat(obj[key]);
  });
  return getSortArr(result, --digInt);
}
console.log(getSortArr(arr, 2));
