// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function (strs) {
//     let obj = {}, result = [], result1 = [];
//     for (let i = 0; i < strs.length; i++) {
//         if (strs[i] == "") {
//             result1.push(strs[i]);
//         } else {
//             const key = hasDiffLocationWord(obj, strs[i]);
//             if (key) {
//                 obj[key].push(strs[i]);
//             } else {
//                 obj[strs[i]] = [strs[i]];
//             }
//         }
//     }

//     Object.keys(obj).forEach(item => {
//         result.push(obj[item]);
//     })
//     if (result1 && result1.length) {
//         result.push(result1);
//     }
//     return result;
// };

// // 判断已有异位词
// var hasDiffLocationWord = function (obj, str) {
//     let result = ""
//     Object.keys(obj).forEach(key => {
//         if (isNotDiffLocationWord(key, str)) {
//             result = key;
//         }
//     })
//     return result
// }

// var isNotDiffLocationWord = function (key, str) {
//     let result = true;
//     let keyObj = new Map(); let strObj = new Map();
//     if(key.length != str.length) return false;
//     for (let i = 0; i < key.length; i++) {
//         if (keyObj.has(key[i])) {
//             keyObj.set(key[i], keyObj.get(key[i]) + 1);
//         } else {
//             keyObj.set(key[i], 1);
//         }
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (strObj.has(str[i])) {
//             strObj.set(str[i], strObj.get(str[i]) + 1);
//         } else {
//             strObj.set(str[i], 1);
//         }
//     }
//     keyObj.forEach((value, key) => {
//         if (value != strObj.get(key)) {
//             result = false
//         }
//     })
//     return result
// }
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = [];
    let map = new Map();
    for(let i of strs) {
        const key = i.split("").sort().join("");
        if(!map.has(key)) map.set(key, []);
        map.get(key).push(i);
    }
    map.forEach(i=> {
        result.push(i);
    })
    return result;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);