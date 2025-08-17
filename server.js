const express = require('express');

const app = express()

const PORT = 8080

app.get('/ping', (req, res)=>{
    res.send('pong')
})

app.listen(PORT, ()=>console.log(`App is listening at ${PORT}`))

