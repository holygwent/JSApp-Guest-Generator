const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.urlencoded({extended:true}) );


app.set('view engine','ejs');
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))


app.get('/',(req,res)=>{
    res.status(200);
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.status(200);
    
    res.render('about');
})
app.listen(3000);

const userRouter = require("./routes/guests");

app.use('/guests',userRouter);