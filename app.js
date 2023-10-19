const express=require('express')
const app=express()
//
require('dotenv').config();
const port = process.env.PORT;
//Cconst port =8081;

//servir un contenido estatico
app.use(express.static('public'));

app.get('/', function(req,res){

    res.send('home page')

})

app.get('/holis-mundo', function(req,res){

    res.send('ola mundo con su respectiva ruta')

})

app.get('*', (req,res)=>{

    res.sendFile(__dirname+'/public/Error404.html')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })