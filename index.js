const express=require('express');
const app = express();
const port=4000;

require('dotenv').config();

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/twitter',(req,res)=>{
    res.send("welcome to twitter");
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login to continue</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`app run on port ${port}`);
    
})