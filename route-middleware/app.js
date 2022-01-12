const express = require('express');
const app = express();
const middleware = require('./middleware')


const ExpressError = require('./expressError')
const userRoutes = require("./userRoutes");

app.use(express.json());


// put it up top (like right here)
app.use(middleware.logger)

app.use('/users', userRoutes)
app.get('/favicon.ico', (req, res) => res.sendStatus(204))


app.get('/secret', middleware.checkForPassword, (req, res) => {
    return res.send("I LOVE YOU <3 FOR REAL MARRY ME")
})


app.get('/private', middleware.checkForPassword, (req, res) => {
    return res.send("YOU HAVE REACHED THE PRIVATE PAGE. IT IS PRIVATE.")
})


// 404 handler
app.use(function (req, res){
    return new ExpressError("Not Found", 404);
});

// generic error handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;

    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    })
})


app.listen(5000, function() {
    console.log(`Server starting on port 5000`)
})