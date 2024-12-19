const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ProductsRouters = require('./routers/Products.route')

// middleware 
app.use(express.json())
app.use(express.urlencoded({extended : false}))


// product routes 
app.use('/api/Products' , ProductsRouters)


// db connection 
mongoose.connect('mongodb+srv://mohitSwami463:m%409828854006@nodeapi.thyo2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeAPI').then(()=>{
    console.log("Connected with database.") 
    app.listen(3000 , () => {
        console.log('Server is running successfully')
    })
}).catch(()=>{
    console.log('Not able to connect with db')
})