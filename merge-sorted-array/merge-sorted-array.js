/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums2.length === 0) {
    }
    for (let i = 0; i < n; i++){
        nums1.splice(m + i, 1, nums2[i]);
    }
    nums1.sort((a, b) => a - b);
};