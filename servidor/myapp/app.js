var express = require('express');
var app = express();
var contador=3;
var usuarios=[
    {
        id:1,
        nombre:'wilmer',
        cedula:'132134564'
    },
    {
        id:2,
        nombre:'pepe',
        cedula:'000000'
    },
    {
        id:3,
        nombre:'carlos',
        cedula:'1111111'
    }
]
var fs = require('fs');

var quepasa='';

quepasa='esta por leer el archivo';


quepasa='termino de leer el archivo';

//console.log(quepasa);





app.get('/', function (req, res) {
    res.send('Bienvenidos al Api de Usuarios!')
    
    fs.readFile('./paginas/pagina1.html',
    'utf8',
    function (error, archivoLeido) {
        console.log(error);
        console.log(archivoLeido);
        res.send(archivoLeido);
    });
    
    
})
app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})
app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})


app.get('/Teconologias Web', function (req, res) {
  res.send('con javaScript!');
});

app.post('/Usuario', function (req, res) {
    console.log(req.query.nombre);
     console.log(req.query.cedula);
    
    
    if(!req.query.nombre){
        res.send('no envio el nombre')
        
        
    }
    if(!req.query.cedula){
        
        
        res.send('no envio la cedula')
        
    }
     var nuevoUsuarios={
        
        
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.ceddula
    }
     
    usuarios.push(nuevoUsuarios);
    contador++;
    res.json(nuevoUsuarios)
    
//    var parametros=req.params;
//    
//    var usuario ={
//        nombre:'wilmer',
//        Cedula:'0000000'
//    }
//    usuario.casado=false;
//    usuario.mascotas=[];
//    usuario.apellido='';
//    
//    console.log('REQUEST'+req);
//    console.log('RESPONT'+res);
//    console.log('REQUEST HEADERS'+req.HEADERS_RECEIVED);
//    console.log('RESPONT HEADERS '+res.HEADERS_RECEIVED);
//    res.heeaders={
//            token:1234;
//    }
//    res.json(usuario)
//    res.append('token','1234')
//  //res.send('{nombre:Wilmer,cedula:172624682}');

   
});
app.put('/Usuario/:idUsuario', function (req, res) {
    //implementacion
    //El Usuario Actualizado
})

app.delete('/Usuario/:idUsuario', function (req, res) {
    //implementacion
    //El Usuario Borrado
})


app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});