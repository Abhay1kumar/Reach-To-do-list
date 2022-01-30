let button = document.getElementById('btn');
let result = document.getElementById('result');

let url = "https://api.covid19api.com/summary";

button.addEventListener('click', getData())


async function getData() {
  try{
  let data = await fetch(url)
    let responce=await data.json();
    let count=responce.Countries[76]
    // console.log(responce.Countries[76])
    result.innerHTML = `
<p>Country Name: ${count.Country}</p>
<p>Total Confirmed: ${count.TotalConfirmed}</p>
<p>Total Death: ${count.TotalDeaths}</p>
<p>Total Recovery: ${count.TotalRecovered}</p>
<p>Data: ${count.Date}</p>
`;
  }catch(e){
    console.log(e)
  }
 
}
getData();


