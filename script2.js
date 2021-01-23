//selectors
const add=document.querySelector(".add");
var saisir=document.querySelector("#saisir");
var row2=document.querySelector("#row2");
var list=document.querySelector("#list");
var todolist=document.getElementById("row2")

//addeventlistner
add.addEventListener("click" , ()=>{
    var paragraph=document.createElement('p');
    list.appendChild(paragraph);
    paragraph.innerText=saisir.value;
    paragraph.style.padding='0px 0px 0px 150px'
    paragraph.addEventListener('click', ()=>{
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick', ()=>{
        list.removeChild(paragraph);
    })
    

   
    saisir.value=''

});






//functions




