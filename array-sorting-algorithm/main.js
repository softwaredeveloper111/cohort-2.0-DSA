/** bubble sort */

const arr = [10,9,8,7,6,5,4,3,2,1];


for(let i=1;i<arr.length;i++){
  let j = i-1;
  let key = arr[i];

  while (j>=0 && arr[j]>key) {
    arr[j+1] = arr[j]
    j--;
  }
  arr[j+1] = key
}


console.log(arr)