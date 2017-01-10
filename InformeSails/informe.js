#   Getting Started
##  Installation
### To install the latest stable release with the command-line tool:

    sudo npm -g install sails

### On Windows (or Mac OS with Homebrew), you don't need sudo:

    npm -g install sails

##  Creating a New Sails Project
### Create a new app:

    sails new testProject

### Now lift the server:
    
    cd testProject

    sails lift

### At this point, if you visit (http://localhost:1337/) you will see the default home page.


##  Opciones Sail
### Sails requiere opciones, si no se definen, las opciones son:

    1 SAFE MODE     no se alterará la BD
    2 ALTER MODE    se alterará la BD, si por ejemplo realizamos cambios en los modelos
    3 DELETE MODE   elimina todos los datos de la BD y crea los modelos nuevamente

## Servidor Web Sails

    Localizado en la carpeta **assets**

##  Controladores

    sails generate controller controllerName
    
    
##  Tarea

    http://localhost:1337/Saludo/hey?name=Andres 
    *Con POSTMAN GET
    
    answer:
    
    {
        "name": "Hey GET!",
        "params": {
        "name": "Andres"
        }
    }
    
    Revisar NodeMailer
    MailGun
    