let a = prompt("Enter First Number");
let b = prompt("Enter Second Number");
let c = prompt("Enter Operation");


let random = Math.random()
console.log(random);

// console.log(eval('a'));


let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

console.log(obj["+"]);

if (random < 0.94) {
    // console.log(obj["/"]);
    // result = eval()};

    // console.log("The Result is:" + result);


    // eval(`${a} ${c} ${b}`)
    console.log(`You wanna perform: ${c}`);
    console.log(`But this will perform ${obj[c]} `);
    

    console.log(`The Result is: ${eval(`${a} ${c} ${b}`)}`);
    
}