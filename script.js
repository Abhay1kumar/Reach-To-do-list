// const comute = (n1, n2, callback) => callback(n1, n2);
// const add = (n1, n2) => n1 + n2;
// const sub = (n1, n2) => n1 - n2;
// const multiply = (n1, n2) => n1 * n2;
// const divide = (n1, n2) => n1 / n2;

// console.log(comute(2, 4, add));
// console.log(comute(32, 4, sub));
// console.log(comute(30, 6, multiply));
// console.log(comute(30, 6, divide));


// const uppercase = (str, callback) => callback(str);
// const changeUppercase = (str) => str.toUpperCase();
// const changeReverse = (str) => str.split("").reverse().join("");

// console.log(uppercase("abhay, kumar", changeUppercase));
// console.log(uppercase("abhay, kumar", changeReverse));




// const myfun = (callback) => {
//   setTimeout(() =>{
//     let array = ['mango','banana','orange','graps','apple'];
//     callback(false, array);
//   },3000)
// }
// const callback=(err, array) => {
// if (err){
//   console.error(err);
// }
// else{
//   console.log(array);
// }
// }

// myfun(callback);


// let text = document.querySelector('.div');

// function num1(callback) {
// setTimeout(() => {
//   console.log("5");
//   text.innerHTML =`<h1>5<h1>`;
// }, 2000);

//   setTimeout(() => {
//     console.log("4")
//     text.innerHTML =`<h1>4<h1>`;
//     callback();
//   }, 3000);
// }

// function num2(callback) {
//   setTimeout(() => {
//     console.log("3");
//     text.innerHTML =`<h1>3<h1>`;
//   }, 2000);
//   setTimeout(() => {
//     console.log("2")
//     text.innerHTML =`<h1>2<h1>`;
//     callback();
//   }, 3000);
// }

// function num3(callback) {
//   setTimeout(() => {
//     console.log("1");
//     text.innerHTML =`<h1>1<h1>`;
//   }, 2000);
//   setTimeout(() => {
//     console.log("Happy republic day")
//     text.innerHTML =`<h1>Happy Republic Day<h1>`;
//     callback();
//   }, 3000);
// }

// num1(() => {
//   num2(() => {
//     num3(() =>{
//      setTimeout(() => {
//       console.log("ThankYou")
//       text.innerHTML =`<h1>Thank You<h1>`;
//      }, 2000);
//     });
//   });
// });




// let time = 10;
// text.innerHTML= time--;
// setTimeout(() => {
//   text.innerHTML= time--;
//   setTimeout(() => {
//     text.innerHTML= time--;
//     setTimeout(() => {
//       text.innerHTML= time--;
//       setTimeout(() => {
//         text.innerHTML= time--;
//         setTimeout(() => {
//           text.innerHTML= time--;
//           setTimeout(() => {
//             text.innerHTML= time--;
//             setTimeout(() => {
//               text.innerHTML= time--;
//               setTimeout(() => {
//                 text.innerHTML= time--;
//                 setTimeout(() => {
//                   text.innerHTML= time--;
//                   setTimeout(() =>{
//                     text.innerHTML= "Happy Repulic Day";
//                   },1000)
//                 },1000)
//               },1000);
//             },1000);
//           }, 1000);
//         },1000)
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// let num=[2,4,6,8,10,12]


// for (let i=0; i<=10; i++) {
//   let num=0;
//   setTimeout(() =>{
//    num+=i+3 ;
//   },1000)

//   console.log(i)
// }


// Promise fucntion 

// const promiseObj= new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//     const data=['mango','orange','apple','banana','graps'];
//     if(data.length===5) {
//       resolve(data)
//     }
//     else{
//       // console.log("Something is wrong")
//       reject('Something is wrong')
//     }
//   }, 3000);

// });
// promiseObj.then((result)=>{
//   console.log(result);
// })
// .catch((err)=> {
// console.log(err)
// })
// console.log(promiseObj);

// let getBurger = new Promise((resolve, reject) => {
//   let random = Math.floor(Math.random() * 10);
//   console.log(random);
//   if (random % 2 == 0) {
//     resolve("Get your Burger free")
//   }
//   else {
//     resolve("Oops!sorry you don't get free burger")
//   }
// })

// getBurger.then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// }).finally(() => {
//   console.log('Finally')
// })

// let getroomclean = new Promise((resolve, reject) => {
//   let random = Math.floor(Math.random() *10);
//   console.log(random)
//   if(random % 2 ==0){
//     resolve('Your room is clean')
//   }
//   else{
//     reject('Your room is not clean')
//   }
// })
// getroomclean.then((result) => {
//   console.log(result)
// })
// .catch((err) => {
//   console.log(err)
// }).finally(() => {
//   console.log('Finally')
// })

// let numIncrements = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data=20;
//     resolve(data)
//   }, 2000);
// })
// .then((result) => {
//   console.log(result)
//   return result*2;
// }).then((result) => {
//   console.log(result)
//   return result*2;
// }).then((result) => {
//   console.log(result)
//   return result*2;
// }).then((result) => {
//   console.log(result)
//   return result*2;
// }).then((result) => {
//   console.log(result)
// })
// .catch((err) => {
//   console.log(err);
// })

// let promise1= new Promise((resolve, reject) => {
//   if(isroomclean=true) {
//     resolve("Your Room is clean!");
//   } else {
//     reject("Your Room is not clean!");
//   }
// });
//  let promise2= new Promise((resolve, reject) => {
//    if(isremoveGarbage=true) {
//     resolve("Garbage removed!");
//    }
//    else {
//      reject("Garbage is not removed!");
//    }
//  });

//  let promise3= new Promise((resolve, reject) => {
//    if(isroomlooked=true){
//      resolve("Room is looked up!");
//    }else{
//      reject("Room is not looked up!");
//    }
//  });

//  let allPromises = Promise.all([promise1, promise2, promise3]);

//  allPromises.then((result)=>{
//    console.log(result);
//  }).catch((err)=>{
//    console.error(err);
//  }).finally(()=>{
//    console.log("Finally")
//  })


//  console.log("Start");

//  function waitforSevenSecond(){
//    let ms = 7000 + new Date().getTime();
//    while(new data() <ms){}
//  }

//  setTimeout(() => {
//    console.log("I am from set timeout")
//  }, 2000);


const select = document.querySelector('.select');

let options = document.createElement('option');

function search() {

  
  let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";
  fetch(url)

    .then((response) => response.json())
    .then((data) => {
     data.forEach((names)=>{
console.log(names.name);
options.innerHTML=`${names.name}`;
select.appendChild(options)
     })
    })
    .catch((err) => {
      console.log(err);
    })
  
}

search();