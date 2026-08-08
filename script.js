// let n = Number(prompt("Enter a number:"));

// if (n%2===0){
//     console.log("Even")
// } else {
//     console.log("Odd")
// }

// let a = Number(prompt("Enter a:"))
// let b = Number(prompt("Enter b:"))
// let c = Number(prompt("Enter c:"))

// if(a>=b && a>=c){
//     console.log("A is greater")
// } else if (b>=a && b>=c) {
//     console.log("B is greater")
// } else {
//     console.log("C is greater")
// }

// let n = Number(prompt("Enter no. u want table"))

// for (let i=1;i<=10;i++){
//     console.log(n*i)
// }

// let n = Number(prompt("Enter No."))
// let sum = 0;
// while(n>0){
//     sum += n
//     n--
// }

// console.log(sum)

// let n = Number(prompt("Enter No."))
// let count = 0;
// while(n>0){
//     count += 1
//     n //= 2
// }

// console.log(count)

// let n = Number(prompt("Enter No."))
// let rev = 0;
// while(n>0){
//     let digit = n%10
//     rev = rev * 10 + digit
//     n = Math.floor(n/10)
// }

// console.log(rev)

// let n = Number(prompt("Enter No."))
// let odd = 0;
// let even = 0;
// while(n>0){
//     digit = n%10
//     if(digit%2===0){
//         even += 1
//     } else{
//         odd += 1
//     }

//     n = Math.floor(n/10)
// }

// console.log("ODD: ", odd)
// console.log("EVEN: ", even)

// let n = Number(prompt("Enter No."));
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count += 1;
//     }
// }

// if (count === 2) {
//     console.log("Prime");
// } else {
//     console.log("Not prime");
// }

// let n = Number(prompt("Enter No."));
// let small = n%10;

// while(n>0){
//     digit = n%10
//     if(digit<small){
//         small = digit
//     }
//     n = Math.floor(n/10)
// }

// console.log(small);

// let n = Number(prompt("Enter No."));
// let org = n;
// let rev = 0;

// while(n>0){
//     digit = n%10
//     rev = rev *10 + digit
//     n = Math.floor(n/10)
// }

// if(org = rev){
//     console.log("yes it is")
// } else {
//     console.log("Its not")
// }

// let n = Number(prompt("Enter No."));
// let fact = 1;

// while(n>0){
//     fact *= n
//     n--
// }

// console.log(fact)

// let n = Number(prompt("Enter No."));
// let a = 0;
// let b = 1;
// let fab = 0;

//     while(n>2){
//         fab = a+b
//         a = b
//         b = fab
//         n--
//     }

// console.log(fab)

// let n = Number(prompt("Enter No."));
// let fac = 0;

// for(let i=0;i<n;i++){
//     if (n % (i+1) === 0){
//         fac += 1
//     }
// }

// console.log(fac)

// let n = Number(prompt("Enter No."));
// let sum = 0;

// for(let i=1;i<n;i++){
//     if(n%(i)===0){
//         sum += i
//     }
// }
// if(sum === n){
//     console.log("Its done")
// } else {
//     console.log("Its failed")
// }

// let a = Number(prompt("Enter a:"));
// let b = Number(prompt("Enter b:"));

// let gcd = 0;
// let limit = Math.min(a, b);

// for (let i = 1; i <= limit; i++) {
//     if (a % i === 0 && b % i === 0) {
//         gcd = i;
//     }
// }

// console.log(gcd);

// let a = Number(prompt("Enter a:"));
// let b = Number(prompt("Enter b:"));

// let lmt = Math.max(a, b);
// let lcm = 0;

// for (let i = lmt; ; i++) {
//     if (i % a === 0 && i % b === 0) {
//         lcm = i;
//         break;
//     }
// }

// console.log(lcm);

let start = Number(prompt("Enter start:"));
let end = Number(prompt("Enter end:"));

let count =0;

for (let n = start; n <= end; n++) {
    if(n%start===0){
        count += 1
        console.log(n)
    }
}
