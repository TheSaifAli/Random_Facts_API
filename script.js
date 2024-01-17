const api_key = "OW8VaQY/Vx8rv7cGI5d82w==qhKdtqaY9YzZGpvZ";


const option ={
  method:'GET',
  headers:{
    'X-Api-Key':api_key
  }
}
const apiUrl= 'https://api.api-ninjas.com/v1/facts?limit=1';

const factTextEl = document.querySelector('#factText');
const newFactBtnEl = document.querySelector('#newFactBtn');

const fetchData = async()=>{
  newFactBtnEl.textContent='loading..'
  const res = await fetch(apiUrl,option);
  const data = await res.json();
  console.log(data);
  factTextEl.textContent=data[0].fact;
  
  newFactBtnEl.textContent='New Fact'

}
newFactBtnEl.addEventListener('click',()=>{
  fetchData();
})
