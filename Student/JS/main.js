let services=document.querySelector(".services")
let eval=document.querySelector(".eval")
let child=document.querySelector(".child")
let child1=document.querySelector(".child1")
services.addEventListener('click',()=>{
    child.classList.toggle('dis');
})
eval.addEventListener('click',()=>{
    child1.classList.toggle('dis');
})
