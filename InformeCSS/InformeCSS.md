# Etilos CSS

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-11-01`
### Estudiante : `Wilmer Vinicio Guevara Farinango`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Conocer la sintáxis de los estilos en cascada
- Aprender las diferentes formas de relacionarse con el html
- Ser capaces de escribir una hoja CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defhtml"></a>
### Definición HTML

Su poético nombre, hojas de estilos en cascada (Cascade style sheets) nos avisa de su lado más visual, de que llegan como el agua, desde distintas fuentes, para enriquecer aquello que tocan.¿Qué son los estilos CSS? La definición formal, de wikipedia, quizás no nos ayude demasiado, pero lo vamos a intentar:

“Hacen referencia a un lenguaje de hojas de estilos usado para describir la presentación semántica (el aspecto y formato) de un documento escrito en lenguaje de marcas. Su aplicación más común es dar estilo a páginas webs escritas en lenguaje HTML y XHTML, pero también puede ser aplicado a cualquier tipo de documentos XML, incluyendo SVG y XUL”

Su importancia reside en que cambiaron la forma de diseñar la web, los libros electrónicos, los blogs, los wordpress etc... abriendo un panorama visual y unas posibilidades muy importantes.

Gracias a ellas podrás pintar en soportes digitales. En la versión que estamos actualmente, las CSS3, se han añadido mejoras tan importantes como posibilidad de hacer degradados, formas redondeadas, adaptar el contenido web a los móviles, interactuar y modificar los elementos al pasar el ratón y un montón de posibilidades que vamos a ir viendo.
 (Fuente: [Pag Web](http://aulasne.navarra.es/mod/page/view.php?id=1423)
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="http://3.bp.blogspot.com/-Uxx7MPNoW6M/VawObbctiEI/AAAAAAAAWTs/5IopYFMO3PM/s1600/CSS%2BLo%2Bnuevo.png">
</p>
<br><br>
<a name="hist"></a>
### sintaxis o como se escriben los estilos CSS

Sintáxis o como se escriben los estilos CSS
Y antes de asustarnos por las diferentes variables que suponen recomendaros, que lo mejor es consultar de vez en cuando páginas como las que os recomiendo en el apartado de enlaces recomendados. Podréis encontrar desde editores online hasta páginas que te generan el contenido.

 

Si nosotros abrimos un documento en un editor de texto, como notepad, wordpad o cualquiera de los que vienen instalados en nuestro equipo informático, será suficiente. También podemos trabajar con editores de html y css como dreamweaver (Adobe) o KompoZer o Amaia (de software libre), hay muchos más como EDITplus o Netbeans (también de código abierto). Escribimos el ejemplo a continuación y guardamos el documento con un nombre y .css, ya habremos creado nuestra primera hoja de estilo.

Y se podrán poner tantas propiedades como consideremos.  ((Fuente: [Pag Web](http://aulasne.navarra.es/mod/page/view.php?id=1423)
<br>
<a href="#cabecera">A la cabecera</a>
Ejemplo::


```
body { color: grey;} y nuestro documento se verá con el texto escrito en gris.

 
```
Selector: Sera la parte del html que queremos retocar, pueden ser los párrafos (etiqueta<p>) o el fondo de la publicación con la etiqueta <body>. En este apartados hay numerosas combinaciones, vamos a ir viendo de lo sencillo a aplicaciones más complejas.

 

Propiedad: Es la parte que va a afectar, podremos definir su alineación (text-align) , su color (color), el tipo de letra... en este módulo formativo vamos a ver estas propiedades y a darte algunas herramientas que te permitan estar actualizado.

 

Valor: Será la cantidad de propiedad que queremos aplicar, o el tipo de letra... cada propiedad lleva asociado unos valores posibles.

###CSS con HTML

Pero también podemos definirlas en un fichero externo y luego llamarlas desde el código HTML. Esta es sin duda alguna una de sus mayores usos, ya que nos permite crear una misma hoja de estilos para toda la Web que luego llamamos desde cada una de las páginas. De esta manera, cambiando el fichero que contiene la hoja de estilos podemos cambiar el aspecto de toda la web.

Existen dos maneras de enlazar las hojas de estilo.

Haciendo uso de la etiqueta <link>





```


<html>

<head>

<link rel=”stylesheet” type=”text/css” href=”hoja_estilos.css”>

</head>

......

</html>
 
```



O utilizando la etiqueta @IMPORT
```
<html>

<head>

<style type=”text/css”>

@import url(“hoja_estilo.css”)

</style>

</head>

......

</html>
```

<a name="desarrollo"></a>






## Desarrollo del informe

### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la siguiente URL:

- Github
  * La url de github que es `https://github.com` 
- Usuario
  * La url de usuario de github que en este caso es: `/wilgue10` 
- Repositorio
  * El repositorio de Github que estamos usando, en este caso es `/TecWeb2016`
- Rama o  Branch
  * La rama de nuestro repositorio en este formato: `/blob/master`
- El PATH
  * La direccíon de nuesto archivo por ejemplo `/carpeta/subcarpeta/subsubcarpeta/archivo.png` en este ejemplo es `/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png` 
- RAW
  * Por ultimo mandamos un Query String Parameter de la con la variable `raw` y valor `true` de la siguiente manera: `?raw=true`
  
**Al final** nuestro url queda de la siguiente manera:

#### `https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true`

<p align="center">
<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">
</p>


### Links dentro de github

Para nosotros utilizar los Links dentro de Github debemos de hacer dos cosas:

1. Definir un anchor name donde nosotros queramos mover cuando demos clic de la siguiente manera y formate (**NOTESE QUE ESTAN JUNTAS**):

  ```
  <a name="nombre"></a>
  ## titulo2
  ```
2. Después de esto debemos de linkear mediante un texto por ejemplo en una lista de la siguiente manera (**NO ELVIDAR EL `#`**):
 
  ```
  - <a href="#nombre">Dale clic aqui para ir al titulo 2</a>
  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Adrian Eguez](https://github.com/adrianeguez)# Introducción a la Web

