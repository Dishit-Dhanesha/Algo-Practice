function jumpToEnd(nums) {
  let newMax = 0;
  let jump = 0;
  let oldMax = 0;
  for (let i=0;i<nums.length-1;i++) {
      newMax = Math.max(newMax, i+nums[i]);
      if (i == oldMax) {
          jump++;
          oldMax = newMax;
      }
  }
  console.log(jump) ;
};


jumpToEnd([1 , 2  , 3 , 5 , 8 , 9 , 1 ,])