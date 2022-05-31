const express = require('express');
const RouterPages = express.Router();
//const fs = require('fs');
const path = require('path');

const mysqlConect = require('../DataBase.js');

RouterPages.get('/',(req,res)=>{
    res.sendFile((path.join(__dirname+'/Web/index.html')));
    return;
    res.end();
});

RouterPages.get('/Registro',(req,res)=>{
    res.sendFile((path.join(__dirname+'/Web/Registro.html')));
    return;
    res.end();
});

RouterPages.get('/Login',(req,res)=>{
    res.sendFile((path.join(__dirname+'/Web/Login.html')));
    return;
    res.end();
});

RouterPages.get('/item',(req,res)=>{
    res.sendFile((path.join(__dirname+'/Web/Items.html')));
    return;
    res.end();
});

RouterPages.get('/Users',(req,res)=>{
    mysqlConect.query('SELECT * FROM Users',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//busqueda por nombre con metodo get 
RouterPages.get('/:nombre',(req,res)=>{
    const {nombre} = req.params;
    mysqlConect.query('SELECT * FROM Users WHERE nombre = ?',[nombre],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

//route.post()
module.exports = RouterPages;


/*routerP.get('/Producs',(req,res)=>{
    mysqlConect.query('SELECT * FROM Products',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
}); 

routerS.get('/Servicios',(req,res)=>{
    mysqlConect.query('SELECT * FROM Servicios',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

*/