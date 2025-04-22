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

app.post('/sendMessage', async (req, res) => {
    const message = req.body.message;
    try {
        const sent = await prisma.User.create({
            data: {
                Message: message,
                username: "John"
            }
        });
        console.log(sent);
        res.send('Message received');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Server error');
    }
});



app.listen(3000, console.log('server listening on port 3000'));