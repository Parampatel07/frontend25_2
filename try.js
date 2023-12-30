/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
     nums = [-1,1,0,-3,3];
     let answer = [];
     let temp = 1;

     for (let flash = 0; flash < 4; flash++) {
          for (let count = 0; count < 4; count++) {
               if (flash != count) {
                    temp = temp * nums[count];
               }
          }
          answer[flash] = temp;
          temp = 1;
     }
     console.log(answer);
};
productExceptSelf('');