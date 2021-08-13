const express=require("express")
const app=express()
app.use(express.json())

app.use('/',require('./routes/index'))


const PORT=7777;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})