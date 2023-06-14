require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const connectDB = require('./src/config/connectDB.js')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT
connectDB()

app.use(cors())
app.use(express.json())

app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', require('./src/routes/root'))
app.use('/categories', require('./src/routes/categoriesRoute'))
app.use('/transaction', require('./src/routes/transactionRoute'))
app.use('/label', require('./src/routes/labelRoute'))

//Cette route va permettre de tous les pages et routes inexitente que l'on va essayer de joindre.
app.all('*', (req,res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'view', '404.html'))
    } else if(req.accepts('json')){
        res.json({ message: '404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
})


mongoose.connection.once('open', () =>{
    console.log(`Connected to MongoDB`)
    app.listen(PORT, () =>{
        console.log(`The server is running on port:${PORT}`)
    })

})