# // BruteForce
# function SubArray0(arr, sum) {
#     let counter = 0;
#     for (let i=0;i<arr.length;i++) {
#         let base = 0;
#         for (let j=i;j<arr.length;j++) {
#             base+=arr[j];
#             if (base == sum) counter++;
#         }
#     }
#     if(counter > 0){
#         console.log("True") ;
#     }else{
#         console.log("False") ;
#     }
    
# };

# subarraySumBF([4,2 ,-3, 1, 6], 0)

# // Using Hash Map

# var subarraySumHashMap = function(arr, k) {
#     let map = new Map();
#     let sum = 0;
#     let count = 0;
#     map.set(0,1);
#     console.log(map)
#     for (let i=0;i<arr.length;i++) {
#         console.log(map)
#         sum += arr[i];
#         if (map.has(sum-k)) count += map.get(sum-k);
#         if (map.has(sum)) map.set(sum, map.get(sum)+1);
#         else map.set(sum, 1);
#     }
#     console.log(count);
# }

# subarraySumHashMap([4,2 ,-3, 1, 6], 0)




#Brute Force 

def SubArray0(arr , sum):
    counter = 0
    for i in range(0, len(arr),1):
        base = 0
        for j in range(i, len(arr), 1):
             base+=arr[j]
             if base == sum:
                 counter+=1

    if counter > 0:
        print("True")
    else: 
        print("False")

SubArray0([4,2 ,-18, 1, 6], 0)


#HashMap
from typing import List
def subarraySum( nums: List[int], k: int) -> int:
       d = {}
       d[0] = 1
       s = 0
       count = 0
       for i in range(len(nums)):
           s += nums[i]
           if s-k in d: # --- I
               count += d[s-k]
               # or return True
               # or return indicies
           
           # add sum to frq dict
           if s in d:
               d[s] += 1 # --- II
           else:
               d[s] = 1
       
       print(count) 
       
subarraySum([4,2 ,-18, 1, 6], 0)