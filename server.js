const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const app = express()
const corsOptions = {
    origin: ['http://localhost:5173']
};
//midleware
app.use(cookieParser());
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers
const userRoutes = require('./routes/usersRoutes.js')
const transactionRoutes = require('./routes/transactionRoutes.js')
app.use('/', transactionRoutes)
app.use('/', userRoutes)


//testing api
app.get('/', (req, res) => {
    res.json({message:'hello from api'})
})


//port
const PORT = process.env.PORT || 8080


//server
app.listen(PORT, ()=> {
    console.log('server is running on port: ', PORT)
})