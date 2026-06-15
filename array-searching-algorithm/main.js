const arr = [1,5,9,12,23,34,45,67,78,89];

let target = 90;
let index = -1;

let st = 0;
let end = arr.length-1;


while (st<=end) {
  let mid = Math.floor((st+end)/2);
  if(arr[mid]===target){
    index = mid;
    break;
  }
  else if(target>arr[mid]){
    st = mid+1;
  }
  else{
    end = mid-1
  }
}



index ===-1?console.log("element not found"):console.log(`target element found at ${index}`)