var menuOpen=document.querySelector(".menuOpen");
var menu=document.querySelector(".nav-links");
var menuClose=document.querySelector(".menuClose");

menuOpen.addEventListener("click",function(){
    menu.style.display="block";
    menu.style.top="0";
})
menuClose.addEventListener("click",function(){
    menu.style.top="-100%";
})
