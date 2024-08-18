const BASE_URL="https://api.qrserver.com/v1/create-qr-code/?";


let btnGenerate=document.querySelector(".button-confirm");
let btnDownload=document.querySelector("#download");
let btnReset=document.querySelector("#reset")
let input=document.querySelector("form .input");
let img=document.querySelector(".qr-img img");

btnGenerate.addEventListener("click",(evt)=>{
    generateQR();
    evt.preventDefault();
});

function generateQR(){
    img.src=`${BASE_URL}data=${input.value}&size=300x300`;
}

btnReset.addEventListener("click",(evt)=>{
    reset();
    evt.preventDefault();
});

function reset(){
    let input=document.querySelector("form .input");
    let img=document.querySelector(".qr-img img");
    input.value="";
    img.src=""
}

btnDownload.addEventListener("click",(evt)=>{
    evt.preventDefault();
    downloadQR();
});

function downloadQR(){
    img.src=`${BASE_URL}data=${input.value}&size=300x300`;
    if(img.src!=""){
        fetch(img.src)
        .then(response=>response.blob())
        .then(blob=>{
            saveAs(blob,"generated-QR.png");
        })
        .catch(error=>{
            console.log("Error saving image:",error);
            
        });

    }
}

