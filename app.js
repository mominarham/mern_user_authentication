const express = require('express')
const app = express()
const db = require("mongoose")
const cors = require('cors')
const UserPrac = require('./models/UserSchema')
app.use(express.json())
app.use(cors())


db.connect('mongodb+srv://mominarham16:mominarham16@cluster0.sexxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    // useCreateIndex:true ,
    useUnifiedTopology: true ,
    // useFindAndModify:false
}).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log('not connected==>',err)
})

app.use(require('./routes/routes'))



app.listen(4000,(req,res)=>{
    console.log( 'server is running')
})