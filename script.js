const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close")

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('nav-active');
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("nav-active");
    })
}
console.log(close);
console.log(nav);