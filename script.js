const myArray = [1,5,9,3,4,2,5,1, 0, 1];

function bubleSort() {
    for(i=0; i<myArray.length; i++)
    {
        if(myArray[i] < myArray[i+1]) {
            let tmp = myArray[i+1];
            myArray[i+1]=myArray[i];
            myArray[i] = tmp;
        }

        console.log('Iteration ', i,myArray);
    }


}
//  .sort(function(a, b){return b - a})[1]
//        // console.log(index,item, nums.indexOf(item));
function getSecondLargest(nums) {
    return nums.filter((item,index)=>
           nums.indexOf(item) === index)
        .sort(function(a, b){return b - a})[1];

}
//
// //bubleSort();
// console.log(getSecondLargest(myArray));
//
// //(2).plus(3).minus(1)
// Number.prototype.plus = function (value) {
//     return this+value;
// }
//
// Number.prototype.minus = function (value) {
//     return this-value;
// }
//
// console.log((20).plus(3).minus(1));

for(let i=0; i<3;i++) {
    setTimeout(1000);
    var j=1;
    console.log(i+j);

}

//hosting
console.log(num);
var num=1;//const and let - do not support hosting
//Function expression & Function declaration

//Function declaration - Можем определять где угодно
console.log(square(5));
function square(num) {
    return num**2;
}

//Let from ES6
//let - можем сделать переопределение
let a=5;
let b=1;
{
    a=3;
    let b = 0;
    console.log(a);
    console.log(b);
}

//Closures - замыкания - фун-я внутри йунции
function SayHelolo(name)
{
    const message = 'Hello' + name;
    return function () {
        console.log(message);
    }
}

const hello = SayHelolo('Helga');
    hello();
//
// function CreateFrameWork()
// {
//     const ar = ['Angular JS', 'React'];
//     return {
//         print:function () {
//         console.log(ar);
//         }
//     }
// }
//
// const fw = CreateFrameWork();
// fw.print();
//
// //setTimeOut
// const ar = ['JS', 'React'];
// for(var i=0; i<ar.length; i++)
// {
//     (function (j) {
//         setTimeout(function () {
//             console.log(ar[j])
//         }, 1000)
//     })(i)
// }


const factorial = n => n > 1 ? n * factorial(--n) : 1;
const n = 3;
console.log(factorial(n));


