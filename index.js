const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi there !\n welcome to spotify consumption report service'))

app.get('/consumptionReport', (req, res) => {
    const user =  req.query.user
    console.log(req.query.user)
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.send('user:' + user)})

app.listen(port, () => console.log('Spotify consumption server is up and serving on: localhost:${port}'))

