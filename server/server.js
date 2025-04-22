const express = require('express');
const app = express()
const cors = require('cors');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.urlencoded({extended: 'true'}))
app.use(cors());

app.get('/messages', async (req,res)=>{
    const messages = await prisma.User.findMany()
    res.json(messages)
})



app.post('/messages', async (req, res) => {
    const message = req.body.message;
    try {
        const sent = await prisma.User.create({
            data: {
                Message: message,
                username: username
            }
        });
        console.log(sent);
        res.status(201).json('new message');
    } catch (error) {
        res.status(500).send('Server error');
    }
});


app.listen(3000, console.log('server listening on port 3000'));


