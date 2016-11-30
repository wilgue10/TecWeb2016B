var express = require('express');
var app = express();
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
app.get('/', function (req, res) {
  res.send('Hello World!');
   
});
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
app.post('/Teconologias Web', function (req, res) {
    
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

app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});