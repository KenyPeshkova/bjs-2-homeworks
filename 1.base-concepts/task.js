"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let res = Math.pow(b,2) - (4 * a * c);
  if (res<0){
    arr =[];
  }
  if (res===0){
   arr[0] = (- b / (2 * a));

  }
  if (res>0){
    arr[0] = (- b + Math.sqrt(res) ) / (2 * a);
    arr[1]=(- b - Math.sqrt(res) ) / (2 * a);
   
  }
  return arr;
}
"use strict"

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P = (percent / 12) / 100;
  let n = countMonths;
  let payment = S * (P + (P / ((Math.pow((1 + P), n)) - 1)));
  let sum = parseFloat((payment * n).toFixed(2)) ;
  return sum;

}