const inputs=document.querySelectorAll('input');

const buttons={
    telephone:/^[\d]{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/i,
    slug:/^[a-z\d-]{8,20}$/

}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        
        validatee(e.target,buttons[e.target.attributes.name.value]);
    });
})


function validatee(field, regex){
    console.log(regex.test(field.value))
    if(regex.test(field.value)){
        field.className=('valid')
    }
    else{
        field.className=('invalid') 
    }
}



