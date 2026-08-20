// // let obj = {
// //     name: "navdeep",
// //     age: 20
// // };

// // function ab () {
// //     console.log(this.age);
// // };

// // ab.call(obj);

// // function ab(name) {
// //     this.name = name;
// // };

// // let cd = new ab("navdeep");

// // function pencil(name, color, price, ){
// //     this.name = name;
// //     this.color = color;
// //     this.price = price;
// // };

// // pencil.prototype.company = "Navdeep"

// // let p1 = new pencil("natraj", "red", 5);

// class Pencil {
//     constructor(name,company,color,price){
//         this.name = name;
//         this.company = company;
//         this.color = color;
//         this.price = price;
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }

//     erase(){
//         do {
            
//         } while (condition);
//     }
// }

// let p1 = new Pencil("natraj", "natraj", "black", 10);
// let p2 = new Pencil("apsra", "apsra", "red", 15);

// let pr = new Promise(function(res, rej){
//     setTimeout(() => {
//         let rn = Math.floor(Math.random()*5);
//         if(rn>5) res("resolved with " + rn)
//         else rej("rejected with " + rn);
//     }, 1000);
// });

// pr.then(function(val){
//     console.log(val);
// }).catch(function(val){
//     console.log(val);
// });

// async function abcd(){
//     try{
//         let val = await pr;
//     console.log(val);
//     } catch (err) {
//         console.log(err);
//     }
// }

// abcd();

// fetch("https://randomuser.me/api/")
// .then((rawdata) => {
//     return rawdata.json;
// })
// .then ((data) => {
//     console.log(data.results);
// })
// .catch((err) => {
//     console.log(err);
// });

fetch("https://randomuser.me/api/?results=5")
    .then(raw => raw.json())
    .then(data => console.log(data.results[0].name.first));