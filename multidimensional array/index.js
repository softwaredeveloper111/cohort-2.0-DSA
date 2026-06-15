
const prompt = require("prompt-sync")();



function generateRamdomNumber(){
  return Math.floor((Math.random()*49+1))
}





// let arr = [
//   [10,20,30],
//   [40,50,60],
//   [70,80,90]
// ]

// let arr = Array.from({length:3},()=>new Array(3).fill(0))






// let arr = new Array(3);

// for(let i=0;i<arr.length;i++){
//   arr[i] = new Array(2);
// }




// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     arr[i][j] = generateRamdomNumber();
    
//   }
// }




// console.log(arr)








/** jagged array */


// const arr = new Array(3);


// for(let i=0;i<arr.length;i++){
// const n = Number(prompt("enter the dimension: "));
// arr[i] = new Array(n);

// }




// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     arr[i][j] = generateRamdomNumber();
  
//   }
// }



// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     process.stdout.write(arr[i][j]+" ");
//   }
//   console.log();
// }







/** practise */

// let arr = new Array(3)


// for(let i=0;i<arr.length;i++){
//   let dimension = Number(prompt("Enter the dimension: "));
//   arr[i] = new Array(dimension);
// }


// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     arr[i][j] = generateRamdomNumber();
//   }
// }

// for(let i=0;i<arr.length;i++){

//   for(let j=0;j<arr[i].length;j++){
//        process.stdout.write(arr[i][j]+" ")
//   }
//   console.log()
// }


let arr = new Array(2).fill(new Array(2).fill(0));
arr[0][0] = 5;
console.log(arr);



let arr1 = Array.from({length:2},()=>new Array(2).fill(0));
arr1[0][0] =5;
console.log(arr1)