const express = require('express')
const router = express.Router()

// // middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }


// router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('contact home page')
})
// define the about route
router.get('/contact', (req, res) => {
  res.send('About contact')
})
router.get('/:slug', (req, res) => {
  res.send(`You typed ${req.params.slug}`)
})
router.get('/about/:slug', (req, res) => {
  res.send(`You typed ${req.params.slug}`)
})

module.exports = router