const express = require('express');
app = express()

app.use(express.urlencoded({extended: 'true'}))

app.get('/', (req,res)=>{
    res.json('yo I got your message');
})

app.post('/sendMessage', (req,res)=> {
    const message = req.body.message
    res.json(message)
})


app.listen(3000, console.log('server listening on port 3000'));