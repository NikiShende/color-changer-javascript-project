
let box=document.querySelectorAll(".box");
console.log(box);

let body1=document.querySelector("body");
console.log(body1);


box.forEach((b)=>{
    // console.log(b)
    b.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target.id);
        if(e.target.id==="red"){
           body1.style.backgroundColor="red"
        }else if(e.target.id==="blue"){
            body1.style.backgroundColor="blue"
        }else if(e.target.id==="green"){
            body1.style.backgroundColor="green"
        }else{
            body1.style.backgroundColor="yellow"
        }

         body1.style.backgroundColor=e.target.id
    })
})