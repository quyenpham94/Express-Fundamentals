
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Homepage")
})

app.get('/dogs', (req, res) => {

    console.log("You asked for /dogs!")
    console.log(req)
    res.send("<h1> I am dog woof woof</h1>")
})

app.get('/chickens',(reqq, res) => {
    res.send("bock bock bock (get request)")
})

app.post('/chickens', function createChicken(req, res) {
    res.send("you create a new chicken (not really) (post request)")
})

app.listen(5000, function() {
    console.log('App on port 5000')
})
