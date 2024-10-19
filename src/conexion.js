// const mysql = require("mysql");
// const express = require("express");
// const app = express();

// let conexion = mysql.createConnection({
//     host: "localhost",
//     database: "mydb",
//     user: "root",
//     password: "10203040"
// });

// console.log(conexion.query("INSERT INTO Profesion ('nombre') VALUES('Ingeniería prueba')", (err,res)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('ok');
//             }
//     }));


// conexion.connect(()=>{
//     //llega
//     app.post('/Profesion',(req,res)=>{
//         console.log('okey');
//         conexion.query("INSERT INTO Profesion ('nombre') VALUES('Ingeniería prueba')", (err,res)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('ok');
//             }
//     })
//     })
// })

// conexion.end();

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conexión a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost', // tu host
    database: 'mydb' // nombre de tu base de datos
});

conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos');
    }
});

// Endpoint para insertar una profesión
app.post('/Profesion', (req, res) => {
    const { nombre } = req.body; // recibe el 'nombre' desde el cliente
    
    const query = "INSERT INTO Profesion (nombre) VALUES (?)";
    conexion.query(query, [nombre], (err, result) => {//entra toda
        if (err) {
            console.error('Error al insertar:', err);
            res.status(500).send('Error al insertar en la base de datos');
        } else {
            console.log('Profesión insertada correctamente');
            res.send('Profesión insertada correctamente');
        }
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});

fetch('http://localhost:3000/Profesion', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre: 'Ingeniería' }),
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
