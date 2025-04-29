let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let nouvil = document.querySelector(".nouvil");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'PX';
    moon.style.top = value * 4 + 'PX';
    mountains3.style.top = value * 2 + 'PX';
    mountains4.style.top = value * 1.5 + 'PX';
    river5.style.top = value + 'PX';
    boat6.style.top = value + 'PX';
    boat6.style.left = value * 3 + 'PX';
    nouvil.style.fontSize = value + 'PX';
    if(scrollY >= 67){
        nouvil.style.fontSize = 67 + 'PX';
        nouvil.style.position = 'fixed';
        if(scrollY >= 436){
            nouvil.style.display = 'none';
        }else{
            nouvil.style.display = 'block';
        }
        if(scrollY >= 108){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#200016)'
        }
    }
}



























