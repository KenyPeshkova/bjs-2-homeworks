function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let i;
  if (arr.length == 0){
    return 0;
  }
  else {
    for (i = 0; i < arr.length; ++i){
      if ( arr[i] > max){
        max = arr[i];
       }
      if ( arr[i] < min){
        min = arr[i];
      }
      sum = sum + arr[i]; 
    }
     let avg = parseFloat((sum / i ).toFixed(2));
    return { min: min, max: max, avg: avg };
  }
  
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length == 0){
    return 0;
  }
  else{
    for (let i = 0; i < arr.length; ++i){
      sum = sum + arr[i]; 
    }
    return sum;
}
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length == 0){
    return 0;
  }
  else{
  for (let i = 0; i < arr.length; ++i){
    if(arr[i] > max){
      max = arr[i];
     }
    if (arr[i] < min){
      min = arr[i];
    } 
    
  }
  return max - min;
}
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length == 0){
    return 0;
  }
  else{
    for (let i = 0; i < arr.length; ++i){
      if (arr[i] % 2 === 0 ){
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length == 0){
    return 0;
  }
  else{
    for ( let i = 0; i<arr.length; ++i){
      if (arr[i] % 2 === 0 ){
        sumEvenElement = sumEvenElement + arr[i];
        ++countEvenElement;
      };
    }
    if (countEvenElement === 0){
      return 0;
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0])
  for ( let i = 0; i < arrOfArr.length; ++i){
      const rez = func(...arrOfArr[i]);
      if (rez > maxWorkerResult){
        maxWorkerResult = rez;
      }
  }
  return maxWorkerResult;
}

