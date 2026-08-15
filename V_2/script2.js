// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();

//     if(nm.value.length <= 2){
//       document.querySelector("#hide").style.display = "initial"
//     } else {
//         document.querySelector("#hide").style.display = "none"
//     }
// });

let count = 10;


let interval = setInterval(function(){
if(count >= 1) {
    count--;
    console.log(count);
} else {
    clearInterval(interval);
}
   
    
}, 1000);