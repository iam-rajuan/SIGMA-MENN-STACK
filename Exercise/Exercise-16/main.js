const express = require('express')
const mongoose = require('mongoose');
const employee = require('./models/employee');
const app = express()
const port = 3000
app.set('view engine', 'ejs');




const getRandomData = (arr)=>{
    let random = Math.floor(Math.random()*2+0)
    return arr[random]
}
// function getRandomData(arr){
//     let random = Math.ceil(Math.random()*3+1)
//     return arr[random]
// }


mongoose.connect('mongodb://127.0.0.1:27017/Company');
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/clear', async (req, res) => {
  //delete data
 await employee.deleteMany({})
 
 
})
app.get('/data', async (req, res) => {
  await employee.deleteMany({})
  //generate data
    let name = ['Rajuan','Abrar','Sumon']
    let language = ['C++','JavaScript','Python']
    let city = ['Kaliakair','Gazipur','Dhaka']

    for (let i = 0; i < 10; i++) {
        let data = await employee.create({
            name: getRandomData(name),
            salary: Math.ceil(Math.random()*1+20000),
            language: getRandomData(language),
            city: getRandomData(city),
            isManager: (Math.random>0.5)?true:false
        })
        console.log(data)
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})