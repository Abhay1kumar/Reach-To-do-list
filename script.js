// let array =[10,19,1,13,4,15,6,17];

// let odd=[];
// let even=[];
// for (num in array) {
//     if(num % 2 == 1) {
//         odd.push(num)
//     } else{
//         even.push(num)
//     }
// }

// console.log(odd);
// console.log(even);

// let assending =array.sort((a,b)=> a-b);
// console.log(assending);
// let descending = array.sort((a,b)=> b- a);

// console.log(descending);



// let arr = new Array (10,20,30);
// let dd =document.write("Length is: " + arr.length);


// console.log(arr);

// first method .....................value swap
// let a = 8;
// let b = 2;
// a = a+b;  // a = 8+2   a =10
// b = a-b; // b = 10-2  b =8
// a = a-b;    // a = 10-8 == 2
// console.log(a);
// console.log(b);

// second method ....................value swap
// let a = 4;
// let b = 8;
// a = a^b;  // 4 - 0100, 8-1000,   a = 1100
// b = a^b; //  b = 1100 ^ 1000  b = 0100
// a = a^b;    // a = 1100^0100  a = 1000
// console.log(a);
// console.log(b);

// xor operator..................... third method......value swap

// let a = 4;
// let b = 8;
// a= b +(b=a,0);

// console.log(a);
// console.log(b);


// forth method..................ES6...........value swap

// let a = 12;
// let b = 32;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

//basic for loop..

// descening order print number 
// for (i=10;i>0;i--){
//     console.log(i)
// }

// assending order print number
// for(i=0;i<=10;i++){
//     console.log(i)
// }

// let n =[1,2,3,4,5,6,7,8]
// for (a in n){
//     a+=n[a] +2
//     console.log(a)
// }
// console.log(n)
// let s1 = 5;
// let s2 = 7;
// sum = (a,b)=>"Total Sum a & b : " +(a+b);
// console.log(sum(s1,s2))

// let num = 60;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");

// } else if (num % 5 == 0) {
//     console.log("Buzz")
// } else if (num % 3 == 0) {
//     console.log("Fizz")
// } else {
//     console.log("It's not divisible by 3 and 5")
// }

//number divisible by 3 write fizz and divisible by 5 write buzz and divisible by both write FizzBuzz

// let number = (n) => {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }
// number(20)

//count length of string........

// let len =(string) =>{
//     return string.length;
// }

// console.log(len("Abhay kumar I'm form noida"))

// //captilize string........ letters...........
//  let captilize = (string) =>{
//     return string.charAt(0).toUpperCase() +string.slice(1);
//  }
//  console.log(captilize("abhay kumar"));


//   let capital = (str) => {
//      return str.toUpperCase()
//  }
//  console.log(capital("abhay"));

function red(){
    document.querySelector('.item-1').style.backgroundColor ='red';
    document.querySelector('.text').innerHTML ="Color is Red"
    console.log('color is red');
}
function yellow(){
    document.querySelector('.item-1').style.backgroundColor ='yellow';
    document.querySelector('.text').innerHTML ="Color is Yellow"
    console.log('color is yello');
}
function orange(){
    document.querySelector('.item-1').style.backgroundColor ='orange';
    document.querySelector('.text').innerHTML ="Color is Orange"
    console.log('color is orange');
}
function pink(){
    document.querySelector('.item-1').style.backgroundColor ='pink';
    document.querySelector('.text').innerHTML ="Color is Pink"
    console.log('color is pink');
}

function magenta(){
    document.querySelector('.item-1').style.backgroundColor ='magenta';
    document.querySelector('.text').innerHTML ="Color is Magenta"
    console.log('color is magenta');
}