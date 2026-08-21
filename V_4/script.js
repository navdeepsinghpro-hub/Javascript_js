// function debounce(fnc, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fnc(...args);
//         }, delay);
//     }
// }

function throttle(fnc, delay){
    let timer =0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    };
}

let inp = document.querySelector("input");
inp.addEventListener("input", throttle(function(){
    console.log("hey");
}, 1000));

