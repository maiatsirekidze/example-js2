
// let numbers = [-5, 3, 7, -2, 0, 8];
// console.log(numbers)
// let positiveNumbers =  numbers.filter(n => n > 0);

// console.log(positiveNumbers); 
// function myfilter(arr){
//     let x = []
//     arr.forEach(n => {
//         if(n>0){
//            x.push(n)
//         }
//     });
//     return x

// }
// console.log(myfilter(numbers))
let numbers = [-5, 3, 7, -2, 0, 8];
console.log(numbers);

function myfilter(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] <= 0) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
   
}

myfilter(numbers); 

console.log(numbers); 
