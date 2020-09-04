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
         console.log('conectado');
        }
     });
}
handlerConnect();





exports.get = function(req, res) {
const idCamara = req.params.id_camara;
const idUnidad = req.params.id_unidad;
var query = connection.query(`SELECT name_camara, url FROM camara c, unidad u where c.id_camara = ${idCamara} and c.id_unidad = u.id_unidad and u.id_unidad = ${idUnidad}`, function(error, result){
    if(error){
        throw error;
  
    }else {
        const resultado = result;
        res.send(resultado)
    }
  })
  
}


