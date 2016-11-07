# Diseño, calidad, WAI, Validación, Seo

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-11-08`
### Estudiante : `Wilmer Vinicio Guevara Farinango`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion JS</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- aprender sobre la tecnología web
- manipular herramientas para el conocimiento de la tecnología web
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defhtml"></a>
### Definición JS

JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web
dinámicas.
Una página web dinámica es aquella que incorpora efectos como texto que aparece y desaparece,
animaciones, acciones que se activan al pulsar botones y ventanas con mensajes de aviso al
usuario.
Técnicamente, JavaScript es un lenguaje de programación interpretado, por lo que no es
necesario compilar los programas para ejecutarlos. En otras palabras, los programas escritos
con JavaScript se pueden probar directamente en cualquier navegador sin necesidad de
procesos intermedios.
A pesar de su nombre, JavaScript no guarda ninguna relación directa con el lenguaje de
programación Java. Legalmente, JavaScript es una marca registrada de la empresa Sun
Microsystems, como se puede ver en http://www.sun.com/suntrademarks/.

 (Fuente: [JavaScript](http://www.jesusda.com/docs/ebooks/introduccion_javascript.pdf))
<br>
<a href="#cabecera">A la cabecera</a>


<a name="hist"></a>
### Historia y Facts

A principios de los años 90, la mayoría de usuarios que se conectaban a Internet lo hacían con
módems a una velocidad máxima de 28.8 kbps. En esa época, empezaban a desarrollarse las
primeras aplicaciones web y por tanto, las páginas web comenzaban a incluir formularios
complejos.
Con unas aplicaciones web cada vez más complejas y una velocidad de navegación tan lenta,
surgió la necesidad de un lenguaje de programación que se ejecutara en el navegador del
usuario. De esta forma, si el usuario no rellenaba correctamente un formulario, no se le hacía
esperar mucho tiempo hasta que el servidor volviera a mostrar el formulario indicando los
errores existentes.
Brendan Eich, un programador que trabajaba en Netscape, pensó que podría solucionar este
problema adaptando otras tecnologías existentes (como ScriptEase) al navegador Netscape
Navigator 2.0, que iba a lanzarse en 1995. Inicialmente, Eich denominó a su lenguaje LiveScript.
Posteriormente, Netscape firmó una alianza con Sun Microsystems para el desarrollo del nuevo
lenguaje de programación. Además, justo antes del lanzamiento Netscape decidió cambiar el
nombre por el de JavaScript. La razón del cambio de nombre fue exclusivamente por marketing,
ya que Java era la palabra de moda en el mundo informático y de Internet de la época.
La primera versión de JavaScript fue un completo éxito y Netscape Navigator 3.0 ya incorporaba
la siguiente versión del lenguaje, la versión 1.1. Al mismo tiempo, Microsoft lanzó JScript con su
navegador Internet Explorer 3. JScript era una copia de JavaScript al que le cambiaron el nombre
para evitar problemas legales.
Para evitar una guerra de tecnologías, Netscape decidió que lo mejor sería estandarizar el
lenguaje JavaScript. De esta forma, en 1997 se envió la especificación JavaScript 1.1 al organismo
ECMA (European Computer Manufacturers Association).
ECMA creó el comité TC39 con el objetivo de "estandarizar de un lenguaje de script
multiplataforma e independiente de cualquier empresa". El primer estándar que creó el comité
TC39 se denominó ECMA-262, en el que se definió por primera vez el lenguaje ECMAScript.
Por este motivo, algunos programadores prefieren la denominación ECMAScript para referirse al
lenguaje JavaScript. De hecho, JavaScript no es más que la implementación que realizó la
empresa Netscape del estándar ECMAScript.
La organización internacional para la estandarización (ISO) adoptó el estándar ECMA-262 a
través de su comisión IEC, dando lugar al estándar ISO/IEC-16262.

(Fuente: [JavaScript](http://www.jesusda.com/docs/ebooks/introduccion_javascript.pdf))
<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

###  Definir JavaScript en un archivo externo

Las instrucciones JavaScript se pueden incluir en un archivo externo de tipo JavaScript que los
documentos XHTML enlazan mediante la etiqueta script Se pueden crear todos los archivos
JavaScript que sean necesarios y cada documento XHTML puede enlazar tantos archivos
JavaScript como necesite.
Ejemplo:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/
xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Ejemplo de código JavaScript en el propio documento</title>
<script type="text/javascript" src="/js/codigo.js"></script>
</head>
<body>
<p>Un párrafo de texto.</p>
</body>
</html>
```


### Variables en JS

Las variables en los lenguajes de programación siguen una lógica similar a las variables
utilizadas en otros ámbitos como las matemáticas. Una variable es un elemento que se emplea
para almacenar y hacer referencia a otro valor


  ```
  @@ -7,8 +7,28 @@
    <script>
        
//        alert('Hola');
//        console.log('Hola desde la consola');
        
        console.log('Hola desde la consola');
        var texto="Texto";
        var numero = 1;
        var float = 1.223;
        var booleanTrue = true;
        var booleanFalse = false;
        var varNull = null;
        var varUndefined = undefined;
        
        console.log(texto);
        console.log(numero);
        console.log(float);
        console.log(booleanTrue);
        console.log(booleanFalse);
        console.log(varNull);
        console.log(varUndefined);       
        
    </script>
@@ -16,4 +36,4 @@
<body>
    
</body>
</html>
-\ No newline at end of file
</html>

  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>
### Tipos de variables

####Numéricas
Se utilizan para almacenar valores numéricos enteros (llamados integer en inglés) o decimales
(llamados float en inglés). En este caso, el valor se asigna indicando directamente el número
entero o decimal. Los números decimales utilizan el carácter . (punto) en vez de , (coma) para
separar la parte entera y la parte decimal:
 ```
var iva = 16; // variable tipo entero
var total = 234.65; // variable tipo decimal
 ```
#### Cadenas de texto
Se utilizan para almacenar caracteres, palabras y/o frases de texto. Para asignar el valor a la
variable, se encierra el valor entre comillas dobles o simples, para delimitar su comienzo y su
final:
```
var mensaje = "Bienvenido a nuestro sitio web";
var nombreProducto = 'Producto ABC';
var letraSeleccionada = 'c';
```


####Arrays

En ocasiones, a los arrays se les llama vectores, matrices e incluso arreglos. No obstante, el
término array es el más utilizado y es una palabra comúnmente aceptada en el entorno de la
programación.
Un array es una colección de variables, que pueden ser todas del mismo tipo o cada una de un
tipo diferente. Su utilidad se comprende mejor con un ejemplo sencillo: si una aplicación
necesita manejar los días de la semana, se podrían crear siete variables de tipo texto:
```
var dia1 = "Lunes";
var dia2 = "Martes";
...
var dia7 = "Domingo";

```

####Lógicos
Los operadores lógicos son imprescindibles para realizar aplicaciones complejas, ya que se
utilizan para tomar decisiones sobre las instrucciones que debería ejecutar el programa en
función de ciertas condiciones.
El resultado de cualquier operación que utilice operadores lógicos siempre es un valor lógico o
booleano
### Objetos Personalizados
JavaScript es un lenguaje basado en prototipos que no contiene ninguna declaración de clase, como se encuentra, por ejemplo, en C + + o Java. Esto es a veces confuso para los programadores acostumbrados a los lenguajes con una declaración de clase. En su lugar, JavaScript utiliza funciones como clases. Definir una clase es tan fácil como definir una función. En el ejemplo siguiente se define una nueva clase llamada Persona.
```
var michelle = 'Nombre Michelle';
        var adrian = {
            'nombre': 'Adrian',
            'apellido': 'Eguez',
            edad: 27,
            mascotas: ['Cachetes', 'Oso', 'BJ', 123, {
                nombre: michelle
            }],
            hermanos: [{
                    nombre: 'Felipe',
                    apellido: 'Eguez'
            }, {
                    nombre: 'Carlos',
                    apellido: 'Eguez'
            }
                     ],
            getNombre: function () {
                return this.nombre;
            },
            getApellido: function () {
                return this.apellido;
            },
            setApellido: function (nuevoApellido) {
                this.apellido = nuevoApellido;
            }
        }

```


## Conclusiones y Recomendaciones

- No es necesario declarar las variables
- Las variables en los lenguajes de programación siguen una lógica similar a las variables
utilizadas en otros ámbitos como las matemáticas
- Desde su aparición, JavaScript siempre fue utilizado de forma masiva por la mayoría de sitios de
Internet
- la aparición de las aplicaciones AJAX programadas con JavaScript le ha devuelto
una popularidad sin igual dentro de los lenguajes de programación web
- JavaScript fue diseñado de forma que se ejecutara en un entorno
muy limitado que permitiera a los usuarios confiar en la ejecución de los scripts

<br>
<a href="#cabecera">A la cabecera</a>




# ¡Gracias por su atención!

Author: [Wilmer Guevara](https://github.com/wilgue10)# Introducción a la Web
