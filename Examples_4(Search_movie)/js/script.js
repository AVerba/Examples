const apiURL = 'https://api.themoviedb.org/3';
const movieURL = 'search/movie?api_key';
const API_KEY = 'eb148ce88b4706c0ea240b2da392d66f';
const language = '&language=en-US&query=';

let count=1;
let search_res;
let content;
let tot_pages=0;

async function GetResponse (str){
let response =await fetch(`${apiURL}/${movieURL}=${API_KEY}${language}${str}&page=${count}&include_adult=false`) 

content = await response.json();

let cont = document.getElementById( 'Cont');
for(let key in content.results) {
   
let sub = document.createElement('div');
sub.innerHTML=`
<div class="item__movie" data-id=${content.results[key].id}>
     <img class="img__movie" src="https://image.tmdb.org/t/p/original/${content.results[key].poster_path}" alt="">
     <h1 class="title__movie">${content.results[key].original_title}</h1>
</div>`
cont.appendChild(sub);  
} 
$('.total_pages').text(content.total_pages)
tot_pages=content.total_pages;

console.log( content);

}
function RemoveRespons () {
    $("div.item__movie").remove();
 }



//----------------------------------
$(document).ready(function(){
    $('.search_btn').click(function(){
       console.log(count);
        RemoveRespons ();
        search_res =$(".value").val();
        search_res=String(search_res).split(' ').join('%20');
        GetResponse(search_res);
       
        $('.next_btn').addClass('show');
        $('.next_btn').removeClass('hide');
        $('.pagination').removeClass('hide');
        $('.pagination').addClass('show');
        $('.pagination_item').addClass('show');
        $('.first_item').addClass('pagination_item-active'); 
        $('.pagination_item').removeClass('hide');
        $('.first_item').text(count); 
        $('.second_item').text(count+1); 
        $('.third_item').text(count+2); 


       
  
history.pushState({count}, `Page: ${count}`, `/search&query=${search_res}&page=${count}`)
count++;
console.log(count);
})

$('.prev_btn').click(function(){
      console.log(count)
      RemoveRespons ();
      GetResponse(search_res);
      history.pushState({count}, `Page: ${count}`, `/search&query=${search_res}&page=${count}`)
      count--;

         if (count==tot_pages-1) {
            $('.total_pages').removeClass('pagination_item-active')
            $('.forth_item').addClass('pagination_item-active');
            $('.next_btn').addClass('show');
            $('.next_btn').removeClass('hide');         
         }
         else{
         if(count==tot_pages-2){
               $('.first_item').text(count-2);
               $('.second_item').text(count-1);
               $('.third_item').text(count);
               $('.forth_item').text('...');
               $('.forth_item').removeClass('pagination_item-active');
               $('.third_item').addClass('pagination_item-active');}
         else{
         if (count<tot_pages-2){
         if(count==4) {
               $('.second_item').removeClass('pagination_item-active'); 
               $('.third_item').addClass('pagination_item-active');
               $('.first_item').text(count-2);
               $('.second_item').text(count-1);
               $('.third_item').text(count);}
         if(count==3) {
               $('.second_item').addClass('pagination_item-active'); 
               $('.third_item').removeClass('pagination_item-active');
               $('.first_item').text(1);
               $('.second_item').text(2);
               $('.third_item').text(3);}
         if(count==2) {
               $('.prev_btn').addClass('hide');
               $('.prev_btn').removeClass('show');
               $('.first_item').addClass('pagination_item-active'); 
               $('.second_item').removeClass('pagination_item-active');
               $('.first_item').text(1);
               $('.second_item').text(2);
               $('.third_item').text(3);
            }
               $('.first_item').text(count-2);
               $('.second_item').text(count-1);
               $('.third_item').text(count);}}}


console.log(count);
})

$('.next_btn').click(function(){
      console.log(count);
      RemoveRespons ();
      GetResponse(search_res);
        

      if(count==2) {
         $('.prev_btn').addClass('show');
         $('.prev_btn').removeClass('hide');
         $('.first_item').removeClass('pagination_item-active'); 
         $('.second_item').addClass('pagination_item-active'); }
      if(count==3) {
         $('.second_item').removeClass('pagination_item-active'); 
         $('.third_item').addClass('pagination_item-active');}
      if(count>=4){
               if(count+2==tot_pages){
                  $('.first_item').text('...');
                  $('.second_item').text(count-1);
                  $('.third_item').text(count);
                  $('.forth_item').text(count+1);
                    }
               else{
                  if(count==tot_pages-1) {
                     $('.forth_item').addClass('pagination_item-active')
                     $('.third_item').removeClass('pagination_item-active'); 
                  }
               
                  else{
                     if (count==tot_pages) {
                        $('.total_pages').addClass('pagination_item-active')
                        $('.forth_item').removeClass('pagination_item-active');
                        $('.next_btn').removeClass('show');
                        $('.next_btn').addClass('hide'); 
                        count--;
                     }
                     else{
                        $('.first_item').text(count-2);
                        $('.second_item').text(count-1);
                        $('.third_item').text(count);}}}
            }
        

       history.pushState({count}, `Page: ${count}`, `/search&query=${search_res}&page=${count}`)
       count++;
     })
     $(document).on("click",".item__movie", function(){
         console.log("Hi world")
         console.log(typeof( $(this).attr('data-id')))
         let id_item=$(this).attr('data-id');
         console.log(typeof(id_item))

    let filterObj = content.results.filter(function(e) {
        return e.id == id_item;
      });
        $(".locandina").attr("src",`https://image.tmdb.org/t/p/original/${filterObj[0].poster_path}`); 

        $('.movie_back').css('background', `url(https://image.tmdb.org/t/p/original/${filterObj[0].backdrop_path})`);
        $('.movie_back').css('background-size', `cover`);


        $('.movie__title').text(filterObj[0].original_title);
        $('.date-relise').text(filterObj[0].release_date);     
        $('.movie_card').removeClass('hide');
        $('.movie_card').addClass('show');
        $('.modal').removeClass('hide');
        $('.modal').addClass('show');
     })
     $(document).on('keydown',function(event) {
        if (event.keyCode == 27) {
            $('.movie_card').removeClass('show');
            $('.movie_card').addClass('hide');
            $('.modal').removeClass('show');
            $('.modal').addClass('hide');
         }
     });





})