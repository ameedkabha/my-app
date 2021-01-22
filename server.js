const express = require('express');
const app = express();
const port=process.new.PORT ||3000;
 
app.use(express.static('public'))

app.listen(port,function(){

    console.log("listen")
    
})

 
app.listen(3000)