const luckMsm = ["A vida trará coisas boas se tiver paciência","Não compense na ira o que lhe falta na razão.",
"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."]

const brokenCookie = document.querySelector("#button_broken");
const img = document.querySelector("#img_cookie");
const luckGeration = document.querySelector("#luck_cookie");
const buttonOther = document.querySelector("#buttonEl");

brokenCookie.addEventListener("click",()=>{
    console.log("olá mundo");
    if(buttonOther.style.display == "none"){
        let i = Math.floor(Math.random() * luckMsm.length);
        luckGeration.innerHTML = `"${luckMsm[i]}"`;
        buttonOther.style.display = "block";
        img.setAttribute("src","https://atlas-content1-cdn.pixelsquid.com/assets_v2/245/2453776566493123614/jpeg-600/G03.jpg");
    }
})

buttonOther.addEventListener("click",()=>{
    window.location.reload();
})