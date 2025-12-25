document.addEventListener("DOMContentLoaded", (event) => {

    var float = document.querySelector(".main");
    var swing = 0;
    var diffswing = 0;


    float.addEventListener("mousemove", function (dets) {
        diffswing = dets.clientX - swing;
        swing = dets.clientX;
        gsap.to(".img", {
            ease: Power1,
            stagger: 0.1,
            duration: 1,
            x: gsap.utils.clamp(-140, 100, diffswing * 5),
            y: gsap.utils.clamp(-50, 50, diffswing * 1),
            rotate: gsap.utils.clamp(-50, 20, diffswing * 0.5),

        });
    });
});

let h1 =document.querySelector(".one-cen h1")
let overlay = document.querySelector(".overlay") 
let theamChange = document.querySelector(".rone")
let main = document.querySelector(".main")
let a = 0
theamChange.addEventListener("click",()=>{
    if(a ==0){
        main.style.backgroundColor="white"
        a= 1
    }else if(a==1){
        main.style.backgroundColor= "black"

        a=0
    }
})