
const refreshButton = document.querySelector('.grid');


//EVENT LISTENERS

window.addEventListener('load', createImageGrid);

refreshButton.addEventListener('click', createImageGrid);


function createImageGrid(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(data => createGrid(data.message))
    .catch(error => console.log(error))
  }

  
  //populate List
  function populateList(){
    fetch('https://dog.ceo/api/breeds/list/all')
    
      .then(response => response.json())
      .then(data => createListItems(data.message))
      .catch(error => console.log(error))
  }
  
  //getBreedImage
  function getBreedImage(){
    let url = `https://dog.ceo/api/breed/${selectedBreed}/images`;
    //fetch call
    fetch(url)

      .then(response => response.json())
      .then(data => getImageURL(data.message))
      .catch(error => console.log(error))
  }
  
  
  //fixBreed
  function fixBreed(breedName){
    if(breedName === 'germanshepherd'){
      return 'German Shepherd';
    }else if(breedName === 'mexicanhairless'){
      return 'Mexican Hairless';
    }else if(breedName === 'stbernard'){
      return 'St. Bernard';
    }else if(breedName === "african"){
      return 'African Wild Dog';
    }else if(breedName === 'bullterrier'){
      return 'Bull Terier';
    }
    return capitalize(breedName);
  }
  
  //capitalize breed name
  function capitalize(breedName){
    return breedName.replace(/\-/g,' ')
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
                            .join(" ");
  }
  
  //extract breed name
  function extractBreedName(data){
    let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g;
    let match = regex.exec(data);
    return fixBreed(match[1]);
  }
  
  //createGrid
  function createGrid(data){
    let output = '';
    const container = document.querySelector('.card-deck');
    data.map(item =>{
      output+=
      `
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">${extractBreedName(item)}</h4>
        </div>
        <div class="card-body">
          <img src="${item}" class="img-fluid" alt="${extractBreedName(item)}"/>
        </div>
      </div>    
      `
    })
      container.innerHTML = output;
  }
  
  