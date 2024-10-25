const from=document.getElementById("form");
usrname =document.getElementById("username")
email =document.getElementById("email")
password =document.getElementById("pass");
password2 =document.getElementById("pass2");


from.addEventListener("submit",(e)=>{
    e.preventDefault();
    chekinput();


})

function  chekinput(){
    const usrnameValue=usrname.value
    const emailValue=email.value
    const passValue=password.value
    const pass2Value=password2.value;

    if(usrnameValue==""){
        errorchek(usrname,"donner usrname")
        
    }
    else{
        validechek(usrname)
    }
    if(emailValue==""){
        errorchek(email,"donner email")
    }
    else if(!isemail(emailValue)){
        errorchek(email,"donner email corecte")
            
    }
    else{
        validechek(email)
    }
    if(passValue==""){
        errorchek(password,"donner password")
    }
    else{
        validechek(password)
    }

    if(passValue!=pass2Value || pass2Value==""){
        errorchek(password2,"pass non match")

    }
    else{
        validechek(password2)
    }
    
}

function errorchek(input,message){

    let parent=input.parentElement;
    parent.classList.remove("valide");
    parent.classList.add("error");

    let mess = parent.querySelector(".error_message");    
    mess.innerText=message
}

function validechek(input){
    let parent=input.parentElement;
    parent.classList.add("valide");
    parent.classList.remove("error");
}

function isemail(email){
    let regEmail=new RegExp ("^[^\s@]+@[^\s@]+\.(com|hotmail|ma)+$");
    return regEmail.test(email);
}


