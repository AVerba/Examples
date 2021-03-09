const apiURL = 'https://my-json-server.typicode.com/moviedb-tech/movies/list';

async function GetResponse (str){
let response =await fetch(`${apiURL}`) 
 
content = await response.json();
console.log(content)
content.forEach((item)=>{
    console.log(item.name)
})
let cont = document.getElementById( 'SearchResults');

content.forEach((item)=>{
    let sub = document.createElement('div');
    sub.className='poster';
    sub.id=`${item.id}`;
    sub.innerHTML=`
                        <div class="poster__img">
                            <img src="${item.img}" id="${item.id}" alt="">
                            <div class="click">
                              <span class="fa fa-star-o" id="${item.id}" data-id="${item.id}" 
                              data-name="${item.name}" 
                              data-year="${item.year}"></span>
                            </div>
                        </div>
                        <p class="poster__name">"${item.name}"</p>
                        <p class="poster__year">${item.year}</p> `
console.log(item.genres)
cont.appendChild(sub);
})
}

document.querySelector('.search-results').addEventListener('click', function(e){
  let target = e.target;
  if(target.tagName==='SPAN'){
  if(!target.classList.contains("fa-star")){
    target.classList.remove('fa-star-o');
    target.classList.add('fa-star');
    addItemToList(e);  
  }
  else{
    target.classList.remove('fa-star');
    target.classList.add('fa-star-o');
    removeItemFromList(e);    
  }  }
}, false);

//=====
const SearchRes=document.getElementById('SearchResults');
const btnList= document.getElementById('btn_list');
const btnGallery=document.getElementById('btn_gallery');
btnList.addEventListener('click',function(){
  SearchRes.classList.add('movie_list');
})
btnGallery.addEventListener('click', function(){
  SearchRes.classList.remove('movie_list');
})
//=======================================

document.querySelector('.search-results').addEventListener('click',function(e){
  e.preventDefault();
  let curretTarget=e.target;
  console.log(curretTarget.tagName)
  if(curretTarget.tagName==='IMG'){
  const modalCard=document.getElementById('movieCard');
  const modal=document.getElementById('modal');

  const movieName=document.getElementById('movieName');
  const movieImg=document.getElementById('movieImg');
  const movieYear=document.getElementById('movieYear');
  const movieDesc=document.getElementById('movieDesc');
  const movieCardBack=document.getElementById('movieCardBack');

  content.forEach((item)=>{
    if(item.id== e.target.id){
      console.log('hi')
      movieName.innerHTML=`${item.name}`;
      movieImg.setAttribute('src',`${item.img}`)
      movieCardBack.style.backgroundImage = `url('${item.img}')`;
      movieYear.innerHTML=`${item.year}, ${item.director}`;
      movieDesc.innerHTML=`${item.description}`
    }
  })

  modalCard.classList.remove('hide');
  modalCard.classList.add('show');
  modal.classList.remove('hide');
  modal.classList.add('show');}
})
//==================
document.querySelector('.modal').addEventListener('click',function(e){
 e.preventDefault();
 let curretTarget=e.target;
 const modalCard=document.getElementById('movieCard');
 const modal=document.getElementById('modal');
 modalCard.classList.remove('show');
 modalCard.classList.add('hide');
 modal.classList.remove('show');
 modal.classList.add('hide');
}) 
//====================

const favList = document.getElementById('favList');

function addItemToList(e){
  let itemList = document.createElement('li');
  itemList.setAttribute('id', e.target.id);
  itemList.appendChild(document.createTextNode(`${e.target.getAttribute("data-name")}`));
  console.log(e.target)
  favList.appendChild(itemList);
}
function removeItemFromList(e){
  document.querySelectorAll('#favList li').forEach(function(item) {
    if(e.target.getAttribute("data-name")===item.textContent){
      favList.removeChild(item);
    }    
  });
}
//======================

let res = document.getElementById('SearchBtn');
res.addEventListener ('click', (e) =>{
    e.preventDefault();
    RemoveRespons();
    displayRes();
});
function displayRes() {
let input = document.getElementById('InputSearch').value;   
GetResponse(input);
}

function RemoveRespons () {
let myNode = document.getElementById("SearchResults");
myNode.innerHTML = '';
}

//=============LocalStorage=========

// get favorites from local storage or empty array
function AddFavoriteMovie(e){

  let favorite = JSON.parse(localStorage.getItem("favoriteMovie"));
  const item={};

    if(favorite == null) favorite = [];
    item.id=e.target.getAttribute('id');
    item.year=e.target.getAttribute('data-year')
    item.name=e.target.getAttribute('data-name');
    favorite.push(JSON.stringify(item));
    localStorage.setItem("favoriteMovie", JSON.stringify(favorite));    
}

//===================
document.querySelector('.search-results').addEventListener('click', function(e){
  AddFavoriteMovie(e);
}, false);

//========

