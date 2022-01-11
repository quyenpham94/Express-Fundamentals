
const express = require('express');
const { get } = require('http');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const greetings = {
    en: "hello",
    fr: "bonjour",
    ic: "hallo",
    js: "konnichiwa",
}

app.get("/greet/:language", (req, res) => {
    const lang = req.params.language;
    const greeting = greetings[lang]
    res.send(greeting)
})

app.get('/search', (req, res) => {
    const {term = 'piggy', sort = 'top'} = req.query;
    return res.send(`SEARCH PAGE! Term is: ${term}, sort is: ${sort}`)
})

app.get('/show-me-headers', (req, res) =>{
    console.log(req.rawHeaders)
    console.log(req.headers)

    res.send(req.headers)
})

app.get('/show-language', (req, res) => {
    const lang = req.headers['accept-language']
    res.send(`Your language preference is ${lang}`)
})

app.post('/register', (req, res) => {
    res.send(`welcome, ${res.body.username}`);
})


app.listen(5000, function() {
    console.log('App on port 5000')
})

