const arr = [4,57,8,443,23,14,5,67];




for(let i=1;i<arr.length;i++){
  let key = arr[i];
  let j = i-1;
  while(j>=0 && arr[j]>key){
      arr[j+1] = arr[j];
      j--;
  }
  arr[j+1] = key
}


console.log(arr)