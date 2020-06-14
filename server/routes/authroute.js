const router = require('express').Router()
// const cors = require('cors')

// login post
//
router.post('/signup',(req, res) => {
  // register a user here
  res.json(req.body)
  console.log(req.body)
})
// sign up post
router.post('/login/userID', (req, res) => {
  // retrive the user
  res.json(req.body)
  console.log(req.body)
})

module.exports = router
