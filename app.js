const ulitems=document.querySelector('.ulitems');
const hamburger=document.querySelector('.hamburger');
const close=document.querySelector('.close');


hamburger.addEventListener('click',()=>{
    ulitems.style.height ='100vh';
});
close.addEventListener('click',()=>{
    ulitems.style.height ='0vh';
});


