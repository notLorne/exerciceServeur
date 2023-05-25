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

app.post('/connection', (req, res) => {
    var uname = req.body.uname;
    var psw = req.body.psw;
    //res.status(401).send('code 401 (Unauthorized)')
    if( uname == "admin" || psw == "12345" ) {
        res.sendFile(__dirname + "/naruto.html")
    } else {
        res.status(401).send('code 401 (Unauthorized)')
    }
  })
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})