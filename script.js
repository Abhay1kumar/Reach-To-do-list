// const catbtn = document.querySelector('.cat-btn');
const dogbtn= document.getElementById('dog-btn');


// const catimg= document.querySelector('.cat-img');
// const dogimg=document.querySelector('.dog-img');

// dogbtn.addEventListener('click',()=>{
//   fetch("https://dog.ceo/api/breeds/image/random")

//   .then((response) =>response.json())
//   .then((result) =>{
//     console.log(result);
//   })
//   .catch((error) =>{
//     console.log(error);
//   })
// 

dogbtn.addEventListener('click',getDogImg)


function getDogImg(){
  fetch("https://dog.ceo/api/breeds/image/random")

    .then((response) =>response.json())
    .then((result) =>{
      console.log(result);
    })
    .catch((error) =>{
      console.log(error);
    })
}