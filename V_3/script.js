let obj = {
    name: "navdeep",
    age: 20
};

function ab () {
    console.log(this.age);
};

ab.call(obj);