/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let l1 = nums1.length;
  let l2 = nums2.length;
  let target = (l1 + l2) / 2;
  let target2 = 0;
  let curr = 0;
  let fin = 0;
  if (target % 2 === 0) {
    target2 = target - 1;
  }
  else {
    target = Math.floor(target);
  }
  let curr = 0;
  if (l1 === 0) {
    if (l2 % 2 === 0) {
      return (nums2[(l2 / 2) - 1] + nums2[l2 / 2]) / 2
    } else {
      return nums[Math.floor(l2 / 2)];
    }
  }
  if (l2 === 0) {
    if (l1 % 2 === 0) {
      return (nums2[(l1 / 2) - 1] + nums2[l1 / 2]) / 2
    } else {
      return nums[Math.floor(l1 / 2)];
    }  
  }
  for (let i = 0, j = 0; i < l1 || j < l2;) {
    if (i === l1) {
      if (target2 !== 0) {
        if (fin !== 0) {
          fin += nums2[++j];
        }
      }
      else {
        
      }
    }

    if (nums1[i] <= nums2[j]) {
      i++;
      curr++;
      if (curr === target || (target2 !== 0 && curr === target2)) {
        fin += nums1[i];
      }
    } else {
      j++;
      curr++;
      if (curr === target || (target2 !== 0 && curr === target2)) {
        fin += nums2[j];
      }
    }
  }

  if ()

};