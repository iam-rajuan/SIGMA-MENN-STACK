let adjectives ={
    "1" : "Crazy",
    "2" : "Amezing",
    "3" : "Fire"
}
let ShopName ={
    "1" : "Engine",
    "2" : "Foods",
    "3" : "Porn"
}
let  AnotherWords={
    "1" : "Bros",
    "2" : "Limited",
    "3" : "Hub"
}
    
let random1 = Math.floor(Math.random()*3) + 1
let random2 = Math.floor(Math.random()*3) + 1
let random3 = Math.floor(Math.random()*3) + 1
// console.log(random1);

console.log(`${adjectives[random1]} ${ShopName[random2]} ${AnotherWords[random3]}`);



