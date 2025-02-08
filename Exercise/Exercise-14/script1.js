
document.body.style.backgroundColor = "green"

const blinkDot = (text, para) => {
    setTimeout(() => {
        para.innerHTML += "."
        setTimeout(() => {
            para.innerHTML += "."
            setTimeout(() => {
                para.innerHTML += "."
            }, 1000);
        }, 1000);
    }, 1000);
}
const printTxt = (text) => {
    console.log(text);
    rand = Math.floor(Math.random() * 3 + 1);

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve();

            let para = document.createElement("p");
            para.innerHTML = text;
            document.body.append(para)

            blinkDot(text, para)
        }, rand * 1000);
    })

}

const hackingPC = async () => {
    await printTxt("Initializing Hacking")
    await printTxt("Reading your Files")
    await printTxt("Password Files Detected")
    await printTxt("Sending all password and personal files to server")
    await printTxt("Cleaning Up")
}
hackingPC()