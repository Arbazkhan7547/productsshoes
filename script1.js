
  document.querySelector("#nav .menu")
 .addEventListener("click",function(){
    var tl = gsap.timeline();
    tl.

    to("#mobilenav",{
        display:"initial",
    })

    .to(".menu .line",{
        width:"0px",
        ease:Expo.easeInout,
        duration:.3
     })  
     .to("#mobilenav",{
        delay:-.3,
        y:0,
        ease:Expo.easeInout,
        duration:1
     })
     .to(".nav .icon #iline1",{
        transform: "rotate(40deg)",
        ease:Expo.easeInout,
        duration:.3
     })
     .to(".nav .icon #iline2",{
        delay:-.3,
        transform: "rotate(-40deg)",
        ease:Expo.easeInout,
        duration:.3
     })
 })

 document.querySelector("#mobilenav .nav .icon")
 .addEventListener("click",function(){
    var tl = gsap.timeline();
    tl.

    to(".nav .icon .iline",{
        transform : "rotate(0deg)",
        ease:Expo.easeInout,
        duration:.3
     })  
     .to("#mobilenav",{
        delay:.2,
        y:-1200,
        ease:Expo.easeInout,
        duration:1
     })
     .to(".menu .line",{
        delay:.3,
        width:"35px",
        ease:Expo.easeInout,
        duration:.2
     })
 })

//  document.querySelector(".tab-menu-icon")
//  .addEventListener("click",function(e){
//      alert("heyy asad");
//  })
 
 document.querySelector("#nav .tab-menu-icon")
 .addEventListener("click",function(){
    var tl = gsap.timeline();
    tl.

    to("#mobilenav",{
        display:"initial",
    })

    .to("#nav .tab-menu-icon .tmiline",{
        width:"0px",
        ease:Expo.easeInout,
        duration:.3
     })  
     .to("#mobilenav",{
        delay:-.3,
        y:0,
        ease:Expo.easeInout,
        duration:1
     })
     .to(".nav .icon #iline1",{
        transform: "rotate(40deg)",
        ease:Expo.easeInout,
        duration:.3
     })
     .to(".nav .icon #iline2",{
        delay:-.3,
        transform: "rotate(-40deg)",
        ease:Expo.easeInout,
        duration:.3
     })
 })

 document.querySelector("#mobilenav .nav .icon")
 .addEventListener("click",function(){
    var tl = gsap.timeline();
    tl.

    to(".nav .icon .iline",{
        transform : "rotate(0deg)",
        ease:Expo.easeInout,
        duration:.3
     })  
     .to("#mobilenav",{
        delay:.2,
        y:-1400,
        ease:Expo.easeInout,
        duration:1
     })
     .to("#nav .tab-menu-icon .tmiline",{
        delay:.3,
        width:"65px",
        ease:Expo.easeInout,
        duration:.2
     })
 })