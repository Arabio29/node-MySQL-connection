//modulo mysql
const mysql = require('mysql');

//configura parametros a tu base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios_node_sql',
    user: 'root',
    password: '',
});

//establece la conexion
console.log('Intentando conectar a la base de datos...');
connection.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log('Conexión a la base de datos MySQL establecida');
    }

    // Aquí puedes realizar consultas o ejecutar código que requiera la conexión a la base de datos
    
    // Cierra la conexión cuando hayas terminado de usarla
});

connection.end();