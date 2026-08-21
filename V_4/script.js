// function debounce(fnc, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fnc(...args);
//         }, delay);
//     }
// }

// function throttle(fnc, delay){
//     let timer =0;
//     return function(...args){
//         let now = Date.now();
//         if(now - timer >= delay){
//             timer = now;
//             fnc(...args);
//         }
//     };
// }

// let inp = document.querySelector("input");
// inp.addEventListener("input", throttle(function(){
//     console.log("hey");
// }, 1000));

const btn = document.querySelector("button")
const ul = document.querySelector("ul")

btn.addEventListener("click", function(){
    const num1 = Math.floor(Math.randon()*10);
    const num2 = Math.floor(Math.randon()*10);
    let add = num1+num2;
    let li = document.createElement("li")
    li.textContent = add;
    ul.append(li);
});