const express = require('express')
const app = express()
const port = 4200

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.get('/hello/:name', (req, res) => {
    res.send(`Hello, I am ${req.params.name}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})