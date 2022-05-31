const express = require('express');
const app = express();

//setttings 
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());


//routes
app.use(require('./rutas/Routes2.js'));

// start server 

app.listen(app.get('port'),()=>{
    console.log("Primer servidor, puerto ",app.get('port'));
});