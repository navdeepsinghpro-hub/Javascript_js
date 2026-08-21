// let bank = (function(){
//     let bankbalance = 120000;

//     function checkBalance(){
//         console.log(bankbalance);
//     }

//     function setBalance(val){
//         bankbalance = val;
//     }

//     function withdraw (val){
//         if(val<= bankbalance){
//             bankbalance -= val;
//             console.log(bankbalance)
//         }
//     }

// return {
//     check: checkBalance,
//     set: setBalance,
//     draw: withdraw
// }
// })();

// function createProduct(name, price){
//     let stock = 10;

//     return {
//         name,
//         price,
//         buy(qty){
//             if(qty <= stock){
//                 stock -= qty;
//                 console.log(`${qty} booked - ${stock} pieces left.`);
//             } else {
//                 console.error(`we only have ${stock} pieces now`)
//             }
//         },
//         refill(qty){
//             stock += qty;
//             console(`refill the stock ${stock} pieces lft`)
//         },

//         check(){
//             console.log(`remaining ${stock} pices left`)
//         }
//     }
// }

// let iphone = createProduct("iphone", 70000);
// iphone.buy(6);
// iphone.check();
// iphone.name;

class youtubeChannel{
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`you are subscribed the channel`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update('you have unsubscribed the channel');
    }
    notify(msg){
        this.subscribers.forEach((sub) => sub.update(msg));
    }

}

class user{
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name}, ${data}`);
    }
}

let gaming = new youtubeChannel();
let user1 = new user("navi");
let user2 = new user("raj")

gaming.subscribe(user1);
gaming.subscribe(user2);

gaming.notify("hloo guys");
