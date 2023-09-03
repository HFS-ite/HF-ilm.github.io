let sear = document.getElementById("i1");
let inp1 = document.getElementById("inp1");
let but = document.getElementById("but");
let sub = document.getElementById("sub")
let clos = document.getElementById("i2")
let het = document.getElementById("het")
let count = 1;
let subc = 1;
sear.addEventListener("click", function(){
    if(count == 1){
        inp1.style.width = "20%"
        inp1.style.right = "23%"
        inp1.style.background = " linear-gradient(90deg, transparent , rgb(0, 0, 75))"
        sear.style.background = "rgb(0, 0, 75)"
        sear.style.borderLeft = "2px solid blue"    
        but.style.borderRadius = "0"
        but.style.borderTopRightRadius = "7px"
        but.style.borderBottomRightRadius = "7px"
        
        count = 0;

    }
    else{
        count = 1;
        inp1.style.width = "0%"
        inp1.style.right = "23%"
        sear.style.background = "transparent"
        sear.style.left = "62.05%"
        sear.style.transform = "scale(1)"
        but.style.borderRadius = "7px"
        but.style.borderTopRightRadius = "7px"
        but.style.borderBottomRightRadius = "7px"
    }
})
// sub lekvit 
// go new 2
but.addEventListener("click", function(){
    sub.style.right = "0%";
})
clos.addEventListener("click", function(){
    sub.style.right = "-29%";
})
// go new 3


let old = document.getElementById("old");
let order = document.getElementById("i4f");
let orderc = 1;
let log = document.getElementById("ilogos")
order.addEventListener("click", function(){
    if( orderc == 1 ){
        old.style.transform = "scale(1)";
        old.style.top = "0%";
        old.style.background = "rgb(0, 0, 70)"
        orderc = 0;
    }
    else{
        orderc = 1;
        old.style.transform = "scale(0.2)";
        old.style.background = "white"
        old.style.top = "-100%";
    }
})

// reklam start
// go new 4 

let r1 = document.getElementById("rek1")
let r2 = document.getElementById("rek2")
let r3 = document.getElementById("rek3")
let r4 = document.getElementById("rek4")
let r5 = document.getElementById("rek5")
let go = document.getElementById("arag")
let rc = 1;
het.addEventListener("click", function(){
    if( rc == 1){
        r1.style.left = "-1%"
        r1.style.transform = "scale(0.8)"
        r1.style.zIndex = "5"
        r4.style.left = "14.6%"
        r4.style.zIndex = "10"
        r4.style.transform = "scale(1)"
        r2.style.left = "-13.5%";
        r2.style.transform = "scale(0.6)"
        r2.style.zIndex = "0"
        r3.style.left = "43.5%"
        r3.style.transform = "scale(0.6)"
        r5.style.left = "30%"
        r5.style.transform = "scale(0.8)"
        r5.style.zIndex = "5"
        rc = 2;
    }
    else if(rc == 2){
        r1.style.left = "-13.5%"
        r1.style.transform = "scale(0.6)"
        r1.style.zIndex = "0"
        r4.style.left = "-1%"
        r4.style.zIndex = "0"
        r4.style.transform = "scale(0.8)"
        r2.style.left = "43.5%";
        r2.style.transform = "scale(0.6)"
        r2.style.zIndex = "0"
        r3.style.left = "30%"
        r3.style.transform = "scale(0.8)"
        r3.style.zIndex = "5"
        r5.style.left = "14.6%"
        r5.style.transform = "scale(1)"
        r5.style.zIndex = "10"
        rc = 3;
    }
    else if(rc == 3){
        r1.style.left = "43.5%"
        r1.style.transform = "scale(0.6)"
        r1.style.zIndex = "0"
        r4.style.left = "-13.5%"
        r4.style.zIndex = "0"
        r4.style.transform = "scale(0.6)"
        r2.style.left = "30%";
        r2.style.transform = "scale(0.8)"
        r2.style.zIndex = "5"
        r3.style.left = "14.6%"
        r3.style.transform = "scale(1)"
        r3.style.zIndex = "10"
        r5.style.left = "-1%"
        r5.style.transform = "scale(0.8)"
        r5.style.zIndex = "5"
        rc = 4;
    }
    else if(rc == 4){
        r1.style.left = "30%"
        r1.style.transform = "scale(0.8)"
        r1.style.zIndex = "5"
        r4.style.left = "43.5%"
        r4.style.zIndex = "0"
        r4.style.transform = "scale(0.6)"
        r2.style.left = "14.6%";
        r2.style.transform = "scale(1)"
        r2.style.zIndex = "10"
        r3.style.left = "-1%"
        r3.style.transform = "scale(0.8)"
        r3.style.zIndex = "5"
        r5.style.left = "-13.5%"
        r5.style.transform = "scale(0.6)"
        r5.style.zIndex = "0"
        rc = 5;
    }
    else if(rc == 5){
        r1.style.left = "14.6%"
        r1.style.transform = "scale(1)"
        r1.style.zIndex = "10"
        r4.style.left = "30%"
        r4.style.zIndex = "5"
        r4.style.transform = "scale(0.8)"
        r2.style.left = "-1%";
        r2.style.transform = "scale(0.8)"
        r2.style.zIndex = "5"
        r3.style.left = "-13.5%"
        r3.style.transform = "scale(0.6)"
        r3.style.zIndex = "0"
        r5.style.left = "43.5%"
        r5.style.transform = "scale(0.6)"
        r5.style.zIndex = "0"
        rc = 1;
    }

})
// End 
// hire is search bar 



  $('body').toggleClass('loaded');
  $(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});