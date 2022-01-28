// let labors=[
//     {
//     name: 'labor1',
//     payment:100
// },
// {
//     name: 'labor2',
//     payment:150
// },
// {
//     name: 'labor3',
//     payment:250
// }
// ]

// forEach method in labor
// labor.forEach((labors)=>{
//     labors.payment=labors.payment - 20;
//     console.log(labors);
// });


//for of loop
// for (let labor of labors) {
//     labor.payment=labor.payment - 20;
    // console.log(labor)
// }

// console.log(labors);

// for (let i =0; i < labor.length; i++){
// labor[i].payment=labor[i].payment-10;
// // console.log(labor[i].payment);
// }
// console.log(labor);



//add item in the array at last position
// labor.push({
//     name: 'labor4',
//     payment:200
// })

// add item in the array at first position
// labor.unshift({
//     name:"labor-head",
//     payment:300
// })

// delete item in the array at last position
// labor.pop()


// delete item in the array at first position
// labor.shift()

// console.log(labor);


//filter array of items

// const students =[
//     {
//         name:"Student1",
//         marks:48
//     },
//     {
//         name:"Student2",
//         marks:50
//     },
//     {
//         name:"Student3",
//         marks:36
//     },
//     {
//         name:"Student4",
//         marks:40
//     }
// ]

// console.log(students);

// let failed = students.filter((student)=> student.marks>45)

// console.log(failed);

// map function 
// let fullData= students.map((student)=> {
//     // return student.name + " " + student.marks

//     // return {
//     //    fulldata: student.name + " " + student.marks 
//     //     }
//     return `Fulldata: ${student.name} ${student.marks}`
// })

// console.log(fullData);

// total marks add  using reduse functino
// let totalMarks=0;
// students.forEach((student)=>   totalMarks+=student.marks
// )
// console.log(totalMarks);

// let total=students.reduce((acc, student)=>{
//     acc= acc + student.marks
//     return acc;
//     // console.log(acc);
// },0);
// console.log(total);

// const users =[
//     {
//         name: "xyz",
//         id: 3
//     },
//     {
//         name: "xy",
//         id: 5
//     },
//     {
//         name: "xyr",
//         id: 7
//     }
// ];

// let finddata= users.find((user) => {
//     return user.id ===4;

//     // if(user.id === 3){
//     //     return true;
//     // }
//     //     return false;
// })
// console.log(finddata);


// ****************************************************************
// sort method"

// const array = ["ram","abhay","sachin","parth","abhishek","dinesh"];

// array.sort();
// console.log(array);

// splice`` delete any item

// const array = ["ram","abhay","sachin","parth","abhishek","dinesh"];

// array.splice(2,3);
// console.log(array);


let students =[
    {
        name: "Student-1",
        marks:56,
        rollNo:1
    },
    {
        name: "Student-2",
        marks:60,
        rollNo:2
    },
    {
        name: "Student-3",
        marks:34,
        rollNo:3
    },
    {
        name: "Student-4",
        marks:40,
        rollNo:4
    },
    {
        name: "Student-5",
        marks:30,
        rollNo:5
    },
    {
        name: "Student-6",
        marks:56,
        rollNo:6
    },
    {
        name: "Student-7",
        marks:42,
        rollNo:7
    },
    {
        name: "Student-8",
        marks:50,
        rollNo:8
    }
];
console.log("**************Find*********************************")

// first find the object 

let myStudent = students.find((student)=> student.rollNo===1)
    
console.log(myStudent);

// use filter method of array 
console.log("**************filter*********************************")

let passedStudent = students.filter((student)=> student.marks<45)
console.log(passedStudent);

let totalmarks= students.reduce((acc, student)=>{
    acc += student.marks
    return acc;
},0);

console.log(totalmarks);

console.log("**************forEach*********************************")

students.forEach((student,index)=> console.log(index,student));
let myarray = [];
let marks = [];
let total = 0;
students.forEach((student)=>{

    marks.push(student.marks)
    total+=  student.marks

myarray.push(student.name)

})
console.log(total);
console.log(marks);
console.log(myarray);

console.log("*************************map**************************");


let newarray= students.map((student)=>{
    return student.name + " " + student.marks
})

console.log(newarray);

