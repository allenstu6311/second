window.onload = function(){
    // let carouselContainer=document.querySelector(".carousel-container")
let carouselSlide = document.querySelector(".carousel-slide")
let carouselImges = document.querySelectorAll(".carousel-slide img")



let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")

let counter =1;
let size = carouselImges[0].clientWidth;//clienWidth取得寬度

//    carouselSlide.style.transform = "translateX("+(-size * counter)+"px)"

//按鈕
nextBtn.addEventListener("click",()=>{
if(counter>=carouselImges.length-1)return;

carouselSlide.style.transition = "transform 0.4s ease-in-out";//調整移動速率
counter++;

carouselSlide.style.transform = "translateX("+(-size*counter)+"px)";

})
prevBtn.addEventListener("click",()=>{
if(counter<=0)return;
   
carouselSlide.style.transition = "transform 0.4s ease-in-out";//調整移動速率
counter--;

carouselSlide.style.transform = "translateX("+(-size*counter)+"px)";

// ==============================圖片到底時增加圖片
carouselSlide.addEventListener("transitionend",()=>{

if(carouselImges[counter].id ==="lastClone"){

    carouselSlide.style.transition = "none";
    counter = carouselImges.length-2;
    carouselSlide.style.transform = "translateX("+(-size*counter)+"px)";
}

})
carouselSlide.addEventListener("transitionend",()=>{

if(carouselImges[counter].id ==="firstClone"){

carouselSlide.style.transition = "none";
counter = carouselImges.length-counter;
carouselSlide.style.transform = "translateX("+(-size*counter)+"px)";
}


})

})
}


  
 




