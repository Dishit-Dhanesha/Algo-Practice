function TrappingRainWater(height) {
    if (height == null || height.length === 0) return 0;
  
    let res = 0;
    for (let i = 0; i < height.length; i++) {
      let lMax = 0;
      let rMax = 0;
  
      for (let j = 0; j < i; j++) {
        lMax = Math.max(lMax, height[j]);
      }
      for (let j = i + 1; j < height.length; j++) {
        rMax = Math.max(rMax, height[j]);
      }
  
      const water = Math.min(lMax, rMax) - height[i];
      if (water > 0) res += water;
    }
  
    console.log(res) ;
  }

  TrappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1])