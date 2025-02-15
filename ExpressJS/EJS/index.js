const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.get('/', (req, res) => {
//   res.sendFile('./template/index.html', {root: __dirname})
// })


app.get('/', (req, res) => {
    let setName = "Rajuan"
    let value = "First"
    let arr = ["val-1","val-2","val-3"]
  res.render('index', {setName: setName, value: value, arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})