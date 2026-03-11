// let input=document.querySelector("input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// btn.addEventListener("click",function(){
//     let li=document.createElement("li");
//     li.innerText=input.value;
//     ul.appendChild(li);
//     input.value="";
//     let delbtn=document.createElement("button");
//     delbtn.innerText="delete";
//     li.appendChild(delbtn);
//     delbtn.addEventListener("click",function(){
//         ul.removeChild(li);
//     })
// })

let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
});
ul.addEventListener("click",function(event){
     if (event.target.nodeName == "BUTTON") {
        let prEle=event.target.parentElement;
        prEle.remove();
    };
    
})


