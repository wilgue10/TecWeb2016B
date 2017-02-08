# Sailsjs - Assets / Views / Pipeline / Controllers

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Sailsjs - Assets / Views / Pipeline / Controllers` 
### Fecha : `2016-01-05`
### Estudiante : `Wilmer Vinicio Guevara Farinango`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `8`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#sails">Que es sails</a>
  * <a href="#instalacion">instalacion</a>
  * <a href="#Carpetas">Carpetas Generales</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sailsjs - Assets / Views / Pipeline / Controllers`

<a name="objetivos"></a>
## Objetivos

- Aprender el uso adecuado de Sails
- Entender para que sirven las carpetas que sails crea al crear un proyecto su utilidad y funcionamiento
- Entender la funcionalidad y las ventajas de usar un controlador 

<a name="marco-teorico"></a>
## Marco Teorico
<a name="sails"></a>
### Definición de Sails 
***

Sails.js es un framework para Node.js. Está realizado bajo el framework Express, incluyendo varias capas de abstracción para hacer un desarrollo más fácil. Sails viene instalado con un potente ORM/ODM llamada waterline, una herramienta de almacén de datos agnóstico que simplifica drásticamente la interacción con una o más bases de datos. Proporciona una capa de abstracción en la parte superior de la base de datos subyacente, lo que le permite consultar fácilmente y manipular sus datos sin necesidad de escribir código de integración específica del proveedor. La última versión de Sails viene preparado para trabajar Postgres, Mongo, MySQL, Redis, y en disco. Entre otras cosas, nos facilita en gran medida el desarrollo de APIs REST, servidores de archivos, seguridad y websockets para menajar y realizar peticiones en tiempo real gracias a Socket.io.


Está creado con la filosofía "Convención sobre Configuración" o CoC, por sus siglas en inglés; esto significa que nos permite enfocarnos en el desarrollo de la idea, ahorrándonos mucho tiempo en configuración inicial y es un complemento ideal para frameworks como AngularJS, BackboneJS o ReactJS.


Esto se logra gracias a que SailsJS sigue un conjunto cuidadosamente selecto de convenciones modernas, automatizando una gran parte del proceso de desarrollo.
(Fuente: [SailsTutorial](//https://openwebinars.net/blog/tutorial-sailsjs-instalacion//))
<br>


<br><br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/10Sails/Informe/RecursosInformeImagenes/sails.jpg" >
</p>

<a href="#cabecera">A la cabecera</a>

<a name="sails"></a>

### Instalacion
***

Para instalar Sails, es bastante simple. Los requisitos son tener Node.js instalado y también la NPM, que viene con Node. Entonces uno debe emitir el siguiente comando en el terminal: (Fuente: <a href="https://openwebinars.net/blog/tutorial-sailsjs-instalacion/">SailsJs.com</a>)
<br>



<a href="#cabecera">A la cabecera</a>

<a name="carpetas"></a>

### Carpetas Generales

#### Carpeta API

En esta sección almacenamos la mayor parte de la lógica de nuestro backend, el Modelo y el Controlador son definidos por los contenidos de esta carpeta y esta a su vez contiene la siguientes carpetas:

* La carpeta controllers contiene los controladores de la aplicación. Estos son archivos de Javascript que contienen la lógica para interactuar con los Modelos y renderizar la Visualización de forma adecuada.
*En la carpeta models se almacenan los modelos de la aplicación. Estas son estructuras que almacenan los datos de tu aplicación.
* En la carpeta de policies se almacenan las reglas de acceso de usuario de aplicación. Esto es Middleware de Express, que se encarga de controlar la seguridad de los Controladores.
* En la carpeta de responses se almacenan la lógica que genera las respuestas del servidor.
* En la carpeta de services se almacenan los servicios api implementadas por la aplicación. Son archivos Javascript similares a los Controladores, pero no necesariamente generan una respuesta inmediata al cliente, o simplemente no tiene comunicación directa con él. Son muy útiles para crear tareas o servicios asíncronos, por ejemplo, procesos lentos cuya respuesta es enviada al cliente eventualmente via websocket o email.
<br>
#### Carpeta Assets

La carpeta de activos contiene subdirectorios para los archivos JavaScript y CSS que deben ser cargados en tiempo de ejecución. Este es el mejor lugar para almacenar bibliotecas auxiliares utilizados por la aplicación. Sección en la que vamos a colocar los archivos estáticos de nuestro proyecto; el favicon y el robots.txt los encontramos en la raíz del directorio y el resto los agrupamos en estas carpetas:

* images: la usamos para almacenar nuestros assets visuales, por ejemplo transparencias .svg, .webp o .png, así como imágenes .jpg entre otras.
* js: en esta colocamos los archivos Javascript para el cliente, por ejemplo las librerías.
* styles: aquí puedes colocar tus archivos CSS. Para mejores resultados, te recomiendo usar un precompilador como stylus, de este modo puedes hacer modular tu código y crear automáticamente un CSS para producción con compresión y vendor prefixes.
* templates: para almacenar los HTML y JST de nuestra aplicación.
<br>
#### Carpeta config

Esta es una de las carpetas importantes. Sails está diseñado para ser flexible. Asume algunas convenciones estándar, sino que también permite al desarrollador cambiar la forma de que sails configura la aplicación creada para adaptarse a las necesidades del proyecto. La siguiente es una lista de los archivos de configuración presentes en la carpeta config:

* Carpeta env: - Aquí guardamos las llaves, claves y contraseñas que necesitamos (para conectarnos a las bases de datos), y APIs remotas. Se clasifican en:
development.js para el modo de desarrollo.
production.js para el modo de producción.
* Carpeta locales: - en esta sección guardamos archivos JSON que se usan como diccionario para internacionalizar nuestra aplicación, permitiendo agregar nuevos idiomas con menos esfuerzo y sin perder tiempo buscando e integrando una solución para nuestro proyecto.
* local.js: los usamos para definir el puerto y el modo de desarrollo de nuestra aplicación (desarrollo o producción).
* cors.js: en esta determinamos la forma en que nuestro servidor manejará las solicitudes CORS; nos ofrece una forma moderna y segura de comunicarnos con datos externos y es más segura que JSONP pues nos permite especificar procedimientos para solicitudes GET, PUT, POST o DELETE.
* csrf.js: con este controlamos la seguridad con tokens CSRF, que nos permiten confirmar que las solicitudes que no son de tipo GET provengan exclusivamente desde nuestro servidor, evitando que otros sitios consuman nuestros servicios.
* blueprints.js: nos permite definir fácilmente APIs para interactuar con nuestros Modelos.
* globals.js: en este archivo definimos las variables globales de nuestra aplicación.
* http.js: aquí especificamos detalles de nuestro servidor HTTP, especialmente el middleware y la administración de la caché.
* i18n.js: en este archivo ponemos la lista de idiomas que soporta nuestra aplicación.
* bootstrap.js: este archivo se ejecuta justo antes de "levantar" nuestra aplicación con el comando lift, el cual nos sirve para definir tareas que necesitamos se ejecuten antes de levantar el servidor.
* connections.js: en este archivo especificamos los ajustes necesarios por nuestros adaptadores y básicamente son intermediarios entre nuestra aplicación y las bases de datos, esto nos facilita administrar las conexiones a distintas bases de datos.
* log.js: aquí configuramos el nivel de logging de nuestra aplicación, en otras palabras, el nivel de detalle que deseamos registrar sobre los eventos en nuestra aplicación.
* models.js: nos permite manejar las conexiones por default que serán incluidas en todos nuestros Modelos.
* policies.js: esta nos permite definir políticas de seguridad para nuestros Controladores.
* routes.js: en este archivo configuramos la relación entre las rutas de nuestra aplicación y los recursos, esto se hace generalmente después de que se cumplan las políticas de seguridad para los recursos solicitados.
* sessions.js: esta configuración nos permite guardar los datos de sesión de cada usuario y aplicarla en Express y en Socket.IO.
* sockets.js: lo usamos para personalizar la forma en que nuestro backend se comunica con el usuario por medio de Socket.IO.
* views.js: en este podemos personalizar el motor que deseamos usar para definir los templates HTML que serán usados para la Visualización de nuestra aplicación, por ejemplo ejs, jade, underscore y muchos más.
<br>
#### Carpeta views

Las vistas de la aplicación se almacenan en esta carpeta. En cuanto a su contenido, nos damos cuenta de que las opiniones se generan por defecto como, JavaScript incrustado, EJS. Además, la carpeta contiene vistas para el manejo de errores (404 y 500) y también el archivo de diseño, layout.ejs, y los puntos de vista para el controlador de la casa, que se genera mediante Sails.

No podíamos irnos sin recordarte que puedes acceder a algunos de nuestros cursos de forma 100% gratuita para que consigas formarte y crecer como un profesional IT.
<br>


<br><br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/10Sails/Informe/RecursosInformeImagenes/carpetas.png"    >
</p>

<a href="#cabecera">A la cabecera</a>

<a name="pipeline"></a>

### Definción de Controller
***



Los controladores (en MVC) son los responsables de responder a las solicitudes de un navegador web, una aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. A menudo actúan como intermediarios entre sus modelos y vistas. Para muchas aplicaciones, los controladores contendrán la mayor parte de la lógica de negocio de su proyecto (Fuente: <a href="http://sailsjs.com/documentation/concepts/controllers">SailsJs.com</a>)
<br>


<br><br>

<a href="#cabecera">A la cabecera</a>



<a name="desarrollo"></a>
## Desarrollo del informe

### Instalar Sails

Para instalar Sails en nuestro computador lo unico que debemos hacer es ingresar en una consola el siguiente comando:

```
npm install -g sails

```
### Instalar Sails

Para instalar Sails en nuestro computador lo unico que debemos hacer es ingresar en una consola el siguiente comando:

```
npm install -g sails
```
### Crear un Proyecto

Para crear un proyecto abrimos una terminal desde la carpeta en la cual queremos crear el proyecto y en esta ejecutamos el siguiente comando 

```
sails new NombreDel proyecto 
```
<br><br>
 Si la creación fue exitosa se muestra en la consola algo así:
 <br><br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/10Sails/Informe/RecursosInformeImagenes/sailsNewI.png" width="300" height="100">
</p>

### Crear un Api

Una Api es la fusión de un controlador el cual se crea ejecutando: 

```
sails generate controller NombreControlador 
```
<br>
y un Modelo el cual se crea ejecutando:
```
sails generate model NombreModelo  
```

y finalmente si lo que queremos es crear una api utilizamos el código:
```
sails generate api NombreAP 
```
<br><br>
 Si la creación fue exitosa se muestra en la consola algo así:
 <br><br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/10Sails/Informe/RecursosInformeImagenes/generateApi.PNG" width="300" height="100">
</p>



Ahora inicializamos el servidor para ello en la terminal ejecutamos el comando:
```
sails lift  
```

 <br><br>
 Si la ejecución es correcta se mostrará en consola algo asi:
 
 <br><br>
<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/10Sails/Informe/RecursosInformeImagenes/sailsLift.png" width="300" height="200">
</p>




<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se recomienda usar vistas para evitar que se recargue toda la página.
- Es importante concer la teoria de modelo vista controlador para entender el funcionamiento de Sails
- Sails ha sido un framework facil de entender y usar

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Wilmer Guevara](https://github.com/wilgue10)