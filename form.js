let forDom= document.querySelector(".backform");
forDom.addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault();
    var Name= document.getElementById('#firstname').value;
    var Lastname= document.querySelector('#lastname').value;
    var Age= document.querySelector('#age').value;
    var Email= document.querySelector('#email').value;
    var Country= document.querySelector('#country').value;
    var Female= document.querySelector('#female').value;
    var Male= document.querySelector('#male').value;
    var Other= document.querySelector('#other').value;
    var Feedback= document.querySelector('#feedback').value;
}

var userListDom=document.querySelector("#userList");

var addItem= (name , Lastname, Age, Email, Country,Female,Male, Other,Feedback)=>{
    let liDom= document.createElement('li');
    liDom.innerHTML= '${name} ${Lastname}';
    liDom.classList.add('.FormElement');
    userListDom.append(liDom);
}