// 题目：Two Sum（题目编号：1） 难度：Easy 类别：Array

// 题目描述： 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 示例： 输入：nums = [2,7,11,15], target = 9 输出：[0,1] 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 注意：这道题目是经常在前端面试中出现的数据结构和算法题目。

var twoSum = function (sums, target) {
  var map = new Map();
  for (let i = 0; i < sums.length; i++) {
    if (map.has(target - sums[i])) {
      return [map.get(target - sums[i]), i];
    }
    map.set(sums[i], i);
  }
  return [];
};

twoSum([2, 7, 11, 15], 9);
