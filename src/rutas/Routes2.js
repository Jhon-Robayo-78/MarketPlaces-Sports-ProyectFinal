const express = require('express');
const { query } = require('../DataBase.js');
const RouterPages = express.Router();
//const path = require('path');

const mysqlConect = require('../DataBase.js');


//listado users 
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

//Metodo post para users
RouterPages.post('/Users/Add', (req,res)=>{
    const { id, nombre, apellido, email, PhoneNumber, isAdmin, isClient, PASSWORD } = req.body;
    const query = `CALL UsersAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?);`;
    mysqlConect.query(query,[id, nombre, apellido, email, PhoneNumber, isAdmin, isClient, PASSWORD],
        (err,rows,fields) =>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }  
        });
});

RouterPages.put('/:id',(req, res)=>{
    const {nombre, apellido, email, PhoneNumber, isAdmin, isClient, PASSWORD} = req.body;
    const { id } = req.params;
    const query = 'CALL UsersAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?);';
    mysqlConect.query(query,[id, nombre, apellido, email, PhoneNumber, isAdmin, isClient, PASSWORD],
        (err,rows,fields) =>{
            if(!err){
                res.json({status:'Usuario Actualizado'});
            }else{
                console.log(err);
            }
        });
});

RouterPages.delete('/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConect.query('DELETE FROM Users WHERE id = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json({status:'delete user'})
        }else{
            console.log(err);
        }
    } )
})

RouterPages.get('/Producs',(req,res)=>{
    mysqlConect.query('SELECT * FROM Products',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
}); 

RouterPages.get('/Servicios',(req,res)=>{
    mysqlConect.query('SELECT * FROM Servicios',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = RouterPages;


//Obsoleto de momento
/* 
RouterPages.get('/',(req,res)=>{
    //res.sendFile((path.join(__dirname+'/Web/index.html')));
    //return;
    //res.end();
});

RouterPages.get('/Registro',(req,res)=>{
    //res.sendFile((path.join(__dirname+'/Web/Registro.html')));
    //return;
    //res.end();
});

RouterPages.get('/Login',(req,res)=>{
    //res.sendFile((path.join(__dirname+'/Web/Login.html')));
    //res.render((path.join(__dirname+'/Web/Login.html')));
    //return;
    //res.end();
});

RouterPages.post('/Login', async (req,res)=>{
    ////res.sendFile((path.join(__dirname+'/Web/Login.html')));
    //return;
    console.log(req.body);
    const data = JSON.stringify(req.body);
    console.log(data); 
    //let email,password;
    //const { email, password} = req.body;
    //console.log(email);
    //console.log(password);
    //res.json('recibido');
    //res.end();
});

RouterPages.get('/item',(req,res)=>{
    //res.sendFile((path.join(__dirname+'/Web/Items.html')));
    //return;
    //res.end();
});
*/
