const BASE_URL="https://api.qrserver.com/v1/create-qr-code/?";


let btn=document.querySelector(".button-confirm");

btn.addEventListener("click",(evt)=>{
    generateQR();
    evt.preventDefault();
});

function generateQR(){
    let input=document.querySelector("form .input");
    let img=document.querySelector(".qr-img img");
    img.src=`${BASE_URL}data=${input.value}&size=100x100`;
}

function reset(){
    let input=document.querySelector("form .input");
    let img=document.querySelector(".qr-img img");
    input.value="";
    img.src=""
}