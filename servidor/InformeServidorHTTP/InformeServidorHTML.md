# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `jueves, 8 de diciembre de 2016, 23:55`
### Estudiante : `Wilmer Vinicio Guevara Farinango`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#Definición NPM">Definición NPM</a>
  * <a href="#Historia NPM">Historia NPM</a>
  * <a href="#inst NPM">instalacion NPM</a>
  * <a href="#Ejemplo Hello world NPM">Ejemplo Hello world NPM</a>
  * <a href="#Direccionamiento básico">Direccionamiento básico</a>
    * <a href="#Método Get">Método Get</a>
  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Backend con Nodejs`

<a name="objetivos"></a>
## Objetivos

- Aprender sobre los servidores 
- Realizar la instalacion correcta de NPM
- Aprender a dominar los metodos get,put,delete

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defhtml"></a>
### Definición NPM

NPM es el valor por defecto del gestor de paquetes para las JavaScript entorno de ejecución Node.js.
NPM se incluye automáticamente cuando se instala Node.js. [4] NPM consiste en una línea de comandos de cliente que interactúa con un registro remoto. Permite a los usuarios consumen y distribuyen los módulos de JavaScript que están disponibles en el registro. [5] Paquetes en el registro están en CommonJS formato e incluyen un archivo de metadatos en JSON formato. [6] Más de 280.000 paquetes están disponibles en el registro principal de la NGP. [7] Paquetes en la NGP se registran en un primer llegado primer servido base y no distinguen entre los autores, lo que significa que se anule la publicación de un paquete no sólo puede romper los proyectos que dependen de ella, sino también plantear un riesgo para la seguridad. [8] El registro NPM tiene ningún proceso de selección para la presentación, lo que significa que los paquetes encontrados no puede haber baja calidad, inseguro, o malicioso. [6] Sin embargo, los administradores del servidor de la NGP son totalmente capaces de borrar paquetes maliciosos o prohibición de usuarios maliciosos. [9] NPM expone las estadísticas de uso y el número de paquetes en función de ayudar a los desarrolladores en la selección de las bibliotecas.
 (Fuente: [PDF](https://en.wikipedia.org/wiki/Npm_(software)))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/npm.png?raw=true" width="300" height="200">
</p>
<br><br>
<a name="hist"></a>
### Historia 

NPM está escrito completamente en JavaScript y fue desarrollado por Isaac Z. Schlueter como resultado de haber "visto envases módulo de hecho terriblemente" y con la inspiración de las deficiencias de otros proyectos similares, tales como PHP ( PEAR ) y Perl ( CPAN ). 

(Fuente: <a href="https://en.wikipedia.org/wiki/Npm_(software)">Wikipedia</a>)
<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Instalación de NPM
<br>
Suponiendo que ya ha instalado Node.js, cree un directorio para que contenga la aplicación y conviértalo en el directorio de trabajo.

```
$ mkdir myapp
$ cd myapp
```

Utilice el mandato npm init para crear un archivo package.json para la aplicación. Para obtener más información sobre cómo funciona package.json, consulte Specifics of npm’s package.json handling.


```
$ npm init
```
<br>
Este mandato solicita varios elementos como, por ejemplo, el nombre y la versión de la aplicación. Por ahora, sólo tiene que pulsar INTRO para aceptar los valores predeterminados para la mayoría de ellos, con la siguiente excepción:

```
$ entry point: (index.js)
```
<br>
Especifique app.js o el nombre que desee para el archivo principal. Si desea que sea index.js, pulse INTRO para aceptar el nombre de archivo predeterminado recomendado.
```
$ npm install express --save
```
<br>
Para instalar Express temporalmente y no añadirlo a la lista de dependencias, omita la opción --save:
<a href="#cabecera">A la cabecera</a>
```
$ npm install express
```


<br>
<br>
###Ejemplo Hello world
En el directorio myapp, cree un archivo denominado app.js y añada el código siguiente:
```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```
<br>
La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.
Ejecute la aplicación con el siguiente mandato:

```
$ node app.js
```
Ejecucion:
<br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/smsEjecucion.PNG?raw=true" width="300" height="200">
</p>
<br>
digitamos en nuestro explorador favorito lo siguiente:
```
localhost:5050
```
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/ejecucionFire.PNG?raw=true" width="300" height="200">
</p>
<a href="#cabecera">A la cabecera</a>
<br>
<br>

###Direccionamiento básico
<br>
El direccionamiento hace referencia a la determinación de cómo responde una aplicación a una solicitud de cliente en un determinado punto final, que es un URI (o una vía de acceso) y un método de solicitud HTTP específico (GET, POST, etc.).

Cada ruta puede tener una o varias funciones de manejador, que se excluyen cuando se correlaciona la ruta.

La definición de ruta tiene la siguiente estructura:
```
app.METHOD(PATH, HANDLER)
```
Donde:

* app es una instancia de express.
* METHOD es un método de solicitud HTTP.
* PATH es una vía de acceso en el servidor.
* HANDLER es la función que se ejecuta cuando se correlaciona la ruta.

#### Método GET
<br>
```
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
```
<br>

<br>
```
app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})

```
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/getUsuarios.PNG?raw=true" width="600" height="400">
</p>

<br>
```
app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})
```
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/getusuarioID.PNG?raw=true" width="600" height="400">
</p>
<br>

#### Método POST
Para esto utilizaremos Postman.
Postman, Cliente HTTP Para Probar Servicios Web
Postman es una extensión gratuita para el navegador Google Chrome que permite probar servicios web fácilmente, basta con indicar la url, el método HTTP (POST, GET, etc.) y los parámetros de la petición.

Conforme usamos Postman, automáticamente se van guardando las peticiones más recientes en el historial, que se encuentra a la izquierda de la pantalla, para tenerlas a la mano. También permite definir colecciones en donde podemos guardar una serie de métodos para reutilizarlos más fácilmente y poder compartirlos con otras personas en formato json. Ademas podemos crear ambientes y definir variables especificas para esos ambientes.
Instalacion Postman
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/postman.PNG?raw=true" width="600" height="400">
</p>
Postman
<br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/postman2.PNG?raw=true" width="600" height="400">
</p>
<br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/postman3.PNG?raw=true" width="600" height="400">
</p>
<br>
```
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
       
});
```
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/post.PNG?raw=true" width="600" height="400">
</p>
<br>

## Conclusiones y Recomendaciones

- Se recomienda practicar con los comandos aprendidos para su correcta manipulación.
- Se recomienda usar tutoriales para un buen aprendizaje.
- Se aprendio el uso de HTML.
- Conocimos los metodos get,push
- Desarrollamos conocimientos sobre servidores

# ¡Gracias por su atención!

Author: [Wilmer Guevara](https://github.com/wilgue10)# Introducción a la Web

