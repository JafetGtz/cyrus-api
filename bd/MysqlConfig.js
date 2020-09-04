var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "monitoreo_camara",
    port: 3306
});


const handlerConnect = async () => {
    connection.connect(function(error){
        if(error){
           throw error;
        }else{
         console.log('conectado')
        }
     });
}


module.exports = handlerConnect;

