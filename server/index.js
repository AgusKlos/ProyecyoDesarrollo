const express = require ('express');
const app = express();
const mysql2= require ('mysql2');
const cors= require('cors');

app.use(cors());

let db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '10203040',
    database: 'mydb'
})

app.get('/', (req, res) => {
    db.query("INSERT INTO `mydb`.`Profesion` (`nombre`) VALUES('Ingeniería prueba')", (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Error en la base de datos');
        } else {
            console.log(result);
            res.send('Datos insertados correctamente');
        }
    });
});


app.listen(8080, ()=>{
    console.log('server escuchando puerto 8080');
})