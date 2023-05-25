const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/about.html")
    console.log(__dirname);
  })

app.get('/confirm', (req, res) => {
    res.sendFile(__dirname + "/confirm.html")
    console.log(__dirname);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })