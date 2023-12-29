/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var kidsWithCandies = function (candies, extraCandies) {

     candies = [2, 3, 5, 1, 3];
     extraCandies = 3;
     output = []
     max_number = parseInt(Math.max.apply(Math, candies));
     candies.forEach(element => {
          if (element + extraCandies >= max_number) {
               output.push(true);
          }
          else {
               output.push(false);
          }
     });
     return(output);
};
kidsWithCandies()