document.body.style.backgroundColor = "green";
// let div = document.createElement('div')
// document.body.appendChild(div)


async function addItem(item) {
    await randomDelay();
    // let itemElement = document.createElement('p')
    let div = document.createElement('div')
    div.innerHTML = item;
    // itemElement.innerHTML = item
    // div.appendChild(itemElement)
    document.body.append(div)
}
// let randomDelay = ()=> {
//     return new Promise((resolve, reject) => {
//         random = Math.floor(Math.random() * 7 + 1);
//         setInterval(() => {
//             // addItem()
//             resolve();
//         }, random * 1000);
//     })
// }

function randomDelay() {
    return new Promise((resolve, reject) => {
        random = Math.floor(Math.random() * 5 + 1);
        setInterval(() => {
            // addItem()
            resolve();
        }, random * 1000);
    })
}


async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName('div');
        last = last[last.length-1]
        if (last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
            
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);

    let text = [
        "Initializing Hacking",
        "Reading your Files",
        "Password Files Detected",
        "Sending all password and personal files to server",
        "Cleaning Up"
    ];


    for (const item of text) {
        await addItem(item);
    }
    await randomDelay();
    clearInterval(t)
}

main()

// const addItem = async (item) => {
//     await randomDelay();
//     let div = document.createElement("div");
//     div.innerHTML = item;
//     document.body.append(div)
// }

// const randomDelay = () => {
//     return new Promise((resolve, reject) => {
//         timeout = 1 + 6 * Math.random();
//         setTimeout(() => {
//             resolve()
//         }, timeout * 1000);
//     })
// }

// async function main() {


//     let t = setInterval(() => {
//         let last = document.body.getElementsByTagName("div");
//         last = last[last.length - 1]
//         if(last.innerHTML.endsWith("...")){
//             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
//         }
//         else{

//             last.innerHTML = last.innerHTML + "."
//         }

//     }, 100);


//     let text = ["Initialized Hacking now reading your data",
//         "Reading your Files",
//         "Password files Detected",
//         "Sending all passwords and personal files to server",
//         "Cleaning up"]

//     for (const item of text) {
//         await addItem(item)
//     }

//     await randomDelay()
//     clearInterval(t)
    
// }
// main()