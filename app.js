const express = require('express')

const app = express()
const PORT = 3000

const startingServer = (error) => {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
}

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200)
    res.send("<h1>Start page</h1>")
})

app.listen(PORT,startingServer)