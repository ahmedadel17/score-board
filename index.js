let Homecount =0;
let guestcount=0;
let home=document.getElementById("Homescore");
let guest=document.getElementById("guestscore");
home.innerText=Homecount;
guest.innerText=guestcount;

let count=0;

function addonehome(){
    Homecount+=1;
    home.innerText=Homecount;
}
function addtwohome(){
    Homecount+=2;
    home.innerText=Homecount;
}
function addthreehome(){
    Homecount+=3;
    home.innerText=Homecount;
  
}
function addoneguest(){
     guestcount+=1;
    guest.innerText=guestcount;   
}
function addtwoguest(){
    guestcount+=2;
    guest.innerText=guestcount;
}
function addthreeguest(){
    guestcount+=3;
    guest.innerText=guestcount;
  
}
