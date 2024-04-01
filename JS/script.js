function showNav(){
    sidebare=document.querySelector('.sidebare');
    hidden=document.querySelector('.menu');
    showDrop=document.querySelector('.cancel');
   sidebare.style.display='flex';
   hidden.style.display='none';
   showDrop.style.display='flex';
   localStorage.removeItem(hidden)
}
function hiddenNav(){
    sidebare=document.querySelector('.sidebare');
    hidden1=document.querySelector('.menu');
    showDrop=document.querySelector('.cancel');
   sidebare.style.display='none';
   // hidden1.style.display='flex'
   if(window.innerWidth<=908){
       hidden1.style.display='flex'
   }else{
       hidden1.style.display='none'
   }
   showDrop.style.display='none';
}
window.addEventListener('resize', function() {
   hiddenNav();
});