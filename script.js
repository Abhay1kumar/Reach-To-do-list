
const dog_btn=document.getElementById('dog-btn');
const cat_btn=document.getElementById('cat-btn');

const cat_img=document.getElementById('cat-img');
const dog_img=document.getElementById('dog-img');



dog_btn.addEventListener('click', function(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) =>response.json())
  .then((data) =>{
    console.log(data.message);
    dog_img.innerHTML = `<img src="${data.message}" width="300" height="280" alt="dog" />`;
  })
  .catch((error) =>{
    console.log(error);
  })
})


cat_btn.addEventListener('click', function(){
  fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) =>response.json())
  .then((data) =>{
    console.log(data[0].url);
    cat_img.innerHTML = `<img src="${data[0].url}" width="300" height="280" alt="cat" />`;
  })
  .catch((error) =>{
    console.log(error);
  })


})