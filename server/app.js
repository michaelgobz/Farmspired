const express = require('express')
const debug = require('debug')("app")
const bodyparser = require('body-parser')
const authroutes = require('./routes/authroute')
const cors = require('cors')
const CLIENT_END_POINT = "http://localhost:1234"

const app = express()
const port = process.env.PORT || 4000

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/auth', authroutes)

app.use(cors({
  origin: CLIENT_END_POINT, // allow to server to accept request from different origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true // allow session cookie from browser to pass through
}))



app.get('/', (req, res) => {
  debug(req.method + ' ' + req.url);
  res.redirect(CLIENT_END_POINT)
})

app.listen(port,
  () => console.log(`Server is running on port ${port}!`)
);
