
let firstInNumber;
let secondInNumber;
let result;
let resetCount=0;
let number=0;
let value=0;
$('.input_numb').click(function(){
  if(resetCount==1){
    $('input').val(' ');
    number=$(this).text(); 
    value=$('input').val()+number;
    $('input').val(value);
    resetCount=0;
} 
  else{
    number=$(this).text(); 
    value=$('input').val()+number;
    $('input').val(value); 
}
});

//--
$('.clear').click(function(){
resetCount=1;
firstInNumber=0;
secondInNumber=0;
result=' ';
action= ' ';    
$('input').val('0');
});

//-------
$('.single_clear').click(function(){
$('input').val(String($('input').val()).split('').slice(0,String($('input').val()).length-1).join(''));
});

//-------
$('.action').click(function(){ 
firstInNumber=parseFloat($('input').val());
action=$(this).text();
$('input').val(''); 
console.log (firstInNumber)
});

//------
$('.result').click(function(){
    resetCount=1;
    secondInNumber=parseFloat($('input').val());
    switch (action) {
     case '+':
         result=firstInNumber+secondInNumber;
         break;   
    case '-':
        result=firstInNumber-secondInNumber;
        break;
    case '*':
        result=firstInNumber*secondInNumber;
        break;
    case '/':
        result=firstInNumber/secondInNumber;   
        break;
    case 'Sq':
        result=Math.sqrt(firstInNumber);        
        break;
          
   }
    result=result.toFixed(2); 
	$('input').val(result);
});
